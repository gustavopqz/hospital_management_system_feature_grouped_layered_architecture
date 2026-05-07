export class DBConnectionError extends Error {
    constructor(cause?: unknown) {
        super('Error trying to connect to Database', { cause });
        this.name = 'DBConnectionError';
    }
}