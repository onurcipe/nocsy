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

// -- abort
import AbortError from "./error/AbortError.js";

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

// -- aborter
import Aborter from "./core/Aborter.js";

// -- factory
import type {
    Factory,

    FactoryArgs,
} from "./core/Factory.js";

// -- connector
import type {
    Connector,
} from "./core/Connector.js";

// -- transport
import type {
    Transport,
} from "./core/Transport.js";

// -- runtime
import Runtime from "./core/Runtime.js";
import type {
    RuntimeArgs,
    RuntimeDeps,
    RuntimeOptions,
    RuntimeConfig,

    RuntimeInitHook,
    RuntimeConnectorCreator,
    RuntimeTransportCreator,

    RuntimeState,
} from "./core/Runtime.js";

// infra/

// -- connector/

// ---- mongodb/

// ------ connector
import MongoDBConnector from "./infra/connector/mongodb/MongoDBConnector.js";
import type {
    MongoDBConnectorArgs,
    MongoDBConnectorDeps,
    MongoDBConnectorOptions,
    MongoDBConnectorConfig,

    MongoDBClientOptions,

    MongoDBConnectorState,
} from "./infra/connector/mongodb/MongoDBConnector.js";

// ------ factory
import createMongoDBConnector from "./infra/connector/mongodb/MongoDBConnectorFactory.js";
import type {
    MongoDBConnectorFactory,

    MongoDBConnectorFactoryArgs,
} from "./infra/connector/mongodb/MongoDBConnectorFactory.js";

// -- transport/

// ---- http/

// ------ transport
import HttpTransport from "./infra/transport/http/HttpTransport.js";
import type {
    HttpTransportArgs,
    HttpTransportDeps,
    HttpTransportOptions,
    HttpTransportConfig,

    HttpServerOptions,
    HttpsServerOptions,

    HttpTransportState,
} from "./infra/transport/http/HttpTransport.js";

// ------ factory
import createHttpTransport from "./infra/transport/http/HttpTransportFactory.js";
import type {
    HttpTransportFactory,

    HttpTransportFactoryArgs,
} from "./infra/transport/http/HttpTransportFactory.js";

// core/

// -- db/

// ---- repository
import type {
    Repository,
} from "./core/db/Repository.js";

// infra/

// -- db/

// ---- mongodb/

// ------ data type
import MongoDBDataType from "./infra/db/mongodb/MongoDBDataType.js";
import type {
    MongoDBBsonTypeName,
} from "./infra/db/mongodb/MongoDBDataType.js";

// ------ model
import MongoDBModel from "./infra/db/mongodb/MongoDBModel.js";
import type {
    MongoDBModelArgs,
    MongoDBModelOptions,
    MongoDBModelConfig,

    MongoDBModelDefinition,
    MongoDBJsonSchema,
} from "./infra/db/mongodb/MongoDBModel.js";

// ------ gateway
import MongoDBGateway from "./infra/db/mongodb/MongoDBGateway.js";
import type {
    MongoDBGatewayArgs,
    MongoDBGatewayDeps,
    MongoDBGatewayOptions,
    MongoDBGatewayConfig,
} from "./infra/db/mongodb/MongoDBGateway.js";

// ------ repository
import MongoDBRepository from "./infra/db/mongodb/MongoDBRepository.js";
import type {
    MongoDBRepositoryArgs,
    MongoDBRepositoryDeps,

    MongoDBContext,
    MongoDBDottedObject,
} from "./infra/db/mongodb/MongoDBRepository.js";

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

    // -- abort
    AbortError,

    // core/

    // -- registry
    Registry,

    // -- logger
    Logger,

    // -- aborter
    Aborter,

    // -- runtime
    Runtime,

    // infra/

    // -- connector/

    // ---- mongodb/

    // ------ connector
    MongoDBConnector,

    // ------ factory
    createMongoDBConnector,

    // -- transport/

    // ---- http/

    // ------ transport
    HttpTransport,

    // ------ factory
    createHttpTransport,

    // infra/

    // -- db/

    // ---- mongodb/

    // ------ data type
    MongoDBDataType,

    // ------ model
    MongoDBModel,

    // ------ gateway
    MongoDBGateway,

    // ------ repository
    MongoDBRepository,
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

    // -- factory
    Factory,

    FactoryArgs,

    // -- connector
    Connector,

    // -- transport
    Transport,

    // -- runtime
    RuntimeArgs,
    RuntimeDeps,
    RuntimeOptions,
    RuntimeConfig,

    RuntimeInitHook,
    RuntimeConnectorCreator,
    RuntimeTransportCreator,

    RuntimeState,

    // infra/

    // -- connector/

    // ---- mongodb/

    // ------ connector
    MongoDBConnectorArgs,
    MongoDBConnectorDeps,
    MongoDBConnectorOptions,
    MongoDBConnectorConfig,

    MongoDBClientOptions,

    MongoDBConnectorState,

    // ------ factory
    MongoDBConnectorFactory,

    MongoDBConnectorFactoryArgs,

    // -- transport/

    // ---- http/

    // ------ transport
    HttpTransportArgs,
    HttpTransportDeps,
    HttpTransportOptions,
    HttpTransportConfig,

    HttpServerOptions,
    HttpsServerOptions,

    HttpTransportState,

    // ------ factory
    HttpTransportFactory,

    HttpTransportFactoryArgs,

    // core/

    // -- db/

    // ---- repository
    Repository,

    // infra/

    // -- db/

    // ---- mongodb/

    // ------ data type
    MongoDBBsonTypeName,

    // ------ model
    MongoDBModelArgs,
    MongoDBModelOptions,
    MongoDBModelConfig,

    MongoDBModelDefinition,
    MongoDBJsonSchema,

    // ------ gateway
    MongoDBGatewayArgs,
    MongoDBGatewayDeps,
    MongoDBGatewayOptions,
    MongoDBGatewayConfig,

    // ------ repository
    MongoDBRepositoryArgs,
    MongoDBRepositoryDeps,

    MongoDBContext,
    MongoDBDottedObject,
};
