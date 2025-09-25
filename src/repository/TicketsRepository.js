import GenericRepository from './GenericRepository.js';
import ticketModel from '../dao/models/Ticket.js';

export default class TicketsRepository extends GenericRepository {
    constructor() {
        super(ticketModel);
    }
}