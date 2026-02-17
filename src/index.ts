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

// -- record/

// ---- not found
import RecordNotFoundError from "./error/record/RecordNotFoundError.js";

// ---- multiple found
import RecordMultipleFoundError from "./error/record/RecordMultipleFoundError.js";

// ---- version mismatch
import RecordVersionMismatchError from "./error/record/RecordVersionMismatchError.js";

// -- http/

// ---- http
import HttpError from "./error/http/HttpError.js";

// ---- bad request
import BadRequestError from "./error/http/HttpBadRequestError.js";

// ---- unauthorized
import UnauthorizedError from "./error/http/HttpUnauthorizedError.js";

// ---- forbidden
import ForbiddenError from "./error/http/HttpForbiddenError.js";

// ---- not found
import NotFoundError from "./error/http/HttpNotFoundError.js";

// ---- conflict
import ConflictError from "./error/http/HttpConflictError.js";

// ---- internal server
import InternalServerError from "./error/http/HttpInternalServerError.js";

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

// ---- session
import type {
    Session,
} from "./core/db/Session.js";

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

// ------ session
import MongoDBSession from "./infra/db/mongodb/MongoDBSession.js";
import type {
    MongoDBSessionArgs,
    MongoDBSessionDeps,
    MongoDBSessionOptions,
} from "./infra/db/mongodb/MongoDBSession.js";

// core/

// -- service
import Service from "./core/Service.js";
import type {
    ServiceArgs,
    ServiceDeps,
    ServiceOptions,
    ServiceConfig,

    FieldSchema,

    CountHooks,
    ReadHooks,
    ReadOneHooks,
    ReadOneByIdHooks,
    ReadOneByIdAndVersionHooks,
    CreateOneHooks,
    UpdateOneHooks,
    UpdateOneByIdAndVersionHooks,
    SoftDeleteOneHooks,
    SoftDeleteOneByIdAndVersionHooks,
    DeleteOneHooks,
    DeleteOneByIdAndVersionHooks,
} from "./core/Service.js";

// -- controller
import Controller from "./core/Controller.js";
import type {
    ControllerArgs,
    ControllerOptions,
    ControllerConfig,

    Schema,
    DataTypeAny,
    DataTypeNull,
    DataTypePrimitive,
    DataTypeObject,
    DataTypeArray,

    ExpectedDataType,
    SentDataType,

    ErrorResponseBody,
} from "./core/Controller.js";

// infra/

// -- web/

// ---- express/

// ------ adapter
import ExpressAdapter from "./infra/web/express/ExpressAdapter.js";
import type {
    RequestElementName,
    RequestSchema,
    ParsedRequest,
} from "./infra/web/express/ExpressAdapter.js";

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

    // -- record/

    // ---- not found
    RecordNotFoundError,

    // ---- multiple found
    RecordMultipleFoundError,

    // ---- version mismatch
    RecordVersionMismatchError,

    // -- http/

    // ---- http
    HttpError,

    // ---- bad request
    BadRequestError,

    // ---- unauthorized
    UnauthorizedError,

    // ---- forbidden
    ForbiddenError,

    // ---- not found
    NotFoundError,

    // ---- conflict
    ConflictError,

    // ---- internal server
    InternalServerError,

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

    // ------ session
    MongoDBSession,

    // core/

    // -- service
    Service,

    // -- controller
    Controller,

    // infra/

    // -- web/

    // ---- express/

    // ------ adapter
    ExpressAdapter,
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

    // ---- session
    Session,

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

    // ------ session
    MongoDBSessionArgs,
    MongoDBSessionDeps,
    MongoDBSessionOptions,

    // core/

    // -- service
    ServiceArgs,
    ServiceDeps,
    ServiceOptions,
    ServiceConfig,

    FieldSchema,

    CountHooks,
    ReadHooks,
    ReadOneHooks,
    ReadOneByIdHooks,
    ReadOneByIdAndVersionHooks,
    CreateOneHooks,
    UpdateOneHooks,
    UpdateOneByIdAndVersionHooks,
    SoftDeleteOneHooks,
    SoftDeleteOneByIdAndVersionHooks,
    DeleteOneHooks,
    DeleteOneByIdAndVersionHooks,

    // -- controller
    ControllerArgs,
    ControllerOptions,
    ControllerConfig,

    Schema,
    DataTypeAny,
    DataTypeNull,
    DataTypePrimitive,
    DataTypeObject,
    DataTypeArray,

    ExpectedDataType,
    SentDataType,

    ErrorResponseBody,

    // infra/

    // -- web/

    // ---- express/

    // ------ adapter
    RequestElementName,
    RequestSchema,
    ParsedRequest,
};
