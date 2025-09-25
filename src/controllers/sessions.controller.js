import jwt from 'jsonwebtoken';
import UserDTO from '../dto/User.dto.js';
import { usersServices } from '../services/index.js';
import { sendEmail } from '../utils/mailer.js';
import { passwordValidation } from '../utils/index.js';

const register = async (req, res) => {
    res.send({ status: "success", message: "Usuario registrado con éxito." });
}

const login = async (req, res) => {
    const user = req.user;

    const userDto = UserDTO.getUserTokenFrom(user);
    const token = jwt.sign(userDto, 'tokenSecretJWT', { expiresIn: "1h" });

    res.cookie('coderCookie', token, { maxAge: 3600000 }).send({ status: "success", message: "¡Ingreso exitoso!" });
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send({ status: "error", error: "Debe ingresar un email" });
    }

    try {
        const user = await usersServices.getUserByEmail(email);
        if (!user) {
            // AUNQUE EL USUARIO NO EXISTA, DAMOS UNA RESPUESTA GENÉRICA POR SEGURIDAD
            // para no revelar qué emails están o no en la base de datos.
            return res.send({ status: "success", message: "Si el correo existe en nuestra base de datos, se ha enviado un enlace para restablecer la contraseña." });
        }

        // Generamos un token de reseteo que expira en 1 hora
        const resetToken = jwt.sign(
            { userId: user._id },
            process.env.RESET_TOKEN_SECRET,
            { expiresIn: '1h' }
        );

        const resetLink = `http://localhost:8080/reset-password-view/${resetToken}`;

        const emailBody = `
            <h1>Restablecer Contraseña</h1>
            <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente botón para continuar:</p>
            <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; color: black; background-color: #007bff; text-decoration: none; border-radius: 5px;">Restablecer Contraseña</a>
            <p>Este enlace expirará en 1 hora.</p>
            <p>Si no solicitaste esto, por favor ignora este correo.</p>
        `;

        await sendEmail(user.email, "Recuperación de Contraseña", emailBody);

        res.send({ status: "success", message: "Si el correo existe en nuestra base de datos, se ha enviado un enlace para restablecer la contraseña." });

    } catch (error) {
        console.error("Error en forgotPassword:", error);
        res.status(500).send({ status: "error", error: "Ocurrió un error en el servidor." });
    }
};

const resetPasswordView = (req, res) => {
    const { token } = req.params;
    try {
        // Verificamos el token solo para asegurarnos de que sea válido antes de mostrar la vista.
        jwt.verify(token, process.env.RESET_TOKEN_SECRET);
        // Renderizamos un HTML simple con un formulario.
        res.send(`
            <html>
                <head>
                    <title>Restablecer Contraseña</title>
                </head>
                <body>
                    <h1>Ingresa tu nueva contraseña</h1>
                    <form action="/api/sessions/reset-password/${token}" method="POST">
                        <label for="password">Nueva Contraseña:</label>
                        <input type="password" id="password" name="password" required>
                        <button type="submit">Restablecer</button>
                    </form>
                </body>
            </html>
        `);
    } catch (error) {
        // Si el token es inválido o expiró, mostramos un mensaje.
        console.error("Error en resetPasswordView:", error);
        res.status(400).send("<h1>Token inválido o expirado.</h1><p>Por favor, solicita un nuevo enlace de recuperación.</p>");
    }
};

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
        const user = await usersServices.getUserById(decoded.userId);

        if (!user) {
            return res.status(404).send({ status: "error", error: "Usuario no encontrado" });
        }

        // Validamos que la nueva contraseña no sea la misma que la anterior.
        const isSamePassword = await passwordValidation(user, password);
        if (isSamePassword) {
            return res.status(400).send({ status: "error", error: "No puedes usar la misma contraseña anterior." });
        }

        user.password = password;
        await usersServices.update(user._id, user);

        res.send({ status: "success", message: "Contraseña restablecida con éxito." });

    } catch (error) {
        console.error("Error en resetPassword:", error);
        res.status(400).send({ status: "error", error: "Token inválido o expirado." });
    }
};

const current = async (req, res) => {
    res.send({ status: "success", payload: req.user });
}

export default {
    register,
    login,
    forgotPassword,
    resetPasswordView,
    resetPassword,
    current,
}