/**
 * Middleware de autorización basado en roles.
 * @param {Array<string>} roles - Un array de roles permitidos para acceder a la ruta.
 */
const authorization = (roles) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).send({ status: "error", error: "No autorizado: Ningún usuario ha iniciado sesión" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).send({ status: "error", error: "No autorizado: No tienes permiso para acceder a este recurso." });
        }

        next();
    }
}

export default authorization;