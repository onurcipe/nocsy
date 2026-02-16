// util/

// -- value
import {
    isDefined,
    isPresent,
    isPopulated,

    clone,
} from "./util/value.js";

// -- data-type/

// ---- boolean
import {
    isBoolean,
    toBoolean,
} from "./util/data-type/boolean.js";

// ---- number
import {
    isNumber,
    toNumber,
} from "./util/data-type/number.js";

// ---- string
import {
    isString,
    toString,
} from "./util/data-type/string.js";

// ---- date
import {
    isDate,
    toDate,

    formatUtcDate,
    formatUtcTime,
} from "./util/data-type/date.js";

// ---- object
import {
    isObject,
} from "./util/data-type/object.js";

// ---- array
import {
    isArray,
} from "./util/data-type/array.js";

// error/

// -- nocsy
import NocsyError from "./error/NocsyError.js";

// -- framework
import FrameworkError from "./error/FrameworkError.js";

// -- user
import UserError from "./error/UserError.js";

// core/

// -- registry
import Registry from "./core/Registry.js";
import type {
    RegistryToken,
} from "./core/Registry.js";

// -- logger
import Logger from "./core/Logger.js";
import type {
    LoggerOptions,
    LoggerConfig,

    LogTarget,
    LogLevel,
} from "./core/Logger.js";

export {
    // util/

    // -- value
    isDefined,
    isPresent,
    isPopulated,

    clone,

    // -- data-type/

    // ---- boolean
    isBoolean,
    toBoolean,

    // ---- number
    isNumber,
    toNumber,

    // ---- string
    isString,
    toString,

    // ---- date
    isDate,
    toDate,

    formatUtcDate,
    formatUtcTime,

    // ---- object
    isObject,

    // ---- array
    isArray,

    // error/

    // -- nocsy
    NocsyError,

    // -- framework
    FrameworkError,

    // -- user
    UserError,

    // core/

    // -- registry
    Registry,

    // -- logger
    Logger,
};

export type {
    // core/

    // -- registry
    RegistryToken,

    // -- logger
    LoggerOptions,
    LoggerConfig,

    LogTarget,
    LogLevel,
};
