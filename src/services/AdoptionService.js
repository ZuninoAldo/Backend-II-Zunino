export default class AdoptionService {
    constructor(adoptionRepository, usersRepository, petsRepository) {
        this.adoptionRepository = adoptionRepository;
        this.usersRepository = usersRepository;
        this.petsRepository = petsRepository;
    }

    getAll = async () => {
        return await this.adoptionRepository.getAll();
    }

    getById = async (aid) => {
        return await this.adoptionRepository.getBy({ _id: aid });
    }

    create = async (uid, pid) => {
        const user = await this.usersRepository.getBy({ _id: uid });
        if (!user) throw new Error("Usuario no encontrado. Por favor, vuelva a intentar.");

        const pet = await this.petsRepository.getBy({ _id: pid });
        if (!pet) throw new Error("Mascota no encontrada. Por favor, vuelva a intentar.");

        if (pet.adopted) throw new Error("La mascota ya ha sido adoptada. Por favor, elige otra.");

        const adoption = await this.adoptionRepository.create({ owner: user._id, pet: pet._id });

        pet.adopted = true;
        await this.petsRepository.update(pet._id, { adopted: true });

        return adoption;
    }
}