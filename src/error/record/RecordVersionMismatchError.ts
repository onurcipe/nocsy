import NocsyError from "../NocsyError.js";

class RecordVersionMismatchError extends NocsyError
{
    public constructor (code?: string, message?: string)
    {
        super(
            code ?? "RECORD-VERSION_MISMATCH",
            message ?? "Record was modified after you last read it.",
        );
    }
}

export default RecordVersionMismatchError;
