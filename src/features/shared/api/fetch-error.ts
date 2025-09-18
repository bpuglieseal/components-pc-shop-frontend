export class FetchError extends Error {
    private status: number

    constructor (message: string, status: number) {
        super(message)
        this.status = status
    }

    getStatus (): number {
        return this.status
    }
}