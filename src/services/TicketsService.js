export default class TicketsService {
    constructor(repository) {
        this.repository = repository;
    }

    createTicket = (ticketData) => this.repository.create(ticketData);
}