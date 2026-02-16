import {isPresent} from "../util/value.js";

class NocsyError extends Error
{
    public readonly code: string;

    public constructor (code?: string, message?: string)
    {
        super(message ?? "Onur: It works on my machine.");

        Object.setPrototypeOf(this, NocsyError.prototype);
        Error.captureStackTrace(this, NocsyError);
        this.code = code ?? "ERROR";
    }

    public toString (isWithError?: boolean): string
    {
        let result: string = `${this.code}\n${this.message}`;

        if (isWithError && isPresent(this.stack))
        {
            result = `${result}\n${this.stack}`;
        }

        return result;
    }

    public toObject (): Record<string, unknown>
    {
        return {
            code: this.code,
            message: this.message,
            stack: this.stack,
        };
    }
}

export default NocsyError;
