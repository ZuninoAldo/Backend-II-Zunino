import { adoptionsService } from "../services/index.js";

const getAllAdoptions = async (req, res) => {
    try {
        const result = await adoptionsService.getAll();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

const getAdoption = async (req, res) => {
    try {
        const adoptionId = req.params.aid;
        const adoption = await adoptionsService.getById(adoptionId);
        if (!adoption) return res.status(404).send({ status: "error", error: "Adopción no encontrada. Por favor, vuelve a intentar." });
        res.send({ status: "success", payload: adoption });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

const createAdoption = async (req, res) => {
    try {
        const { uid, pid } = req.params;
        const result = await adoptionsService.create(uid, pid);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(400).send({ status: "error", error: error.message });
    }
};

export default {
    createAdoption,
    getAllAdoptions,
    getAdoption
};