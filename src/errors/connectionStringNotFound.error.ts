export class ConnectionStringNotFoundError extends Error {
    constructor() {
        super('Connection string is not between the environment variables');
        this.name = 'ConnectionStringNotFoundError';
    }
};