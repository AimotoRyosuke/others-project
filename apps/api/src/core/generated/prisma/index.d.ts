/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Post
 *
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>;
/**
 * Model Emotion
 *
 */
export type Emotion = $Result.DefaultSelection<Prisma.$EmotionPayload>;
/**
 * Model PostEmotion
 *
 */
export type PostEmotion = $Result.DefaultSelection<Prisma.$PostEmotionPayload>;
/**
 * Model Reaction
 *
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>;
/**
 * Model PrivateNote
 *
 */
export type PrivateNote = $Result.DefaultSelection<Prisma.$PrivateNotePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emotion`: Exposes CRUD operations for the **Emotion** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Emotions
   * const emotions = await prisma.emotion.findMany()
   * ```
   */
  get emotion(): Prisma.EmotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postEmotion`: Exposes CRUD operations for the **PostEmotion** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PostEmotions
   * const postEmotions = await prisma.postEmotion.findMany()
   * ```
   */
  get postEmotion(): Prisma.PostEmotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reactions
   * const reactions = await prisma.reaction.findMany()
   * ```
   */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateNote`: Exposes CRUD operations for the **PrivateNote** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PrivateNotes
   * const privateNotes = await prisma.privateNote.findMany()
   * ```
   */
  get privateNote(): Prisma.PrivateNoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Post: 'Post';
    Emotion: 'Emotion';
    PostEmotion: 'PostEmotion';
    Reaction: 'Reaction';
    PrivateNote: 'PrivateNote';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'post'
        | 'emotion'
        | 'postEmotion'
        | 'reaction'
        | 'privateNote';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>;
        fields: Prisma.PostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePost>;
          };
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostCountArgs<ExtArgs>;
            result: $Utils.Optional<PostCountAggregateOutputType> | number;
          };
        };
      };
      Emotion: {
        payload: Prisma.$EmotionPayload<ExtArgs>;
        fields: Prisma.EmotionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EmotionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EmotionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>;
          };
          findFirst: {
            args: Prisma.EmotionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EmotionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>;
          };
          findMany: {
            args: Prisma.EmotionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>[];
          };
          create: {
            args: Prisma.EmotionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>;
          };
          createMany: {
            args: Prisma.EmotionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EmotionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>[];
          };
          delete: {
            args: Prisma.EmotionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>;
          };
          update: {
            args: Prisma.EmotionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>;
          };
          deleteMany: {
            args: Prisma.EmotionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EmotionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EmotionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>[];
          };
          upsert: {
            args: Prisma.EmotionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>;
          };
          aggregate: {
            args: Prisma.EmotionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmotion>;
          };
          groupBy: {
            args: Prisma.EmotionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmotionGroupByOutputType>[];
          };
          count: {
            args: Prisma.EmotionCountArgs<ExtArgs>;
            result: $Utils.Optional<EmotionCountAggregateOutputType> | number;
          };
        };
      };
      PostEmotion: {
        payload: Prisma.$PostEmotionPayload<ExtArgs>;
        fields: Prisma.PostEmotionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostEmotionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostEmotionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>;
          };
          findFirst: {
            args: Prisma.PostEmotionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostEmotionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>;
          };
          findMany: {
            args: Prisma.PostEmotionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>[];
          };
          create: {
            args: Prisma.PostEmotionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>;
          };
          createMany: {
            args: Prisma.PostEmotionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostEmotionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>[];
          };
          delete: {
            args: Prisma.PostEmotionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>;
          };
          update: {
            args: Prisma.PostEmotionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>;
          };
          deleteMany: {
            args: Prisma.PostEmotionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostEmotionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostEmotionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>[];
          };
          upsert: {
            args: Prisma.PostEmotionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostEmotionPayload>;
          };
          aggregate: {
            args: Prisma.PostEmotionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePostEmotion>;
          };
          groupBy: {
            args: Prisma.PostEmotionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostEmotionGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostEmotionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PostEmotionCountAggregateOutputType>
              | number;
          };
        };
      };
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>;
        fields: Prisma.ReactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>;
          };
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>;
          };
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[];
          };
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>;
          };
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[];
          };
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>;
          };
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>;
          };
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[];
          };
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>;
          };
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReaction>;
          };
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>;
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number;
          };
        };
      };
      PrivateNote: {
        payload: Prisma.$PrivateNotePayload<ExtArgs>;
        fields: Prisma.PrivateNoteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PrivateNoteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PrivateNoteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>;
          };
          findFirst: {
            args: Prisma.PrivateNoteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PrivateNoteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>;
          };
          findMany: {
            args: Prisma.PrivateNoteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>[];
          };
          create: {
            args: Prisma.PrivateNoteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>;
          };
          createMany: {
            args: Prisma.PrivateNoteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PrivateNoteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>[];
          };
          delete: {
            args: Prisma.PrivateNoteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>;
          };
          update: {
            args: Prisma.PrivateNoteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>;
          };
          deleteMany: {
            args: Prisma.PrivateNoteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PrivateNoteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PrivateNoteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>[];
          };
          upsert: {
            args: Prisma.PrivateNoteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PrivateNotePayload>;
          };
          aggregate: {
            args: Prisma.PrivateNoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePrivateNote>;
          };
          groupBy: {
            args: Prisma.PrivateNoteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PrivateNoteGroupByOutputType>[];
          };
          count: {
            args: Prisma.PrivateNoteCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PrivateNoteCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    post?: PostOmit;
    emotion?: EmotionOmit;
    postEmotion?: PostEmotionOmit;
    reaction?: ReactionOmit;
    privateNote?: PrivateNoteOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number;
    reactions: number;
    privateNotes: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs;
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs;
    privateNotes?: boolean | UserCountOutputTypeCountPrivateNotesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReactionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrivateNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PrivateNoteWhereInput;
  };

  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postEmotions: number;
    reactions: number;
    privateNotes: number;
  };

  export type PostCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    postEmotions?: boolean | PostCountOutputTypeCountPostEmotionsArgs;
    reactions?: boolean | PostCountOutputTypeCountReactionsArgs;
    privateNotes?: boolean | PostCountOutputTypeCountPrivateNotesArgs;
  };

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostEmotionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostEmotionWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountReactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReactionWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPrivateNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PrivateNoteWhereInput;
  };

  /**
   * Count Type EmotionCountOutputType
   */

  export type EmotionCountOutputType = {
    postEmotions: number;
  };

  export type EmotionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    postEmotions?: boolean | EmotionCountOutputTypeCountPostEmotionsArgs;
  };

  // Custom InputTypes
  /**
   * EmotionCountOutputType without action
   */
  export type EmotionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmotionCountOutputType
     */
    select?: EmotionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmotionCountOutputType without action
   */
  export type EmotionCountOutputTypeCountPostEmotionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostEmotionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    ordinal: number | null;
  };

  export type UserSumAggregateOutputType = {
    ordinal: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    firebaseUid: string | null;
    ordinal: number | null;
    nickname: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    firebaseUid: string | null;
    ordinal: number | null;
    nickname: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    firebaseUid: number;
    ordinal: number;
    nickname: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    ordinal?: true;
  };

  export type UserSumAggregateInputType = {
    ordinal?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    firebaseUid?: true;
    ordinal?: true;
    nickname?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    firebaseUid?: true;
    ordinal?: true;
    nickname?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    firebaseUid?: true;
    ordinal?: true;
    nickname?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    firebaseUid: string;
    ordinal: number;
    nickname: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firebaseUid?: boolean;
      ordinal?: boolean;
      nickname?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      posts?: boolean | User$postsArgs<ExtArgs>;
      reactions?: boolean | User$reactionsArgs<ExtArgs>;
      privateNotes?: boolean | User$privateNotesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firebaseUid?: boolean;
      ordinal?: boolean;
      nickname?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firebaseUid?: boolean;
      ordinal?: boolean;
      nickname?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    firebaseUid?: boolean;
    ordinal?: boolean;
    nickname?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'firebaseUid' | 'ordinal' | 'nickname' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | User$postsArgs<ExtArgs>;
    reactions?: boolean | User$reactionsArgs<ExtArgs>;
    privateNotes?: boolean | User$privateNotesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
      reactions: Prisma.$ReactionPayload<ExtArgs>[];
      privateNotes: Prisma.$PrivateNotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        firebaseUid: string;
        ordinal: number;
        nickname: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    posts<T extends User$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$postsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$reactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReactionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    privateNotes<T extends User$privateNotesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$privateNotesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PrivateNotePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly firebaseUid: FieldRef<'User', 'String'>;
    readonly ordinal: FieldRef<'User', 'Int'>;
    readonly nickname: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.posts
   */
  export type User$postsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * User.reactions
   */
  export type User$reactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    where?: ReactionWhereInput;
    orderBy?:
      | ReactionOrderByWithRelationInput
      | ReactionOrderByWithRelationInput[];
    cursor?: ReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[];
  };

  /**
   * User.privateNotes
   */
  export type User$privateNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    where?: PrivateNoteWhereInput;
    orderBy?:
      | PrivateNoteOrderByWithRelationInput
      | PrivateNoteOrderByWithRelationInput[];
    cursor?: PrivateNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PrivateNoteScalarFieldEnum | PrivateNoteScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostMinAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    whatPerson: string | null;
    thoughts: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PostMaxAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    whatPerson: string | null;
    thoughts: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    authorId: number;
    whatPerson: number;
    thoughts: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    authorId?: true;
    whatPerson?: true;
    thoughts?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    authorId?: true;
    whatPerson?: true;
    thoughts?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    authorId?: true;
    whatPerson?: true;
    thoughts?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PostAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
    orderBy?:
      | PostOrderByWithAggregationInput
      | PostOrderByWithAggregationInput[];
    by: PostScalarFieldEnum[] | PostScalarFieldEnum;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: string;
    authorId: string;
    whatPerson: string;
    thoughts: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      authorId?: boolean;
      whatPerson?: boolean;
      thoughts?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      postEmotions?: boolean | Post$postEmotionsArgs<ExtArgs>;
      reactions?: boolean | Post$reactionsArgs<ExtArgs>;
      privateNotes?: boolean | Post$privateNotesArgs<ExtArgs>;
      _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      authorId?: boolean;
      whatPerson?: boolean;
      thoughts?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      authorId?: boolean;
      whatPerson?: boolean;
      thoughts?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectScalar = {
    id?: boolean;
    authorId?: boolean;
    whatPerson?: boolean;
    thoughts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PostOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'authorId' | 'whatPerson' | 'thoughts' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['post']
  >;
  export type PostInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    postEmotions?: boolean | Post$postEmotionsArgs<ExtArgs>;
    reactions?: boolean | Post$reactionsArgs<ExtArgs>;
    privateNotes?: boolean | Post$privateNotesArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PostIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PostIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PostPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Post';
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      postEmotions: Prisma.$PostEmotionPayload<ExtArgs>[];
      reactions: Prisma.$ReactionPayload<ExtArgs>[];
      privateNotes: Prisma.$PrivateNotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        authorId: string;
        whatPerson: string;
        thoughts: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['post']
    >;
    composites: {};
  };

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> =
    $Result.GetResult<Prisma.$PostPayload, S>;

  type PostCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Post'];
      meta: { name: 'Post' };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>,
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    postEmotions<T extends Post$postEmotionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$postEmotionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostEmotionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    reactions<T extends Post$reactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$reactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReactionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    privateNotes<T extends Post$privateNotesArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$privateNotesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PrivateNotePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<'Post', 'String'>;
    readonly authorId: FieldRef<'Post', 'String'>;
    readonly whatPerson: FieldRef<'Post', 'String'>;
    readonly thoughts: FieldRef<'Post', 'String'>;
    readonly createdAt: FieldRef<'Post', 'DateTime'>;
    readonly updatedAt: FieldRef<'Post', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post create
   */
  export type PostCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
  };

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
  };

  /**
   * Post.postEmotions
   */
  export type Post$postEmotionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    where?: PostEmotionWhereInput;
    orderBy?:
      | PostEmotionOrderByWithRelationInput
      | PostEmotionOrderByWithRelationInput[];
    cursor?: PostEmotionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostEmotionScalarFieldEnum | PostEmotionScalarFieldEnum[];
  };

  /**
   * Post.reactions
   */
  export type Post$reactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    where?: ReactionWhereInput;
    orderBy?:
      | ReactionOrderByWithRelationInput
      | ReactionOrderByWithRelationInput[];
    cursor?: ReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[];
  };

  /**
   * Post.privateNotes
   */
  export type Post$privateNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    where?: PrivateNoteWhereInput;
    orderBy?:
      | PrivateNoteOrderByWithRelationInput
      | PrivateNoteOrderByWithRelationInput[];
    cursor?: PrivateNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PrivateNoteScalarFieldEnum | PrivateNoteScalarFieldEnum[];
  };

  /**
   * Post without action
   */
  export type PostDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
  };

  /**
   * Model Emotion
   */

  export type AggregateEmotion = {
    _count: EmotionCountAggregateOutputType | null;
    _min: EmotionMinAggregateOutputType | null;
    _max: EmotionMaxAggregateOutputType | null;
  };

  export type EmotionMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    label: string | null;
  };

  export type EmotionMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    label: string | null;
  };

  export type EmotionCountAggregateOutputType = {
    id: number;
    code: number;
    label: number;
    _all: number;
  };

  export type EmotionMinAggregateInputType = {
    id?: true;
    code?: true;
    label?: true;
  };

  export type EmotionMaxAggregateInputType = {
    id?: true;
    code?: true;
    label?: true;
  };

  export type EmotionCountAggregateInputType = {
    id?: true;
    code?: true;
    label?: true;
    _all?: true;
  };

  export type EmotionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Emotion to aggregate.
     */
    where?: EmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Emotions to fetch.
     */
    orderBy?:
      | EmotionOrderByWithRelationInput
      | EmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Emotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Emotions
     **/
    _count?: true | EmotionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmotionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmotionMaxAggregateInputType;
  };

  export type GetEmotionAggregateType<T extends EmotionAggregateArgs> = {
    [P in keyof T & keyof AggregateEmotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmotion[P]>
      : GetScalarType<T[P], AggregateEmotion[P]>;
  };

  export type EmotionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EmotionWhereInput;
    orderBy?:
      | EmotionOrderByWithAggregationInput
      | EmotionOrderByWithAggregationInput[];
    by: EmotionScalarFieldEnum[] | EmotionScalarFieldEnum;
    having?: EmotionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmotionCountAggregateInputType | true;
    _min?: EmotionMinAggregateInputType;
    _max?: EmotionMaxAggregateInputType;
  };

  export type EmotionGroupByOutputType = {
    id: string;
    code: string;
    label: string;
    _count: EmotionCountAggregateOutputType | null;
    _min: EmotionMinAggregateOutputType | null;
    _max: EmotionMaxAggregateOutputType | null;
  };

  type GetEmotionGroupByPayload<T extends EmotionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EmotionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EmotionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmotionGroupByOutputType[P]>
            : GetScalarType<T[P], EmotionGroupByOutputType[P]>;
        }
      >
    >;

  export type EmotionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      label?: boolean;
      postEmotions?: boolean | Emotion$postEmotionsArgs<ExtArgs>;
      _count?: boolean | EmotionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['emotion']
  >;

  export type EmotionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      label?: boolean;
    },
    ExtArgs['result']['emotion']
  >;

  export type EmotionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      label?: boolean;
    },
    ExtArgs['result']['emotion']
  >;

  export type EmotionSelectScalar = {
    id?: boolean;
    code?: boolean;
    label?: boolean;
  };

  export type EmotionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'code' | 'label',
    ExtArgs['result']['emotion']
  >;
  export type EmotionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    postEmotions?: boolean | Emotion$postEmotionsArgs<ExtArgs>;
    _count?: boolean | EmotionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type EmotionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type EmotionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $EmotionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Emotion';
    objects: {
      postEmotions: Prisma.$PostEmotionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        code: string;
        label: string;
      },
      ExtArgs['result']['emotion']
    >;
    composites: {};
  };

  type EmotionGetPayload<
    S extends boolean | null | undefined | EmotionDefaultArgs,
  > = $Result.GetResult<Prisma.$EmotionPayload, S>;

  type EmotionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EmotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmotionCountAggregateInputType | true;
  };

  export interface EmotionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Emotion'];
      meta: { name: 'Emotion' };
    };
    /**
     * Find zero or one Emotion that matches the filter.
     * @param {EmotionFindUniqueArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmotionFindUniqueArgs>(
      args: SelectSubset<T, EmotionFindUniqueArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Emotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmotionFindUniqueOrThrowArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmotionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EmotionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Emotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionFindFirstArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmotionFindFirstArgs>(
      args?: SelectSubset<T, EmotionFindFirstArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Emotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionFindFirstOrThrowArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmotionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmotionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Emotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emotions
     * const emotions = await prisma.emotion.findMany()
     *
     * // Get first 10 Emotions
     * const emotions = await prisma.emotion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const emotionWithIdOnly = await prisma.emotion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmotionFindManyArgs>(
      args?: SelectSubset<T, EmotionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Emotion.
     * @param {EmotionCreateArgs} args - Arguments to create a Emotion.
     * @example
     * // Create one Emotion
     * const Emotion = await prisma.emotion.create({
     *   data: {
     *     // ... data to create a Emotion
     *   }
     * })
     *
     */
    create<T extends EmotionCreateArgs>(
      args: SelectSubset<T, EmotionCreateArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Emotions.
     * @param {EmotionCreateManyArgs} args - Arguments to create many Emotions.
     * @example
     * // Create many Emotions
     * const emotion = await prisma.emotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmotionCreateManyArgs>(
      args?: SelectSubset<T, EmotionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Emotions and returns the data saved in the database.
     * @param {EmotionCreateManyAndReturnArgs} args - Arguments to create many Emotions.
     * @example
     * // Create many Emotions
     * const emotion = await prisma.emotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Emotions and only return the `id`
     * const emotionWithIdOnly = await prisma.emotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmotionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EmotionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Emotion.
     * @param {EmotionDeleteArgs} args - Arguments to delete one Emotion.
     * @example
     * // Delete one Emotion
     * const Emotion = await prisma.emotion.delete({
     *   where: {
     *     // ... filter to delete one Emotion
     *   }
     * })
     *
     */
    delete<T extends EmotionDeleteArgs>(
      args: SelectSubset<T, EmotionDeleteArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Emotion.
     * @param {EmotionUpdateArgs} args - Arguments to update one Emotion.
     * @example
     * // Update one Emotion
     * const emotion = await prisma.emotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmotionUpdateArgs>(
      args: SelectSubset<T, EmotionUpdateArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Emotions.
     * @param {EmotionDeleteManyArgs} args - Arguments to filter Emotions to delete.
     * @example
     * // Delete a few Emotions
     * const { count } = await prisma.emotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmotionDeleteManyArgs>(
      args?: SelectSubset<T, EmotionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Emotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emotions
     * const emotion = await prisma.emotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmotionUpdateManyArgs>(
      args: SelectSubset<T, EmotionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Emotions and returns the data updated in the database.
     * @param {EmotionUpdateManyAndReturnArgs} args - Arguments to update many Emotions.
     * @example
     * // Update many Emotions
     * const emotion = await prisma.emotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Emotions and only return the `id`
     * const emotionWithIdOnly = await prisma.emotion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EmotionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EmotionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Emotion.
     * @param {EmotionUpsertArgs} args - Arguments to update or create a Emotion.
     * @example
     * // Update or create a Emotion
     * const emotion = await prisma.emotion.upsert({
     *   create: {
     *     // ... data to create a Emotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emotion we want to update
     *   }
     * })
     */
    upsert<T extends EmotionUpsertArgs>(
      args: SelectSubset<T, EmotionUpsertArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      $Result.GetResult<
        Prisma.$EmotionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Emotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionCountArgs} args - Arguments to filter Emotions to count.
     * @example
     * // Count the number of Emotions
     * const count = await prisma.emotion.count({
     *   where: {
     *     // ... the filter for the Emotions we want to count
     *   }
     * })
     **/
    count<T extends EmotionCountArgs>(
      args?: Subset<T, EmotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmotionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Emotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EmotionAggregateArgs>(
      args: Subset<T, EmotionAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmotionAggregateType<T>>;

    /**
     * Group by Emotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EmotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmotionGroupByArgs['orderBy'] }
        : { orderBy?: EmotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EmotionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEmotionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Emotion model
     */
    readonly fields: EmotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmotionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    postEmotions<T extends Emotion$postEmotionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Emotion$postEmotionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostEmotionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Emotion model
   */
  interface EmotionFieldRefs {
    readonly id: FieldRef<'Emotion', 'String'>;
    readonly code: FieldRef<'Emotion', 'String'>;
    readonly label: FieldRef<'Emotion', 'String'>;
  }

  // Custom InputTypes
  /**
   * Emotion findUnique
   */
  export type EmotionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * Filter, which Emotion to fetch.
     */
    where: EmotionWhereUniqueInput;
  };

  /**
   * Emotion findUniqueOrThrow
   */
  export type EmotionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * Filter, which Emotion to fetch.
     */
    where: EmotionWhereUniqueInput;
  };

  /**
   * Emotion findFirst
   */
  export type EmotionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * Filter, which Emotion to fetch.
     */
    where?: EmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Emotions to fetch.
     */
    orderBy?:
      | EmotionOrderByWithRelationInput
      | EmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Emotions.
     */
    cursor?: EmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Emotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Emotions.
     */
    distinct?: EmotionScalarFieldEnum | EmotionScalarFieldEnum[];
  };

  /**
   * Emotion findFirstOrThrow
   */
  export type EmotionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * Filter, which Emotion to fetch.
     */
    where?: EmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Emotions to fetch.
     */
    orderBy?:
      | EmotionOrderByWithRelationInput
      | EmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Emotions.
     */
    cursor?: EmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Emotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Emotions.
     */
    distinct?: EmotionScalarFieldEnum | EmotionScalarFieldEnum[];
  };

  /**
   * Emotion findMany
   */
  export type EmotionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * Filter, which Emotions to fetch.
     */
    where?: EmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Emotions to fetch.
     */
    orderBy?:
      | EmotionOrderByWithRelationInput
      | EmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Emotions.
     */
    cursor?: EmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Emotions.
     */
    skip?: number;
    distinct?: EmotionScalarFieldEnum | EmotionScalarFieldEnum[];
  };

  /**
   * Emotion create
   */
  export type EmotionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Emotion.
     */
    data: XOR<EmotionCreateInput, EmotionUncheckedCreateInput>;
  };

  /**
   * Emotion createMany
   */
  export type EmotionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Emotions.
     */
    data: EmotionCreateManyInput | EmotionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Emotion createManyAndReturn
   */
  export type EmotionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * The data used to create many Emotions.
     */
    data: EmotionCreateManyInput | EmotionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Emotion update
   */
  export type EmotionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Emotion.
     */
    data: XOR<EmotionUpdateInput, EmotionUncheckedUpdateInput>;
    /**
     * Choose, which Emotion to update.
     */
    where: EmotionWhereUniqueInput;
  };

  /**
   * Emotion updateMany
   */
  export type EmotionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Emotions.
     */
    data: XOR<EmotionUpdateManyMutationInput, EmotionUncheckedUpdateManyInput>;
    /**
     * Filter which Emotions to update
     */
    where?: EmotionWhereInput;
    /**
     * Limit how many Emotions to update.
     */
    limit?: number;
  };

  /**
   * Emotion updateManyAndReturn
   */
  export type EmotionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * The data used to update Emotions.
     */
    data: XOR<EmotionUpdateManyMutationInput, EmotionUncheckedUpdateManyInput>;
    /**
     * Filter which Emotions to update
     */
    where?: EmotionWhereInput;
    /**
     * Limit how many Emotions to update.
     */
    limit?: number;
  };

  /**
   * Emotion upsert
   */
  export type EmotionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Emotion to update in case it exists.
     */
    where: EmotionWhereUniqueInput;
    /**
     * In case the Emotion found by the `where` argument doesn't exist, create a new Emotion with this data.
     */
    create: XOR<EmotionCreateInput, EmotionUncheckedCreateInput>;
    /**
     * In case the Emotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmotionUpdateInput, EmotionUncheckedUpdateInput>;
  };

  /**
   * Emotion delete
   */
  export type EmotionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
    /**
     * Filter which Emotion to delete.
     */
    where: EmotionWhereUniqueInput;
  };

  /**
   * Emotion deleteMany
   */
  export type EmotionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Emotions to delete
     */
    where?: EmotionWhereInput;
    /**
     * Limit how many Emotions to delete.
     */
    limit?: number;
  };

  /**
   * Emotion.postEmotions
   */
  export type Emotion$postEmotionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    where?: PostEmotionWhereInput;
    orderBy?:
      | PostEmotionOrderByWithRelationInput
      | PostEmotionOrderByWithRelationInput[];
    cursor?: PostEmotionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostEmotionScalarFieldEnum | PostEmotionScalarFieldEnum[];
  };

  /**
   * Emotion without action
   */
  export type EmotionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null;
  };

  /**
   * Model PostEmotion
   */

  export type AggregatePostEmotion = {
    _count: PostEmotionCountAggregateOutputType | null;
    _min: PostEmotionMinAggregateOutputType | null;
    _max: PostEmotionMaxAggregateOutputType | null;
  };

  export type PostEmotionMinAggregateOutputType = {
    postId: string | null;
    emotionId: string | null;
  };

  export type PostEmotionMaxAggregateOutputType = {
    postId: string | null;
    emotionId: string | null;
  };

  export type PostEmotionCountAggregateOutputType = {
    postId: number;
    emotionId: number;
    _all: number;
  };

  export type PostEmotionMinAggregateInputType = {
    postId?: true;
    emotionId?: true;
  };

  export type PostEmotionMaxAggregateInputType = {
    postId?: true;
    emotionId?: true;
  };

  export type PostEmotionCountAggregateInputType = {
    postId?: true;
    emotionId?: true;
    _all?: true;
  };

  export type PostEmotionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PostEmotion to aggregate.
     */
    where?: PostEmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostEmotions to fetch.
     */
    orderBy?:
      | PostEmotionOrderByWithRelationInput
      | PostEmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostEmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostEmotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostEmotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostEmotions
     **/
    _count?: true | PostEmotionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostEmotionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostEmotionMaxAggregateInputType;
  };

  export type GetPostEmotionAggregateType<T extends PostEmotionAggregateArgs> =
    {
      [P in keyof T & keyof AggregatePostEmotion]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregatePostEmotion[P]>
        : GetScalarType<T[P], AggregatePostEmotion[P]>;
    };

  export type PostEmotionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostEmotionWhereInput;
    orderBy?:
      | PostEmotionOrderByWithAggregationInput
      | PostEmotionOrderByWithAggregationInput[];
    by: PostEmotionScalarFieldEnum[] | PostEmotionScalarFieldEnum;
    having?: PostEmotionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostEmotionCountAggregateInputType | true;
    _min?: PostEmotionMinAggregateInputType;
    _max?: PostEmotionMaxAggregateInputType;
  };

  export type PostEmotionGroupByOutputType = {
    postId: string;
    emotionId: string;
    _count: PostEmotionCountAggregateOutputType | null;
    _min: PostEmotionMinAggregateOutputType | null;
    _max: PostEmotionMaxAggregateOutputType | null;
  };

  type GetPostEmotionGroupByPayload<T extends PostEmotionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PostEmotionGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof PostEmotionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostEmotionGroupByOutputType[P]>
            : GetScalarType<T[P], PostEmotionGroupByOutputType[P]>;
        }
      >
    >;

  export type PostEmotionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      postId?: boolean;
      emotionId?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      emotion?: boolean | EmotionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postEmotion']
  >;

  export type PostEmotionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      postId?: boolean;
      emotionId?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      emotion?: boolean | EmotionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postEmotion']
  >;

  export type PostEmotionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      postId?: boolean;
      emotionId?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      emotion?: boolean | EmotionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postEmotion']
  >;

  export type PostEmotionSelectScalar = {
    postId?: boolean;
    emotionId?: boolean;
  };

  export type PostEmotionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'postId' | 'emotionId',
    ExtArgs['result']['postEmotion']
  >;
  export type PostEmotionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    emotion?: boolean | EmotionDefaultArgs<ExtArgs>;
  };
  export type PostEmotionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    emotion?: boolean | EmotionDefaultArgs<ExtArgs>;
  };
  export type PostEmotionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    emotion?: boolean | EmotionDefaultArgs<ExtArgs>;
  };

  export type $PostEmotionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PostEmotion';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>;
      emotion: Prisma.$EmotionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        postId: string;
        emotionId: string;
      },
      ExtArgs['result']['postEmotion']
    >;
    composites: {};
  };

  type PostEmotionGetPayload<
    S extends boolean | null | undefined | PostEmotionDefaultArgs,
  > = $Result.GetResult<Prisma.$PostEmotionPayload, S>;

  type PostEmotionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PostEmotionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PostEmotionCountAggregateInputType | true;
  };

  export interface PostEmotionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PostEmotion'];
      meta: { name: 'PostEmotion' };
    };
    /**
     * Find zero or one PostEmotion that matches the filter.
     * @param {PostEmotionFindUniqueArgs} args - Arguments to find a PostEmotion
     * @example
     * // Get one PostEmotion
     * const postEmotion = await prisma.postEmotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostEmotionFindUniqueArgs>(
      args: SelectSubset<T, PostEmotionFindUniqueArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PostEmotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostEmotionFindUniqueOrThrowArgs} args - Arguments to find a PostEmotion
     * @example
     * // Get one PostEmotion
     * const postEmotion = await prisma.postEmotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostEmotionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostEmotionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PostEmotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionFindFirstArgs} args - Arguments to find a PostEmotion
     * @example
     * // Get one PostEmotion
     * const postEmotion = await prisma.postEmotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostEmotionFindFirstArgs>(
      args?: SelectSubset<T, PostEmotionFindFirstArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PostEmotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionFindFirstOrThrowArgs} args - Arguments to find a PostEmotion
     * @example
     * // Get one PostEmotion
     * const postEmotion = await prisma.postEmotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostEmotionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostEmotionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PostEmotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostEmotions
     * const postEmotions = await prisma.postEmotion.findMany()
     *
     * // Get first 10 PostEmotions
     * const postEmotions = await prisma.postEmotion.findMany({ take: 10 })
     *
     * // Only select the `postId`
     * const postEmotionWithPostIdOnly = await prisma.postEmotion.findMany({ select: { postId: true } })
     *
     */
    findMany<T extends PostEmotionFindManyArgs>(
      args?: SelectSubset<T, PostEmotionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PostEmotion.
     * @param {PostEmotionCreateArgs} args - Arguments to create a PostEmotion.
     * @example
     * // Create one PostEmotion
     * const PostEmotion = await prisma.postEmotion.create({
     *   data: {
     *     // ... data to create a PostEmotion
     *   }
     * })
     *
     */
    create<T extends PostEmotionCreateArgs>(
      args: SelectSubset<T, PostEmotionCreateArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PostEmotions.
     * @param {PostEmotionCreateManyArgs} args - Arguments to create many PostEmotions.
     * @example
     * // Create many PostEmotions
     * const postEmotion = await prisma.postEmotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostEmotionCreateManyArgs>(
      args?: SelectSubset<T, PostEmotionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PostEmotions and returns the data saved in the database.
     * @param {PostEmotionCreateManyAndReturnArgs} args - Arguments to create many PostEmotions.
     * @example
     * // Create many PostEmotions
     * const postEmotion = await prisma.postEmotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostEmotions and only return the `postId`
     * const postEmotionWithPostIdOnly = await prisma.postEmotion.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostEmotionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostEmotionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PostEmotion.
     * @param {PostEmotionDeleteArgs} args - Arguments to delete one PostEmotion.
     * @example
     * // Delete one PostEmotion
     * const PostEmotion = await prisma.postEmotion.delete({
     *   where: {
     *     // ... filter to delete one PostEmotion
     *   }
     * })
     *
     */
    delete<T extends PostEmotionDeleteArgs>(
      args: SelectSubset<T, PostEmotionDeleteArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PostEmotion.
     * @param {PostEmotionUpdateArgs} args - Arguments to update one PostEmotion.
     * @example
     * // Update one PostEmotion
     * const postEmotion = await prisma.postEmotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostEmotionUpdateArgs>(
      args: SelectSubset<T, PostEmotionUpdateArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PostEmotions.
     * @param {PostEmotionDeleteManyArgs} args - Arguments to filter PostEmotions to delete.
     * @example
     * // Delete a few PostEmotions
     * const { count } = await prisma.postEmotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostEmotionDeleteManyArgs>(
      args?: SelectSubset<T, PostEmotionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PostEmotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostEmotions
     * const postEmotion = await prisma.postEmotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostEmotionUpdateManyArgs>(
      args: SelectSubset<T, PostEmotionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PostEmotions and returns the data updated in the database.
     * @param {PostEmotionUpdateManyAndReturnArgs} args - Arguments to update many PostEmotions.
     * @example
     * // Update many PostEmotions
     * const postEmotion = await prisma.postEmotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostEmotions and only return the `postId`
     * const postEmotionWithPostIdOnly = await prisma.postEmotion.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostEmotionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostEmotionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PostEmotion.
     * @param {PostEmotionUpsertArgs} args - Arguments to update or create a PostEmotion.
     * @example
     * // Update or create a PostEmotion
     * const postEmotion = await prisma.postEmotion.upsert({
     *   create: {
     *     // ... data to create a PostEmotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostEmotion we want to update
     *   }
     * })
     */
    upsert<T extends PostEmotionUpsertArgs>(
      args: SelectSubset<T, PostEmotionUpsertArgs<ExtArgs>>,
    ): Prisma__PostEmotionClient<
      $Result.GetResult<
        Prisma.$PostEmotionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PostEmotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionCountArgs} args - Arguments to filter PostEmotions to count.
     * @example
     * // Count the number of PostEmotions
     * const count = await prisma.postEmotion.count({
     *   where: {
     *     // ... the filter for the PostEmotions we want to count
     *   }
     * })
     **/
    count<T extends PostEmotionCountArgs>(
      args?: Subset<T, PostEmotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostEmotionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PostEmotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PostEmotionAggregateArgs>(
      args: Subset<T, PostEmotionAggregateArgs>,
    ): Prisma.PrismaPromise<GetPostEmotionAggregateType<T>>;

    /**
     * Group by PostEmotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostEmotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PostEmotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostEmotionGroupByArgs['orderBy'] }
        : { orderBy?: PostEmotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PostEmotionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPostEmotionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PostEmotion model
     */
    readonly fields: PostEmotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostEmotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostEmotionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>,
    ): Prisma__PostClient<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    emotion<T extends EmotionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EmotionDefaultArgs<ExtArgs>>,
    ): Prisma__EmotionClient<
      | $Result.GetResult<
          Prisma.$EmotionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PostEmotion model
   */
  interface PostEmotionFieldRefs {
    readonly postId: FieldRef<'PostEmotion', 'String'>;
    readonly emotionId: FieldRef<'PostEmotion', 'String'>;
  }

  // Custom InputTypes
  /**
   * PostEmotion findUnique
   */
  export type PostEmotionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * Filter, which PostEmotion to fetch.
     */
    where: PostEmotionWhereUniqueInput;
  };

  /**
   * PostEmotion findUniqueOrThrow
   */
  export type PostEmotionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * Filter, which PostEmotion to fetch.
     */
    where: PostEmotionWhereUniqueInput;
  };

  /**
   * PostEmotion findFirst
   */
  export type PostEmotionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * Filter, which PostEmotion to fetch.
     */
    where?: PostEmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostEmotions to fetch.
     */
    orderBy?:
      | PostEmotionOrderByWithRelationInput
      | PostEmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostEmotions.
     */
    cursor?: PostEmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostEmotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostEmotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostEmotions.
     */
    distinct?: PostEmotionScalarFieldEnum | PostEmotionScalarFieldEnum[];
  };

  /**
   * PostEmotion findFirstOrThrow
   */
  export type PostEmotionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * Filter, which PostEmotion to fetch.
     */
    where?: PostEmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostEmotions to fetch.
     */
    orderBy?:
      | PostEmotionOrderByWithRelationInput
      | PostEmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostEmotions.
     */
    cursor?: PostEmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostEmotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostEmotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostEmotions.
     */
    distinct?: PostEmotionScalarFieldEnum | PostEmotionScalarFieldEnum[];
  };

  /**
   * PostEmotion findMany
   */
  export type PostEmotionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * Filter, which PostEmotions to fetch.
     */
    where?: PostEmotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostEmotions to fetch.
     */
    orderBy?:
      | PostEmotionOrderByWithRelationInput
      | PostEmotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostEmotions.
     */
    cursor?: PostEmotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostEmotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostEmotions.
     */
    skip?: number;
    distinct?: PostEmotionScalarFieldEnum | PostEmotionScalarFieldEnum[];
  };

  /**
   * PostEmotion create
   */
  export type PostEmotionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * The data needed to create a PostEmotion.
     */
    data: XOR<PostEmotionCreateInput, PostEmotionUncheckedCreateInput>;
  };

  /**
   * PostEmotion createMany
   */
  export type PostEmotionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PostEmotions.
     */
    data: PostEmotionCreateManyInput | PostEmotionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PostEmotion createManyAndReturn
   */
  export type PostEmotionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * The data used to create many PostEmotions.
     */
    data: PostEmotionCreateManyInput | PostEmotionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PostEmotion update
   */
  export type PostEmotionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * The data needed to update a PostEmotion.
     */
    data: XOR<PostEmotionUpdateInput, PostEmotionUncheckedUpdateInput>;
    /**
     * Choose, which PostEmotion to update.
     */
    where: PostEmotionWhereUniqueInput;
  };

  /**
   * PostEmotion updateMany
   */
  export type PostEmotionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PostEmotions.
     */
    data: XOR<
      PostEmotionUpdateManyMutationInput,
      PostEmotionUncheckedUpdateManyInput
    >;
    /**
     * Filter which PostEmotions to update
     */
    where?: PostEmotionWhereInput;
    /**
     * Limit how many PostEmotions to update.
     */
    limit?: number;
  };

  /**
   * PostEmotion updateManyAndReturn
   */
  export type PostEmotionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * The data used to update PostEmotions.
     */
    data: XOR<
      PostEmotionUpdateManyMutationInput,
      PostEmotionUncheckedUpdateManyInput
    >;
    /**
     * Filter which PostEmotions to update
     */
    where?: PostEmotionWhereInput;
    /**
     * Limit how many PostEmotions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PostEmotion upsert
   */
  export type PostEmotionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * The filter to search for the PostEmotion to update in case it exists.
     */
    where: PostEmotionWhereUniqueInput;
    /**
     * In case the PostEmotion found by the `where` argument doesn't exist, create a new PostEmotion with this data.
     */
    create: XOR<PostEmotionCreateInput, PostEmotionUncheckedCreateInput>;
    /**
     * In case the PostEmotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostEmotionUpdateInput, PostEmotionUncheckedUpdateInput>;
  };

  /**
   * PostEmotion delete
   */
  export type PostEmotionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
    /**
     * Filter which PostEmotion to delete.
     */
    where: PostEmotionWhereUniqueInput;
  };

  /**
   * PostEmotion deleteMany
   */
  export type PostEmotionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PostEmotions to delete
     */
    where?: PostEmotionWhereInput;
    /**
     * Limit how many PostEmotions to delete.
     */
    limit?: number;
  };

  /**
   * PostEmotion without action
   */
  export type PostEmotionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostEmotion
     */
    select?: PostEmotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostEmotion
     */
    omit?: PostEmotionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostEmotionInclude<ExtArgs> | null;
  };

  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null;
    _min: ReactionMinAggregateOutputType | null;
    _max: ReactionMaxAggregateOutputType | null;
  };

  export type ReactionMinAggregateOutputType = {
    id: string | null;
    postId: string | null;
    userId: string | null;
    type: string | null;
    createdAt: Date | null;
  };

  export type ReactionMaxAggregateOutputType = {
    id: string | null;
    postId: string | null;
    userId: string | null;
    type: string | null;
    createdAt: Date | null;
  };

  export type ReactionCountAggregateOutputType = {
    id: number;
    postId: number;
    userId: number;
    type: number;
    createdAt: number;
    _all: number;
  };

  export type ReactionMinAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    type?: true;
    createdAt?: true;
  };

  export type ReactionMaxAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    type?: true;
    createdAt?: true;
  };

  export type ReactionCountAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ReactionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reactions to fetch.
     */
    orderBy?:
      | ReactionOrderByWithRelationInput
      | ReactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reactions
     **/
    _count?: true | ReactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReactionMaxAggregateInputType;
  };

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
    [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>;
  };

  export type ReactionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReactionWhereInput;
    orderBy?:
      | ReactionOrderByWithAggregationInput
      | ReactionOrderByWithAggregationInput[];
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum;
    having?: ReactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReactionCountAggregateInputType | true;
    _min?: ReactionMinAggregateInputType;
    _max?: ReactionMaxAggregateInputType;
  };

  export type ReactionGroupByOutputType = {
    id: string;
    postId: string;
    userId: string;
    type: string;
    createdAt: Date;
    _count: ReactionCountAggregateOutputType | null;
    _min: ReactionMinAggregateOutputType | null;
    _max: ReactionMaxAggregateOutputType | null;
  };

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReactionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ReactionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>;
        }
      >
    >;

  export type ReactionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['reaction']
  >;

  export type ReactionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['reaction']
  >;

  export type ReactionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['reaction']
  >;

  export type ReactionSelectScalar = {
    id?: boolean;
    postId?: boolean;
    userId?: boolean;
    type?: boolean;
    createdAt?: boolean;
  };

  export type ReactionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'postId' | 'userId' | 'type' | 'createdAt',
    ExtArgs['result']['reaction']
  >;
  export type ReactionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ReactionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ReactionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ReactionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Reaction';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        postId: string;
        userId: string;
        type: string;
        createdAt: Date;
      },
      ExtArgs['result']['reaction']
    >;
    composites: {};
  };

  type ReactionGetPayload<
    S extends boolean | null | undefined | ReactionDefaultArgs,
  > = $Result.GetResult<Prisma.$ReactionPayload, S>;

  type ReactionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReactionCountAggregateInputType | true;
  };

  export interface ReactionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Reaction'];
      meta: { name: 'Reaction' };
    };
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(
      args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(
      args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     *
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReactionFindManyArgs>(
      args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     *
     */
    create<T extends ReactionCreateArgs>(
      args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReactionCreateManyArgs>(
      args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     *
     */
    delete<T extends ReactionDeleteArgs>(
      args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReactionUpdateArgs>(
      args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReactionDeleteManyArgs>(
      args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReactionUpdateManyArgs>(
      args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(
      args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>,
    ): Prisma__ReactionClient<
      $Result.GetResult<
        Prisma.$ReactionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
     **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReactionAggregateArgs>(
      args: Subset<T, ReactionAggregateArgs>,
    ): Prisma.PrismaPromise<GetReactionAggregateType<T>>;

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetReactionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Reaction model
     */
    readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>,
    ): Prisma__PostClient<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly id: FieldRef<'Reaction', 'String'>;
    readonly postId: FieldRef<'Reaction', 'String'>;
    readonly userId: FieldRef<'Reaction', 'String'>;
    readonly type: FieldRef<'Reaction', 'String'>;
    readonly createdAt: FieldRef<'Reaction', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput;
  };

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput;
  };

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reactions to fetch.
     */
    orderBy?:
      | ReactionOrderByWithRelationInput
      | ReactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[];
  };

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reactions to fetch.
     */
    orderBy?:
      | ReactionOrderByWithRelationInput
      | ReactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[];
  };

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reactions to fetch.
     */
    orderBy?:
      | ReactionOrderByWithRelationInput
      | ReactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reactions.
     */
    skip?: number;
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[];
  };

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>;
  };

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>;
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput;
  };

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<
      ReactionUpdateManyMutationInput,
      ReactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput;
    /**
     * Limit how many Reactions to update.
     */
    limit?: number;
  };

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * The data used to update Reactions.
     */
    data: XOR<
      ReactionUpdateManyMutationInput,
      ReactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput;
    /**
     * Limit how many Reactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput;
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>;
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>;
  };

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput;
  };

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput;
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number;
  };

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null;
  };

  /**
   * Model PrivateNote
   */

  export type AggregatePrivateNote = {
    _count: PrivateNoteCountAggregateOutputType | null;
    _min: PrivateNoteMinAggregateOutputType | null;
    _max: PrivateNoteMaxAggregateOutputType | null;
  };

  export type PrivateNoteMinAggregateOutputType = {
    id: string | null;
    postId: string | null;
    userId: string | null;
    body: string | null;
    createdAt: Date | null;
  };

  export type PrivateNoteMaxAggregateOutputType = {
    id: string | null;
    postId: string | null;
    userId: string | null;
    body: string | null;
    createdAt: Date | null;
  };

  export type PrivateNoteCountAggregateOutputType = {
    id: number;
    postId: number;
    userId: number;
    body: number;
    createdAt: number;
    _all: number;
  };

  export type PrivateNoteMinAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    body?: true;
    createdAt?: true;
  };

  export type PrivateNoteMaxAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    body?: true;
    createdAt?: true;
  };

  export type PrivateNoteCountAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    body?: true;
    createdAt?: true;
    _all?: true;
  };

  export type PrivateNoteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PrivateNote to aggregate.
     */
    where?: PrivateNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrivateNotes to fetch.
     */
    orderBy?:
      | PrivateNoteOrderByWithRelationInput
      | PrivateNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PrivateNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrivateNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrivateNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PrivateNotes
     **/
    _count?: true | PrivateNoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PrivateNoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PrivateNoteMaxAggregateInputType;
  };

  export type GetPrivateNoteAggregateType<T extends PrivateNoteAggregateArgs> =
    {
      [P in keyof T & keyof AggregatePrivateNote]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregatePrivateNote[P]>
        : GetScalarType<T[P], AggregatePrivateNote[P]>;
    };

  export type PrivateNoteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PrivateNoteWhereInput;
    orderBy?:
      | PrivateNoteOrderByWithAggregationInput
      | PrivateNoteOrderByWithAggregationInput[];
    by: PrivateNoteScalarFieldEnum[] | PrivateNoteScalarFieldEnum;
    having?: PrivateNoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrivateNoteCountAggregateInputType | true;
    _min?: PrivateNoteMinAggregateInputType;
    _max?: PrivateNoteMaxAggregateInputType;
  };

  export type PrivateNoteGroupByOutputType = {
    id: string;
    postId: string;
    userId: string;
    body: string;
    createdAt: Date;
    _count: PrivateNoteCountAggregateOutputType | null;
    _min: PrivateNoteMinAggregateOutputType | null;
    _max: PrivateNoteMaxAggregateOutputType | null;
  };

  type GetPrivateNoteGroupByPayload<T extends PrivateNoteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PrivateNoteGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof PrivateNoteGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateNoteGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateNoteGroupByOutputType[P]>;
        }
      >
    >;

  export type PrivateNoteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      body?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['privateNote']
  >;

  export type PrivateNoteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      body?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['privateNote']
  >;

  export type PrivateNoteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      body?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['privateNote']
  >;

  export type PrivateNoteSelectScalar = {
    id?: boolean;
    postId?: boolean;
    userId?: boolean;
    body?: boolean;
    createdAt?: boolean;
  };

  export type PrivateNoteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'postId' | 'userId' | 'body' | 'createdAt',
    ExtArgs['result']['privateNote']
  >;
  export type PrivateNoteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PrivateNoteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PrivateNoteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PrivateNotePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PrivateNote';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        postId: string;
        userId: string;
        body: string;
        createdAt: Date;
      },
      ExtArgs['result']['privateNote']
    >;
    composites: {};
  };

  type PrivateNoteGetPayload<
    S extends boolean | null | undefined | PrivateNoteDefaultArgs,
  > = $Result.GetResult<Prisma.$PrivateNotePayload, S>;

  type PrivateNoteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PrivateNoteFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PrivateNoteCountAggregateInputType | true;
  };

  export interface PrivateNoteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PrivateNote'];
      meta: { name: 'PrivateNote' };
    };
    /**
     * Find zero or one PrivateNote that matches the filter.
     * @param {PrivateNoteFindUniqueArgs} args - Arguments to find a PrivateNote
     * @example
     * // Get one PrivateNote
     * const privateNote = await prisma.privateNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateNoteFindUniqueArgs>(
      args: SelectSubset<T, PrivateNoteFindUniqueArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PrivateNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateNoteFindUniqueOrThrowArgs} args - Arguments to find a PrivateNote
     * @example
     * // Get one PrivateNote
     * const privateNote = await prisma.privateNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateNoteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PrivateNoteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PrivateNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteFindFirstArgs} args - Arguments to find a PrivateNote
     * @example
     * // Get one PrivateNote
     * const privateNote = await prisma.privateNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateNoteFindFirstArgs>(
      args?: SelectSubset<T, PrivateNoteFindFirstArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PrivateNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteFindFirstOrThrowArgs} args - Arguments to find a PrivateNote
     * @example
     * // Get one PrivateNote
     * const privateNote = await prisma.privateNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateNoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PrivateNoteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PrivateNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateNotes
     * const privateNotes = await prisma.privateNote.findMany()
     *
     * // Get first 10 PrivateNotes
     * const privateNotes = await prisma.privateNote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const privateNoteWithIdOnly = await prisma.privateNote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PrivateNoteFindManyArgs>(
      args?: SelectSubset<T, PrivateNoteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PrivateNote.
     * @param {PrivateNoteCreateArgs} args - Arguments to create a PrivateNote.
     * @example
     * // Create one PrivateNote
     * const PrivateNote = await prisma.privateNote.create({
     *   data: {
     *     // ... data to create a PrivateNote
     *   }
     * })
     *
     */
    create<T extends PrivateNoteCreateArgs>(
      args: SelectSubset<T, PrivateNoteCreateArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PrivateNotes.
     * @param {PrivateNoteCreateManyArgs} args - Arguments to create many PrivateNotes.
     * @example
     * // Create many PrivateNotes
     * const privateNote = await prisma.privateNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PrivateNoteCreateManyArgs>(
      args?: SelectSubset<T, PrivateNoteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PrivateNotes and returns the data saved in the database.
     * @param {PrivateNoteCreateManyAndReturnArgs} args - Arguments to create many PrivateNotes.
     * @example
     * // Create many PrivateNotes
     * const privateNote = await prisma.privateNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PrivateNotes and only return the `id`
     * const privateNoteWithIdOnly = await prisma.privateNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PrivateNoteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PrivateNoteCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PrivateNote.
     * @param {PrivateNoteDeleteArgs} args - Arguments to delete one PrivateNote.
     * @example
     * // Delete one PrivateNote
     * const PrivateNote = await prisma.privateNote.delete({
     *   where: {
     *     // ... filter to delete one PrivateNote
     *   }
     * })
     *
     */
    delete<T extends PrivateNoteDeleteArgs>(
      args: SelectSubset<T, PrivateNoteDeleteArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PrivateNote.
     * @param {PrivateNoteUpdateArgs} args - Arguments to update one PrivateNote.
     * @example
     * // Update one PrivateNote
     * const privateNote = await prisma.privateNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PrivateNoteUpdateArgs>(
      args: SelectSubset<T, PrivateNoteUpdateArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PrivateNotes.
     * @param {PrivateNoteDeleteManyArgs} args - Arguments to filter PrivateNotes to delete.
     * @example
     * // Delete a few PrivateNotes
     * const { count } = await prisma.privateNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PrivateNoteDeleteManyArgs>(
      args?: SelectSubset<T, PrivateNoteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PrivateNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateNotes
     * const privateNote = await prisma.privateNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PrivateNoteUpdateManyArgs>(
      args: SelectSubset<T, PrivateNoteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PrivateNotes and returns the data updated in the database.
     * @param {PrivateNoteUpdateManyAndReturnArgs} args - Arguments to update many PrivateNotes.
     * @example
     * // Update many PrivateNotes
     * const privateNote = await prisma.privateNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PrivateNotes and only return the `id`
     * const privateNoteWithIdOnly = await prisma.privateNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PrivateNoteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PrivateNoteUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PrivateNote.
     * @param {PrivateNoteUpsertArgs} args - Arguments to update or create a PrivateNote.
     * @example
     * // Update or create a PrivateNote
     * const privateNote = await prisma.privateNote.upsert({
     *   create: {
     *     // ... data to create a PrivateNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateNote we want to update
     *   }
     * })
     */
    upsert<T extends PrivateNoteUpsertArgs>(
      args: SelectSubset<T, PrivateNoteUpsertArgs<ExtArgs>>,
    ): Prisma__PrivateNoteClient<
      $Result.GetResult<
        Prisma.$PrivateNotePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PrivateNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteCountArgs} args - Arguments to filter PrivateNotes to count.
     * @example
     * // Count the number of PrivateNotes
     * const count = await prisma.privateNote.count({
     *   where: {
     *     // ... the filter for the PrivateNotes we want to count
     *   }
     * })
     **/
    count<T extends PrivateNoteCountArgs>(
      args?: Subset<T, PrivateNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateNoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PrivateNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PrivateNoteAggregateArgs>(
      args: Subset<T, PrivateNoteAggregateArgs>,
    ): Prisma.PrismaPromise<GetPrivateNoteAggregateType<T>>;

    /**
     * Group by PrivateNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PrivateNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateNoteGroupByArgs['orderBy'] }
        : { orderBy?: PrivateNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PrivateNoteGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPrivateNoteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PrivateNote model
     */
    readonly fields: PrivateNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateNoteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>,
    ): Prisma__PostClient<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PrivateNote model
   */
  interface PrivateNoteFieldRefs {
    readonly id: FieldRef<'PrivateNote', 'String'>;
    readonly postId: FieldRef<'PrivateNote', 'String'>;
    readonly userId: FieldRef<'PrivateNote', 'String'>;
    readonly body: FieldRef<'PrivateNote', 'String'>;
    readonly createdAt: FieldRef<'PrivateNote', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PrivateNote findUnique
   */
  export type PrivateNoteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * Filter, which PrivateNote to fetch.
     */
    where: PrivateNoteWhereUniqueInput;
  };

  /**
   * PrivateNote findUniqueOrThrow
   */
  export type PrivateNoteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * Filter, which PrivateNote to fetch.
     */
    where: PrivateNoteWhereUniqueInput;
  };

  /**
   * PrivateNote findFirst
   */
  export type PrivateNoteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * Filter, which PrivateNote to fetch.
     */
    where?: PrivateNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrivateNotes to fetch.
     */
    orderBy?:
      | PrivateNoteOrderByWithRelationInput
      | PrivateNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrivateNotes.
     */
    cursor?: PrivateNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrivateNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrivateNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrivateNotes.
     */
    distinct?: PrivateNoteScalarFieldEnum | PrivateNoteScalarFieldEnum[];
  };

  /**
   * PrivateNote findFirstOrThrow
   */
  export type PrivateNoteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * Filter, which PrivateNote to fetch.
     */
    where?: PrivateNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrivateNotes to fetch.
     */
    orderBy?:
      | PrivateNoteOrderByWithRelationInput
      | PrivateNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrivateNotes.
     */
    cursor?: PrivateNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrivateNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrivateNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrivateNotes.
     */
    distinct?: PrivateNoteScalarFieldEnum | PrivateNoteScalarFieldEnum[];
  };

  /**
   * PrivateNote findMany
   */
  export type PrivateNoteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * Filter, which PrivateNotes to fetch.
     */
    where?: PrivateNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrivateNotes to fetch.
     */
    orderBy?:
      | PrivateNoteOrderByWithRelationInput
      | PrivateNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PrivateNotes.
     */
    cursor?: PrivateNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrivateNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrivateNotes.
     */
    skip?: number;
    distinct?: PrivateNoteScalarFieldEnum | PrivateNoteScalarFieldEnum[];
  };

  /**
   * PrivateNote create
   */
  export type PrivateNoteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a PrivateNote.
     */
    data: XOR<PrivateNoteCreateInput, PrivateNoteUncheckedCreateInput>;
  };

  /**
   * PrivateNote createMany
   */
  export type PrivateNoteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PrivateNotes.
     */
    data: PrivateNoteCreateManyInput | PrivateNoteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PrivateNote createManyAndReturn
   */
  export type PrivateNoteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * The data used to create many PrivateNotes.
     */
    data: PrivateNoteCreateManyInput | PrivateNoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PrivateNote update
   */
  export type PrivateNoteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a PrivateNote.
     */
    data: XOR<PrivateNoteUpdateInput, PrivateNoteUncheckedUpdateInput>;
    /**
     * Choose, which PrivateNote to update.
     */
    where: PrivateNoteWhereUniqueInput;
  };

  /**
   * PrivateNote updateMany
   */
  export type PrivateNoteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PrivateNotes.
     */
    data: XOR<
      PrivateNoteUpdateManyMutationInput,
      PrivateNoteUncheckedUpdateManyInput
    >;
    /**
     * Filter which PrivateNotes to update
     */
    where?: PrivateNoteWhereInput;
    /**
     * Limit how many PrivateNotes to update.
     */
    limit?: number;
  };

  /**
   * PrivateNote updateManyAndReturn
   */
  export type PrivateNoteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * The data used to update PrivateNotes.
     */
    data: XOR<
      PrivateNoteUpdateManyMutationInput,
      PrivateNoteUncheckedUpdateManyInput
    >;
    /**
     * Filter which PrivateNotes to update
     */
    where?: PrivateNoteWhereInput;
    /**
     * Limit how many PrivateNotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PrivateNote upsert
   */
  export type PrivateNoteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the PrivateNote to update in case it exists.
     */
    where: PrivateNoteWhereUniqueInput;
    /**
     * In case the PrivateNote found by the `where` argument doesn't exist, create a new PrivateNote with this data.
     */
    create: XOR<PrivateNoteCreateInput, PrivateNoteUncheckedCreateInput>;
    /**
     * In case the PrivateNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateNoteUpdateInput, PrivateNoteUncheckedUpdateInput>;
  };

  /**
   * PrivateNote delete
   */
  export type PrivateNoteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
    /**
     * Filter which PrivateNote to delete.
     */
    where: PrivateNoteWhereUniqueInput;
  };

  /**
   * PrivateNote deleteMany
   */
  export type PrivateNoteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PrivateNotes to delete
     */
    where?: PrivateNoteWhereInput;
    /**
     * Limit how many PrivateNotes to delete.
     */
    limit?: number;
  };

  /**
   * PrivateNote without action
   */
  export type PrivateNoteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PrivateNote
     */
    select?: PrivateNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrivateNote
     */
    omit?: PrivateNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateNoteInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    firebaseUid: 'firebaseUid';
    ordinal: 'ordinal';
    nickname: 'nickname';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: 'id';
    authorId: 'authorId';
    whatPerson: 'whatPerson';
    thoughts: 'thoughts';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PostScalarFieldEnum =
    (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const EmotionScalarFieldEnum: {
    id: 'id';
    code: 'code';
    label: 'label';
  };

  export type EmotionScalarFieldEnum =
    (typeof EmotionScalarFieldEnum)[keyof typeof EmotionScalarFieldEnum];

  export const PostEmotionScalarFieldEnum: {
    postId: 'postId';
    emotionId: 'emotionId';
  };

  export type PostEmotionScalarFieldEnum =
    (typeof PostEmotionScalarFieldEnum)[keyof typeof PostEmotionScalarFieldEnum];

  export const ReactionScalarFieldEnum: {
    id: 'id';
    postId: 'postId';
    userId: 'userId';
    type: 'type';
    createdAt: 'createdAt';
  };

  export type ReactionScalarFieldEnum =
    (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum];

  export const PrivateNoteScalarFieldEnum: {
    id: 'id';
    postId: 'postId';
    userId: 'userId';
    body: 'body';
    createdAt: 'createdAt';
  };

  export type PrivateNoteScalarFieldEnum =
    (typeof PrivateNoteScalarFieldEnum)[keyof typeof PrivateNoteScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    firebaseUid?: StringFilter<'User'> | string;
    ordinal?: IntFilter<'User'> | number;
    nickname?: StringNullableFilter<'User'> | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    posts?: PostListRelationFilter;
    reactions?: ReactionListRelationFilter;
    privateNotes?: PrivateNoteListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    firebaseUid?: SortOrder;
    ordinal?: SortOrder;
    nickname?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    reactions?: ReactionOrderByRelationAggregateInput;
    privateNotes?: PrivateNoteOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      firebaseUid?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      ordinal?: IntFilter<'User'> | number;
      nickname?: StringNullableFilter<'User'> | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      posts?: PostListRelationFilter;
      reactions?: ReactionListRelationFilter;
      privateNotes?: PrivateNoteListRelationFilter;
    },
    'id' | 'firebaseUid'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    firebaseUid?: SortOrder;
    ordinal?: SortOrder;
    nickname?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    firebaseUid?: StringWithAggregatesFilter<'User'> | string;
    ordinal?: IntWithAggregatesFilter<'User'> | number;
    nickname?: StringNullableWithAggregatesFilter<'User'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: StringFilter<'Post'> | string;
    authorId?: StringFilter<'Post'> | string;
    whatPerson?: StringFilter<'Post'> | string;
    thoughts?: StringNullableFilter<'Post'> | string | null;
    createdAt?: DateTimeFilter<'Post'> | Date | string;
    updatedAt?: DateTimeFilter<'Post'> | Date | string;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    postEmotions?: PostEmotionListRelationFilter;
    reactions?: ReactionListRelationFilter;
    privateNotes?: PrivateNoteListRelationFilter;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    whatPerson?: SortOrder;
    thoughts?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    author?: UserOrderByWithRelationInput;
    postEmotions?: PostEmotionOrderByRelationAggregateInput;
    reactions?: ReactionOrderByRelationAggregateInput;
    privateNotes?: PrivateNoteOrderByRelationAggregateInput;
  };

  export type PostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PostWhereInput | PostWhereInput[];
      OR?: PostWhereInput[];
      NOT?: PostWhereInput | PostWhereInput[];
      authorId?: StringFilter<'Post'> | string;
      whatPerson?: StringFilter<'Post'> | string;
      thoughts?: StringNullableFilter<'Post'> | string | null;
      createdAt?: DateTimeFilter<'Post'> | Date | string;
      updatedAt?: DateTimeFilter<'Post'> | Date | string;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      postEmotions?: PostEmotionListRelationFilter;
      reactions?: ReactionListRelationFilter;
      privateNotes?: PrivateNoteListRelationFilter;
    },
    'id'
  >;

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    whatPerson?: SortOrder;
    thoughts?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Post'> | string;
    authorId?: StringWithAggregatesFilter<'Post'> | string;
    whatPerson?: StringWithAggregatesFilter<'Post'> | string;
    thoughts?: StringNullableWithAggregatesFilter<'Post'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
  };

  export type EmotionWhereInput = {
    AND?: EmotionWhereInput | EmotionWhereInput[];
    OR?: EmotionWhereInput[];
    NOT?: EmotionWhereInput | EmotionWhereInput[];
    id?: StringFilter<'Emotion'> | string;
    code?: StringFilter<'Emotion'> | string;
    label?: StringFilter<'Emotion'> | string;
    postEmotions?: PostEmotionListRelationFilter;
  };

  export type EmotionOrderByWithRelationInput = {
    id?: SortOrder;
    code?: SortOrder;
    label?: SortOrder;
    postEmotions?: PostEmotionOrderByRelationAggregateInput;
  };

  export type EmotionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      code?: string;
      AND?: EmotionWhereInput | EmotionWhereInput[];
      OR?: EmotionWhereInput[];
      NOT?: EmotionWhereInput | EmotionWhereInput[];
      label?: StringFilter<'Emotion'> | string;
      postEmotions?: PostEmotionListRelationFilter;
    },
    'id' | 'code'
  >;

  export type EmotionOrderByWithAggregationInput = {
    id?: SortOrder;
    code?: SortOrder;
    label?: SortOrder;
    _count?: EmotionCountOrderByAggregateInput;
    _max?: EmotionMaxOrderByAggregateInput;
    _min?: EmotionMinOrderByAggregateInput;
  };

  export type EmotionScalarWhereWithAggregatesInput = {
    AND?:
      | EmotionScalarWhereWithAggregatesInput
      | EmotionScalarWhereWithAggregatesInput[];
    OR?: EmotionScalarWhereWithAggregatesInput[];
    NOT?:
      | EmotionScalarWhereWithAggregatesInput
      | EmotionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Emotion'> | string;
    code?: StringWithAggregatesFilter<'Emotion'> | string;
    label?: StringWithAggregatesFilter<'Emotion'> | string;
  };

  export type PostEmotionWhereInput = {
    AND?: PostEmotionWhereInput | PostEmotionWhereInput[];
    OR?: PostEmotionWhereInput[];
    NOT?: PostEmotionWhereInput | PostEmotionWhereInput[];
    postId?: StringFilter<'PostEmotion'> | string;
    emotionId?: StringFilter<'PostEmotion'> | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    emotion?: XOR<EmotionScalarRelationFilter, EmotionWhereInput>;
  };

  export type PostEmotionOrderByWithRelationInput = {
    postId?: SortOrder;
    emotionId?: SortOrder;
    post?: PostOrderByWithRelationInput;
    emotion?: EmotionOrderByWithRelationInput;
  };

  export type PostEmotionWhereUniqueInput = Prisma.AtLeast<
    {
      postId_emotionId?: PostEmotionPostIdEmotionIdCompoundUniqueInput;
      AND?: PostEmotionWhereInput | PostEmotionWhereInput[];
      OR?: PostEmotionWhereInput[];
      NOT?: PostEmotionWhereInput | PostEmotionWhereInput[];
      postId?: StringFilter<'PostEmotion'> | string;
      emotionId?: StringFilter<'PostEmotion'> | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      emotion?: XOR<EmotionScalarRelationFilter, EmotionWhereInput>;
    },
    'postId_emotionId'
  >;

  export type PostEmotionOrderByWithAggregationInput = {
    postId?: SortOrder;
    emotionId?: SortOrder;
    _count?: PostEmotionCountOrderByAggregateInput;
    _max?: PostEmotionMaxOrderByAggregateInput;
    _min?: PostEmotionMinOrderByAggregateInput;
  };

  export type PostEmotionScalarWhereWithAggregatesInput = {
    AND?:
      | PostEmotionScalarWhereWithAggregatesInput
      | PostEmotionScalarWhereWithAggregatesInput[];
    OR?: PostEmotionScalarWhereWithAggregatesInput[];
    NOT?:
      | PostEmotionScalarWhereWithAggregatesInput
      | PostEmotionScalarWhereWithAggregatesInput[];
    postId?: StringWithAggregatesFilter<'PostEmotion'> | string;
    emotionId?: StringWithAggregatesFilter<'PostEmotion'> | string;
  };

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[];
    OR?: ReactionWhereInput[];
    NOT?: ReactionWhereInput | ReactionWhereInput[];
    id?: StringFilter<'Reaction'> | string;
    postId?: StringFilter<'Reaction'> | string;
    userId?: StringFilter<'Reaction'> | string;
    type?: StringFilter<'Reaction'> | string;
    createdAt?: DateTimeFilter<'Reaction'> | Date | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    post?: PostOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type ReactionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      postId_userId_type?: ReactionPostIdUserIdTypeCompoundUniqueInput;
      AND?: ReactionWhereInput | ReactionWhereInput[];
      OR?: ReactionWhereInput[];
      NOT?: ReactionWhereInput | ReactionWhereInput[];
      postId?: StringFilter<'Reaction'> | string;
      userId?: StringFilter<'Reaction'> | string;
      type?: StringFilter<'Reaction'> | string;
      createdAt?: DateTimeFilter<'Reaction'> | Date | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'postId_userId_type'
  >;

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    _count?: ReactionCountOrderByAggregateInput;
    _max?: ReactionMaxOrderByAggregateInput;
    _min?: ReactionMinOrderByAggregateInput;
  };

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?:
      | ReactionScalarWhereWithAggregatesInput
      | ReactionScalarWhereWithAggregatesInput[];
    OR?: ReactionScalarWhereWithAggregatesInput[];
    NOT?:
      | ReactionScalarWhereWithAggregatesInput
      | ReactionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Reaction'> | string;
    postId?: StringWithAggregatesFilter<'Reaction'> | string;
    userId?: StringWithAggregatesFilter<'Reaction'> | string;
    type?: StringWithAggregatesFilter<'Reaction'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Reaction'> | Date | string;
  };

  export type PrivateNoteWhereInput = {
    AND?: PrivateNoteWhereInput | PrivateNoteWhereInput[];
    OR?: PrivateNoteWhereInput[];
    NOT?: PrivateNoteWhereInput | PrivateNoteWhereInput[];
    id?: StringFilter<'PrivateNote'> | string;
    postId?: StringFilter<'PrivateNote'> | string;
    userId?: StringFilter<'PrivateNote'> | string;
    body?: StringFilter<'PrivateNote'> | string;
    createdAt?: DateTimeFilter<'PrivateNote'> | Date | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PrivateNoteOrderByWithRelationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    body?: SortOrder;
    createdAt?: SortOrder;
    post?: PostOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type PrivateNoteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PrivateNoteWhereInput | PrivateNoteWhereInput[];
      OR?: PrivateNoteWhereInput[];
      NOT?: PrivateNoteWhereInput | PrivateNoteWhereInput[];
      postId?: StringFilter<'PrivateNote'> | string;
      userId?: StringFilter<'PrivateNote'> | string;
      body?: StringFilter<'PrivateNote'> | string;
      createdAt?: DateTimeFilter<'PrivateNote'> | Date | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type PrivateNoteOrderByWithAggregationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    body?: SortOrder;
    createdAt?: SortOrder;
    _count?: PrivateNoteCountOrderByAggregateInput;
    _max?: PrivateNoteMaxOrderByAggregateInput;
    _min?: PrivateNoteMinOrderByAggregateInput;
  };

  export type PrivateNoteScalarWhereWithAggregatesInput = {
    AND?:
      | PrivateNoteScalarWhereWithAggregatesInput
      | PrivateNoteScalarWhereWithAggregatesInput[];
    OR?: PrivateNoteScalarWhereWithAggregatesInput[];
    NOT?:
      | PrivateNoteScalarWhereWithAggregatesInput
      | PrivateNoteScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'PrivateNote'> | string;
    postId?: StringWithAggregatesFilter<'PrivateNote'> | string;
    userId?: StringWithAggregatesFilter<'PrivateNote'> | string;
    body?: StringWithAggregatesFilter<'PrivateNote'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'PrivateNote'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    reactions?: ReactionCreateNestedManyWithoutUserInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    reactions?: ReactionUpdateManyWithoutUserNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    postEmotions?: PostEmotionCreateNestedManyWithoutPostInput;
    reactions?: ReactionCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateInput = {
    id?: string;
    authorId: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postEmotions?: PostEmotionUncheckedCreateNestedManyWithoutPostInput;
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    postEmotions?: PostEmotionUpdateManyWithoutPostNestedInput;
    reactions?: ReactionUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postEmotions?: PostEmotionUncheckedUpdateManyWithoutPostNestedInput;
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostCreateManyInput = {
    id?: string;
    authorId: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EmotionCreateInput = {
    id?: string;
    code: string;
    label: string;
    postEmotions?: PostEmotionCreateNestedManyWithoutEmotionInput;
  };

  export type EmotionUncheckedCreateInput = {
    id?: string;
    code: string;
    label: string;
    postEmotions?: PostEmotionUncheckedCreateNestedManyWithoutEmotionInput;
  };

  export type EmotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    postEmotions?: PostEmotionUpdateManyWithoutEmotionNestedInput;
  };

  export type EmotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    postEmotions?: PostEmotionUncheckedUpdateManyWithoutEmotionNestedInput;
  };

  export type EmotionCreateManyInput = {
    id?: string;
    code: string;
    label: string;
  };

  export type EmotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
  };

  export type EmotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
  };

  export type PostEmotionCreateInput = {
    post: PostCreateNestedOneWithoutPostEmotionsInput;
    emotion: EmotionCreateNestedOneWithoutPostEmotionsInput;
  };

  export type PostEmotionUncheckedCreateInput = {
    postId: string;
    emotionId: string;
  };

  export type PostEmotionUpdateInput = {
    post?: PostUpdateOneRequiredWithoutPostEmotionsNestedInput;
    emotion?: EmotionUpdateOneRequiredWithoutPostEmotionsNestedInput;
  };

  export type PostEmotionUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string;
    emotionId?: StringFieldUpdateOperationsInput | string;
  };

  export type PostEmotionCreateManyInput = {
    postId: string;
    emotionId: string;
  };

  export type PostEmotionUpdateManyMutationInput = {};

  export type PostEmotionUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string;
    emotionId?: StringFieldUpdateOperationsInput | string;
  };

  export type ReactionCreateInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutReactionsInput;
    user: UserCreateNestedOneWithoutReactionsInput;
  };

  export type ReactionUncheckedCreateInput = {
    id?: string;
    postId: string;
    userId: string;
    type: string;
    createdAt?: Date | string;
  };

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutReactionsNestedInput;
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput;
  };

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReactionCreateManyInput = {
    id?: string;
    postId: string;
    userId: string;
    type: string;
    createdAt?: Date | string;
  };

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteCreateInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutPrivateNotesInput;
    user: UserCreateNestedOneWithoutPrivateNotesInput;
  };

  export type PrivateNoteUncheckedCreateInput = {
    id?: string;
    postId: string;
    userId: string;
    body: string;
    createdAt?: Date | string;
  };

  export type PrivateNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutPrivateNotesNestedInput;
    user?: UserUpdateOneRequiredWithoutPrivateNotesNestedInput;
  };

  export type PrivateNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteCreateManyInput = {
    id?: string;
    postId: string;
    userId: string;
    body: string;
    createdAt?: Date | string;
  };

  export type PrivateNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput;
    some?: ReactionWhereInput;
    none?: ReactionWhereInput;
  };

  export type PrivateNoteListRelationFilter = {
    every?: PrivateNoteWhereInput;
    some?: PrivateNoteWhereInput;
    none?: PrivateNoteWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PrivateNoteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    firebaseUid?: SortOrder;
    ordinal?: SortOrder;
    nickname?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    ordinal?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    firebaseUid?: SortOrder;
    ordinal?: SortOrder;
    nickname?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    firebaseUid?: SortOrder;
    ordinal?: SortOrder;
    nickname?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    ordinal?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PostEmotionListRelationFilter = {
    every?: PostEmotionWhereInput;
    some?: PostEmotionWhereInput;
    none?: PostEmotionWhereInput;
  };

  export type PostEmotionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    whatPerson?: SortOrder;
    thoughts?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    whatPerson?: SortOrder;
    thoughts?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    whatPerson?: SortOrder;
    thoughts?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EmotionCountOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    label?: SortOrder;
  };

  export type EmotionMaxOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    label?: SortOrder;
  };

  export type EmotionMinOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    label?: SortOrder;
  };

  export type PostScalarRelationFilter = {
    is?: PostWhereInput;
    isNot?: PostWhereInput;
  };

  export type EmotionScalarRelationFilter = {
    is?: EmotionWhereInput;
    isNot?: EmotionWhereInput;
  };

  export type PostEmotionPostIdEmotionIdCompoundUniqueInput = {
    postId: string;
    emotionId: string;
  };

  export type PostEmotionCountOrderByAggregateInput = {
    postId?: SortOrder;
    emotionId?: SortOrder;
  };

  export type PostEmotionMaxOrderByAggregateInput = {
    postId?: SortOrder;
    emotionId?: SortOrder;
  };

  export type PostEmotionMinOrderByAggregateInput = {
    postId?: SortOrder;
    emotionId?: SortOrder;
  };

  export type ReactionPostIdUserIdTypeCompoundUniqueInput = {
    postId: string;
    userId: string;
    type: string;
  };

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PrivateNoteCountOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    body?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PrivateNoteMaxOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    body?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PrivateNoteMinOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    body?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReactionCreateWithoutUserInput,
          ReactionUncheckedCreateWithoutUserInput
        >
      | ReactionCreateWithoutUserInput[]
      | ReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutUserInput
      | ReactionCreateOrConnectWithoutUserInput[];
    createMany?: ReactionCreateManyUserInputEnvelope;
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
  };

  export type PrivateNoteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutUserInput,
          PrivateNoteUncheckedCreateWithoutUserInput
        >
      | PrivateNoteCreateWithoutUserInput[]
      | PrivateNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutUserInput
      | PrivateNoteCreateOrConnectWithoutUserInput[];
    createMany?: PrivateNoteCreateManyUserInputEnvelope;
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReactionCreateWithoutUserInput,
          ReactionUncheckedCreateWithoutUserInput
        >
      | ReactionCreateWithoutUserInput[]
      | ReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutUserInput
      | ReactionCreateOrConnectWithoutUserInput[];
    createMany?: ReactionCreateManyUserInputEnvelope;
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
  };

  export type PrivateNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutUserInput,
          PrivateNoteUncheckedCreateWithoutUserInput
        >
      | PrivateNoteCreateWithoutUserInput[]
      | PrivateNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutUserInput
      | PrivateNoteCreateOrConnectWithoutUserInput[];
    createMany?: PrivateNoteCreateManyUserInputEnvelope;
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReactionCreateWithoutUserInput,
          ReactionUncheckedCreateWithoutUserInput
        >
      | ReactionCreateWithoutUserInput[]
      | ReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutUserInput
      | ReactionCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReactionUpsertWithWhereUniqueWithoutUserInput
      | ReactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReactionCreateManyUserInputEnvelope;
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    update?:
      | ReactionUpdateWithWhereUniqueWithoutUserInput
      | ReactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReactionUpdateManyWithWhereWithoutUserInput
      | ReactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[];
  };

  export type PrivateNoteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutUserInput,
          PrivateNoteUncheckedCreateWithoutUserInput
        >
      | PrivateNoteCreateWithoutUserInput[]
      | PrivateNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutUserInput
      | PrivateNoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | PrivateNoteUpsertWithWhereUniqueWithoutUserInput
      | PrivateNoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PrivateNoteCreateManyUserInputEnvelope;
    set?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    disconnect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    delete?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    update?:
      | PrivateNoteUpdateWithWhereUniqueWithoutUserInput
      | PrivateNoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PrivateNoteUpdateManyWithWhereWithoutUserInput
      | PrivateNoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PrivateNoteScalarWhereInput | PrivateNoteScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReactionCreateWithoutUserInput,
          ReactionUncheckedCreateWithoutUserInput
        >
      | ReactionCreateWithoutUserInput[]
      | ReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutUserInput
      | ReactionCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReactionUpsertWithWhereUniqueWithoutUserInput
      | ReactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReactionCreateManyUserInputEnvelope;
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    update?:
      | ReactionUpdateWithWhereUniqueWithoutUserInput
      | ReactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReactionUpdateManyWithWhereWithoutUserInput
      | ReactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[];
  };

  export type PrivateNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutUserInput,
          PrivateNoteUncheckedCreateWithoutUserInput
        >
      | PrivateNoteCreateWithoutUserInput[]
      | PrivateNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutUserInput
      | PrivateNoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | PrivateNoteUpsertWithWhereUniqueWithoutUserInput
      | PrivateNoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PrivateNoteCreateManyUserInputEnvelope;
    set?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    disconnect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    delete?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    update?:
      | PrivateNoteUpdateWithWhereUniqueWithoutUserInput
      | PrivateNoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PrivateNoteUpdateManyWithWhereWithoutUserInput
      | PrivateNoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PrivateNoteScalarWhereInput | PrivateNoteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostEmotionCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutPostInput,
          PostEmotionUncheckedCreateWithoutPostInput
        >
      | PostEmotionCreateWithoutPostInput[]
      | PostEmotionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutPostInput
      | PostEmotionCreateOrConnectWithoutPostInput[];
    createMany?: PostEmotionCreateManyPostInputEnvelope;
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
  };

  export type ReactionCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          ReactionCreateWithoutPostInput,
          ReactionUncheckedCreateWithoutPostInput
        >
      | ReactionCreateWithoutPostInput[]
      | ReactionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutPostInput
      | ReactionCreateOrConnectWithoutPostInput[];
    createMany?: ReactionCreateManyPostInputEnvelope;
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
  };

  export type PrivateNoteCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutPostInput,
          PrivateNoteUncheckedCreateWithoutPostInput
        >
      | PrivateNoteCreateWithoutPostInput[]
      | PrivateNoteUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutPostInput
      | PrivateNoteCreateOrConnectWithoutPostInput[];
    createMany?: PrivateNoteCreateManyPostInputEnvelope;
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
  };

  export type PostEmotionUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutPostInput,
          PostEmotionUncheckedCreateWithoutPostInput
        >
      | PostEmotionCreateWithoutPostInput[]
      | PostEmotionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutPostInput
      | PostEmotionCreateOrConnectWithoutPostInput[];
    createMany?: PostEmotionCreateManyPostInputEnvelope;
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
  };

  export type ReactionUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          ReactionCreateWithoutPostInput,
          ReactionUncheckedCreateWithoutPostInput
        >
      | ReactionCreateWithoutPostInput[]
      | ReactionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutPostInput
      | ReactionCreateOrConnectWithoutPostInput[];
    createMany?: ReactionCreateManyPostInputEnvelope;
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
  };

  export type PrivateNoteUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutPostInput,
          PrivateNoteUncheckedCreateWithoutPostInput
        >
      | PrivateNoteCreateWithoutPostInput[]
      | PrivateNoteUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutPostInput
      | PrivateNoteCreateOrConnectWithoutPostInput[];
    createMany?: PrivateNoteCreateManyPostInputEnvelope;
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPostsInput,
        UserUpdateWithoutPostsInput
      >,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type PostEmotionUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutPostInput,
          PostEmotionUncheckedCreateWithoutPostInput
        >
      | PostEmotionCreateWithoutPostInput[]
      | PostEmotionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutPostInput
      | PostEmotionCreateOrConnectWithoutPostInput[];
    upsert?:
      | PostEmotionUpsertWithWhereUniqueWithoutPostInput
      | PostEmotionUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PostEmotionCreateManyPostInputEnvelope;
    set?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    disconnect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    delete?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    update?:
      | PostEmotionUpdateWithWhereUniqueWithoutPostInput
      | PostEmotionUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PostEmotionUpdateManyWithWhereWithoutPostInput
      | PostEmotionUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PostEmotionScalarWhereInput | PostEmotionScalarWhereInput[];
  };

  export type ReactionUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          ReactionCreateWithoutPostInput,
          ReactionUncheckedCreateWithoutPostInput
        >
      | ReactionCreateWithoutPostInput[]
      | ReactionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutPostInput
      | ReactionCreateOrConnectWithoutPostInput[];
    upsert?:
      | ReactionUpsertWithWhereUniqueWithoutPostInput
      | ReactionUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: ReactionCreateManyPostInputEnvelope;
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    update?:
      | ReactionUpdateWithWhereUniqueWithoutPostInput
      | ReactionUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | ReactionUpdateManyWithWhereWithoutPostInput
      | ReactionUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[];
  };

  export type PrivateNoteUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutPostInput,
          PrivateNoteUncheckedCreateWithoutPostInput
        >
      | PrivateNoteCreateWithoutPostInput[]
      | PrivateNoteUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutPostInput
      | PrivateNoteCreateOrConnectWithoutPostInput[];
    upsert?:
      | PrivateNoteUpsertWithWhereUniqueWithoutPostInput
      | PrivateNoteUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PrivateNoteCreateManyPostInputEnvelope;
    set?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    disconnect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    delete?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    update?:
      | PrivateNoteUpdateWithWhereUniqueWithoutPostInput
      | PrivateNoteUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PrivateNoteUpdateManyWithWhereWithoutPostInput
      | PrivateNoteUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PrivateNoteScalarWhereInput | PrivateNoteScalarWhereInput[];
  };

  export type PostEmotionUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutPostInput,
          PostEmotionUncheckedCreateWithoutPostInput
        >
      | PostEmotionCreateWithoutPostInput[]
      | PostEmotionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutPostInput
      | PostEmotionCreateOrConnectWithoutPostInput[];
    upsert?:
      | PostEmotionUpsertWithWhereUniqueWithoutPostInput
      | PostEmotionUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PostEmotionCreateManyPostInputEnvelope;
    set?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    disconnect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    delete?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    update?:
      | PostEmotionUpdateWithWhereUniqueWithoutPostInput
      | PostEmotionUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PostEmotionUpdateManyWithWhereWithoutPostInput
      | PostEmotionUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PostEmotionScalarWhereInput | PostEmotionScalarWhereInput[];
  };

  export type ReactionUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          ReactionCreateWithoutPostInput,
          ReactionUncheckedCreateWithoutPostInput
        >
      | ReactionCreateWithoutPostInput[]
      | ReactionUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | ReactionCreateOrConnectWithoutPostInput
      | ReactionCreateOrConnectWithoutPostInput[];
    upsert?:
      | ReactionUpsertWithWhereUniqueWithoutPostInput
      | ReactionUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: ReactionCreateManyPostInputEnvelope;
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[];
    update?:
      | ReactionUpdateWithWhereUniqueWithoutPostInput
      | ReactionUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | ReactionUpdateManyWithWhereWithoutPostInput
      | ReactionUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[];
  };

  export type PrivateNoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          PrivateNoteCreateWithoutPostInput,
          PrivateNoteUncheckedCreateWithoutPostInput
        >
      | PrivateNoteCreateWithoutPostInput[]
      | PrivateNoteUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PrivateNoteCreateOrConnectWithoutPostInput
      | PrivateNoteCreateOrConnectWithoutPostInput[];
    upsert?:
      | PrivateNoteUpsertWithWhereUniqueWithoutPostInput
      | PrivateNoteUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PrivateNoteCreateManyPostInputEnvelope;
    set?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    disconnect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    delete?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    connect?: PrivateNoteWhereUniqueInput | PrivateNoteWhereUniqueInput[];
    update?:
      | PrivateNoteUpdateWithWhereUniqueWithoutPostInput
      | PrivateNoteUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PrivateNoteUpdateManyWithWhereWithoutPostInput
      | PrivateNoteUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PrivateNoteScalarWhereInput | PrivateNoteScalarWhereInput[];
  };

  export type PostEmotionCreateNestedManyWithoutEmotionInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutEmotionInput,
          PostEmotionUncheckedCreateWithoutEmotionInput
        >
      | PostEmotionCreateWithoutEmotionInput[]
      | PostEmotionUncheckedCreateWithoutEmotionInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutEmotionInput
      | PostEmotionCreateOrConnectWithoutEmotionInput[];
    createMany?: PostEmotionCreateManyEmotionInputEnvelope;
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
  };

  export type PostEmotionUncheckedCreateNestedManyWithoutEmotionInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutEmotionInput,
          PostEmotionUncheckedCreateWithoutEmotionInput
        >
      | PostEmotionCreateWithoutEmotionInput[]
      | PostEmotionUncheckedCreateWithoutEmotionInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutEmotionInput
      | PostEmotionCreateOrConnectWithoutEmotionInput[];
    createMany?: PostEmotionCreateManyEmotionInputEnvelope;
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
  };

  export type PostEmotionUpdateManyWithoutEmotionNestedInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutEmotionInput,
          PostEmotionUncheckedCreateWithoutEmotionInput
        >
      | PostEmotionCreateWithoutEmotionInput[]
      | PostEmotionUncheckedCreateWithoutEmotionInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutEmotionInput
      | PostEmotionCreateOrConnectWithoutEmotionInput[];
    upsert?:
      | PostEmotionUpsertWithWhereUniqueWithoutEmotionInput
      | PostEmotionUpsertWithWhereUniqueWithoutEmotionInput[];
    createMany?: PostEmotionCreateManyEmotionInputEnvelope;
    set?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    disconnect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    delete?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    update?:
      | PostEmotionUpdateWithWhereUniqueWithoutEmotionInput
      | PostEmotionUpdateWithWhereUniqueWithoutEmotionInput[];
    updateMany?:
      | PostEmotionUpdateManyWithWhereWithoutEmotionInput
      | PostEmotionUpdateManyWithWhereWithoutEmotionInput[];
    deleteMany?: PostEmotionScalarWhereInput | PostEmotionScalarWhereInput[];
  };

  export type PostEmotionUncheckedUpdateManyWithoutEmotionNestedInput = {
    create?:
      | XOR<
          PostEmotionCreateWithoutEmotionInput,
          PostEmotionUncheckedCreateWithoutEmotionInput
        >
      | PostEmotionCreateWithoutEmotionInput[]
      | PostEmotionUncheckedCreateWithoutEmotionInput[];
    connectOrCreate?:
      | PostEmotionCreateOrConnectWithoutEmotionInput
      | PostEmotionCreateOrConnectWithoutEmotionInput[];
    upsert?:
      | PostEmotionUpsertWithWhereUniqueWithoutEmotionInput
      | PostEmotionUpsertWithWhereUniqueWithoutEmotionInput[];
    createMany?: PostEmotionCreateManyEmotionInputEnvelope;
    set?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    disconnect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    delete?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    connect?: PostEmotionWhereUniqueInput | PostEmotionWhereUniqueInput[];
    update?:
      | PostEmotionUpdateWithWhereUniqueWithoutEmotionInput
      | PostEmotionUpdateWithWhereUniqueWithoutEmotionInput[];
    updateMany?:
      | PostEmotionUpdateManyWithWhereWithoutEmotionInput
      | PostEmotionUpdateManyWithWhereWithoutEmotionInput[];
    deleteMany?: PostEmotionScalarWhereInput | PostEmotionScalarWhereInput[];
  };

  export type PostCreateNestedOneWithoutPostEmotionsInput = {
    create?: XOR<
      PostCreateWithoutPostEmotionsInput,
      PostUncheckedCreateWithoutPostEmotionsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutPostEmotionsInput;
    connect?: PostWhereUniqueInput;
  };

  export type EmotionCreateNestedOneWithoutPostEmotionsInput = {
    create?: XOR<
      EmotionCreateWithoutPostEmotionsInput,
      EmotionUncheckedCreateWithoutPostEmotionsInput
    >;
    connectOrCreate?: EmotionCreateOrConnectWithoutPostEmotionsInput;
    connect?: EmotionWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutPostEmotionsNestedInput = {
    create?: XOR<
      PostCreateWithoutPostEmotionsInput,
      PostUncheckedCreateWithoutPostEmotionsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutPostEmotionsInput;
    upsert?: PostUpsertWithoutPostEmotionsInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutPostEmotionsInput,
        PostUpdateWithoutPostEmotionsInput
      >,
      PostUncheckedUpdateWithoutPostEmotionsInput
    >;
  };

  export type EmotionUpdateOneRequiredWithoutPostEmotionsNestedInput = {
    create?: XOR<
      EmotionCreateWithoutPostEmotionsInput,
      EmotionUncheckedCreateWithoutPostEmotionsInput
    >;
    connectOrCreate?: EmotionCreateOrConnectWithoutPostEmotionsInput;
    upsert?: EmotionUpsertWithoutPostEmotionsInput;
    connect?: EmotionWhereUniqueInput;
    update?: XOR<
      XOR<
        EmotionUpdateToOneWithWhereWithoutPostEmotionsInput,
        EmotionUpdateWithoutPostEmotionsInput
      >,
      EmotionUncheckedUpdateWithoutPostEmotionsInput
    >;
  };

  export type PostCreateNestedOneWithoutReactionsInput = {
    create?: XOR<
      PostCreateWithoutReactionsInput,
      PostUncheckedCreateWithoutReactionsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<
      UserCreateWithoutReactionsInput,
      UserUncheckedCreateWithoutReactionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<
      PostCreateWithoutReactionsInput,
      PostUncheckedCreateWithoutReactionsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput;
    upsert?: PostUpsertWithoutReactionsInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutReactionsInput,
        PostUpdateWithoutReactionsInput
      >,
      PostUncheckedUpdateWithoutReactionsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<
      UserCreateWithoutReactionsInput,
      UserUncheckedCreateWithoutReactionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput;
    upsert?: UserUpsertWithoutReactionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReactionsInput,
        UserUpdateWithoutReactionsInput
      >,
      UserUncheckedUpdateWithoutReactionsInput
    >;
  };

  export type PostCreateNestedOneWithoutPrivateNotesInput = {
    create?: XOR<
      PostCreateWithoutPrivateNotesInput,
      PostUncheckedCreateWithoutPrivateNotesInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutPrivateNotesInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutPrivateNotesInput = {
    create?: XOR<
      UserCreateWithoutPrivateNotesInput,
      UserUncheckedCreateWithoutPrivateNotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPrivateNotesInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutPrivateNotesNestedInput = {
    create?: XOR<
      PostCreateWithoutPrivateNotesInput,
      PostUncheckedCreateWithoutPrivateNotesInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutPrivateNotesInput;
    upsert?: PostUpsertWithoutPrivateNotesInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutPrivateNotesInput,
        PostUpdateWithoutPrivateNotesInput
      >,
      PostUncheckedUpdateWithoutPrivateNotesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutPrivateNotesNestedInput = {
    create?: XOR<
      UserCreateWithoutPrivateNotesInput,
      UserUncheckedCreateWithoutPrivateNotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPrivateNotesInput;
    upsert?: UserUpsertWithoutPrivateNotesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPrivateNotesInput,
        UserUpdateWithoutPrivateNotesInput
      >,
      UserUncheckedUpdateWithoutPrivateNotesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type PostCreateWithoutAuthorInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postEmotions?: PostEmotionCreateNestedManyWithoutPostInput;
    reactions?: ReactionCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postEmotions?: PostEmotionUncheckedCreateNestedManyWithoutPostInput;
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type ReactionCreateWithoutUserInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutReactionsInput;
  };

  export type ReactionUncheckedCreateWithoutUserInput = {
    id?: string;
    postId: string;
    type: string;
    createdAt?: Date | string;
  };

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput;
    create: XOR<
      ReactionCreateWithoutUserInput,
      ReactionUncheckedCreateWithoutUserInput
    >;
  };

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PrivateNoteCreateWithoutUserInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutPrivateNotesInput;
  };

  export type PrivateNoteUncheckedCreateWithoutUserInput = {
    id?: string;
    postId: string;
    body: string;
    createdAt?: Date | string;
  };

  export type PrivateNoteCreateOrConnectWithoutUserInput = {
    where: PrivateNoteWhereUniqueInput;
    create: XOR<
      PrivateNoteCreateWithoutUserInput,
      PrivateNoteUncheckedCreateWithoutUserInput
    >;
  };

  export type PrivateNoteCreateManyUserInputEnvelope = {
    data: PrivateNoteCreateManyUserInput | PrivateNoteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: StringFilter<'Post'> | string;
    authorId?: StringFilter<'Post'> | string;
    whatPerson?: StringFilter<'Post'> | string;
    thoughts?: StringNullableFilter<'Post'> | string | null;
    createdAt?: DateTimeFilter<'Post'> | Date | string;
    updatedAt?: DateTimeFilter<'Post'> | Date | string;
  };

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput;
    update: XOR<
      ReactionUpdateWithoutUserInput,
      ReactionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ReactionCreateWithoutUserInput,
      ReactionUncheckedCreateWithoutUserInput
    >;
  };

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput;
    data: XOR<
      ReactionUpdateWithoutUserInput,
      ReactionUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput;
    data: XOR<
      ReactionUpdateManyMutationInput,
      ReactionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[];
    OR?: ReactionScalarWhereInput[];
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[];
    id?: StringFilter<'Reaction'> | string;
    postId?: StringFilter<'Reaction'> | string;
    userId?: StringFilter<'Reaction'> | string;
    type?: StringFilter<'Reaction'> | string;
    createdAt?: DateTimeFilter<'Reaction'> | Date | string;
  };

  export type PrivateNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: PrivateNoteWhereUniqueInput;
    update: XOR<
      PrivateNoteUpdateWithoutUserInput,
      PrivateNoteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PrivateNoteCreateWithoutUserInput,
      PrivateNoteUncheckedCreateWithoutUserInput
    >;
  };

  export type PrivateNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: PrivateNoteWhereUniqueInput;
    data: XOR<
      PrivateNoteUpdateWithoutUserInput,
      PrivateNoteUncheckedUpdateWithoutUserInput
    >;
  };

  export type PrivateNoteUpdateManyWithWhereWithoutUserInput = {
    where: PrivateNoteScalarWhereInput;
    data: XOR<
      PrivateNoteUpdateManyMutationInput,
      PrivateNoteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PrivateNoteScalarWhereInput = {
    AND?: PrivateNoteScalarWhereInput | PrivateNoteScalarWhereInput[];
    OR?: PrivateNoteScalarWhereInput[];
    NOT?: PrivateNoteScalarWhereInput | PrivateNoteScalarWhereInput[];
    id?: StringFilter<'PrivateNote'> | string;
    postId?: StringFilter<'PrivateNote'> | string;
    userId?: StringFilter<'PrivateNote'> | string;
    body?: StringFilter<'PrivateNote'> | string;
    createdAt?: DateTimeFilter<'PrivateNote'> | Date | string;
  };

  export type UserCreateWithoutPostsInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reactions?: ReactionCreateNestedManyWithoutUserInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
  };

  export type PostEmotionCreateWithoutPostInput = {
    emotion: EmotionCreateNestedOneWithoutPostEmotionsInput;
  };

  export type PostEmotionUncheckedCreateWithoutPostInput = {
    emotionId: string;
  };

  export type PostEmotionCreateOrConnectWithoutPostInput = {
    where: PostEmotionWhereUniqueInput;
    create: XOR<
      PostEmotionCreateWithoutPostInput,
      PostEmotionUncheckedCreateWithoutPostInput
    >;
  };

  export type PostEmotionCreateManyPostInputEnvelope = {
    data: PostEmotionCreateManyPostInput | PostEmotionCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type ReactionCreateWithoutPostInput = {
    id?: string;
    type: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutReactionsInput;
  };

  export type ReactionUncheckedCreateWithoutPostInput = {
    id?: string;
    userId: string;
    type: string;
    createdAt?: Date | string;
  };

  export type ReactionCreateOrConnectWithoutPostInput = {
    where: ReactionWhereUniqueInput;
    create: XOR<
      ReactionCreateWithoutPostInput,
      ReactionUncheckedCreateWithoutPostInput
    >;
  };

  export type ReactionCreateManyPostInputEnvelope = {
    data: ReactionCreateManyPostInput | ReactionCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type PrivateNoteCreateWithoutPostInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutPrivateNotesInput;
  };

  export type PrivateNoteUncheckedCreateWithoutPostInput = {
    id?: string;
    userId: string;
    body: string;
    createdAt?: Date | string;
  };

  export type PrivateNoteCreateOrConnectWithoutPostInput = {
    where: PrivateNoteWhereUniqueInput;
    create: XOR<
      PrivateNoteCreateWithoutPostInput,
      PrivateNoteUncheckedCreateWithoutPostInput
    >;
  };

  export type PrivateNoteCreateManyPostInputEnvelope = {
    data: PrivateNoteCreateManyPostInput | PrivateNoteCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutPostsInput = {
    update: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reactions?: ReactionUpdateManyWithoutUserNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PostEmotionUpsertWithWhereUniqueWithoutPostInput = {
    where: PostEmotionWhereUniqueInput;
    update: XOR<
      PostEmotionUpdateWithoutPostInput,
      PostEmotionUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      PostEmotionCreateWithoutPostInput,
      PostEmotionUncheckedCreateWithoutPostInput
    >;
  };

  export type PostEmotionUpdateWithWhereUniqueWithoutPostInput = {
    where: PostEmotionWhereUniqueInput;
    data: XOR<
      PostEmotionUpdateWithoutPostInput,
      PostEmotionUncheckedUpdateWithoutPostInput
    >;
  };

  export type PostEmotionUpdateManyWithWhereWithoutPostInput = {
    where: PostEmotionScalarWhereInput;
    data: XOR<
      PostEmotionUpdateManyMutationInput,
      PostEmotionUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type PostEmotionScalarWhereInput = {
    AND?: PostEmotionScalarWhereInput | PostEmotionScalarWhereInput[];
    OR?: PostEmotionScalarWhereInput[];
    NOT?: PostEmotionScalarWhereInput | PostEmotionScalarWhereInput[];
    postId?: StringFilter<'PostEmotion'> | string;
    emotionId?: StringFilter<'PostEmotion'> | string;
  };

  export type ReactionUpsertWithWhereUniqueWithoutPostInput = {
    where: ReactionWhereUniqueInput;
    update: XOR<
      ReactionUpdateWithoutPostInput,
      ReactionUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      ReactionCreateWithoutPostInput,
      ReactionUncheckedCreateWithoutPostInput
    >;
  };

  export type ReactionUpdateWithWhereUniqueWithoutPostInput = {
    where: ReactionWhereUniqueInput;
    data: XOR<
      ReactionUpdateWithoutPostInput,
      ReactionUncheckedUpdateWithoutPostInput
    >;
  };

  export type ReactionUpdateManyWithWhereWithoutPostInput = {
    where: ReactionScalarWhereInput;
    data: XOR<
      ReactionUpdateManyMutationInput,
      ReactionUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type PrivateNoteUpsertWithWhereUniqueWithoutPostInput = {
    where: PrivateNoteWhereUniqueInput;
    update: XOR<
      PrivateNoteUpdateWithoutPostInput,
      PrivateNoteUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      PrivateNoteCreateWithoutPostInput,
      PrivateNoteUncheckedCreateWithoutPostInput
    >;
  };

  export type PrivateNoteUpdateWithWhereUniqueWithoutPostInput = {
    where: PrivateNoteWhereUniqueInput;
    data: XOR<
      PrivateNoteUpdateWithoutPostInput,
      PrivateNoteUncheckedUpdateWithoutPostInput
    >;
  };

  export type PrivateNoteUpdateManyWithWhereWithoutPostInput = {
    where: PrivateNoteScalarWhereInput;
    data: XOR<
      PrivateNoteUpdateManyMutationInput,
      PrivateNoteUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type PostEmotionCreateWithoutEmotionInput = {
    post: PostCreateNestedOneWithoutPostEmotionsInput;
  };

  export type PostEmotionUncheckedCreateWithoutEmotionInput = {
    postId: string;
  };

  export type PostEmotionCreateOrConnectWithoutEmotionInput = {
    where: PostEmotionWhereUniqueInput;
    create: XOR<
      PostEmotionCreateWithoutEmotionInput,
      PostEmotionUncheckedCreateWithoutEmotionInput
    >;
  };

  export type PostEmotionCreateManyEmotionInputEnvelope = {
    data:
      | PostEmotionCreateManyEmotionInput
      | PostEmotionCreateManyEmotionInput[];
    skipDuplicates?: boolean;
  };

  export type PostEmotionUpsertWithWhereUniqueWithoutEmotionInput = {
    where: PostEmotionWhereUniqueInput;
    update: XOR<
      PostEmotionUpdateWithoutEmotionInput,
      PostEmotionUncheckedUpdateWithoutEmotionInput
    >;
    create: XOR<
      PostEmotionCreateWithoutEmotionInput,
      PostEmotionUncheckedCreateWithoutEmotionInput
    >;
  };

  export type PostEmotionUpdateWithWhereUniqueWithoutEmotionInput = {
    where: PostEmotionWhereUniqueInput;
    data: XOR<
      PostEmotionUpdateWithoutEmotionInput,
      PostEmotionUncheckedUpdateWithoutEmotionInput
    >;
  };

  export type PostEmotionUpdateManyWithWhereWithoutEmotionInput = {
    where: PostEmotionScalarWhereInput;
    data: XOR<
      PostEmotionUpdateManyMutationInput,
      PostEmotionUncheckedUpdateManyWithoutEmotionInput
    >;
  };

  export type PostCreateWithoutPostEmotionsInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    reactions?: ReactionCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutPostEmotionsInput = {
    id?: string;
    authorId: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutPostEmotionsInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutPostEmotionsInput,
      PostUncheckedCreateWithoutPostEmotionsInput
    >;
  };

  export type EmotionCreateWithoutPostEmotionsInput = {
    id?: string;
    code: string;
    label: string;
  };

  export type EmotionUncheckedCreateWithoutPostEmotionsInput = {
    id?: string;
    code: string;
    label: string;
  };

  export type EmotionCreateOrConnectWithoutPostEmotionsInput = {
    where: EmotionWhereUniqueInput;
    create: XOR<
      EmotionCreateWithoutPostEmotionsInput,
      EmotionUncheckedCreateWithoutPostEmotionsInput
    >;
  };

  export type PostUpsertWithoutPostEmotionsInput = {
    update: XOR<
      PostUpdateWithoutPostEmotionsInput,
      PostUncheckedUpdateWithoutPostEmotionsInput
    >;
    create: XOR<
      PostCreateWithoutPostEmotionsInput,
      PostUncheckedCreateWithoutPostEmotionsInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutPostEmotionsInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutPostEmotionsInput,
      PostUncheckedUpdateWithoutPostEmotionsInput
    >;
  };

  export type PostUpdateWithoutPostEmotionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    reactions?: ReactionUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutPostEmotionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type EmotionUpsertWithoutPostEmotionsInput = {
    update: XOR<
      EmotionUpdateWithoutPostEmotionsInput,
      EmotionUncheckedUpdateWithoutPostEmotionsInput
    >;
    create: XOR<
      EmotionCreateWithoutPostEmotionsInput,
      EmotionUncheckedCreateWithoutPostEmotionsInput
    >;
    where?: EmotionWhereInput;
  };

  export type EmotionUpdateToOneWithWhereWithoutPostEmotionsInput = {
    where?: EmotionWhereInput;
    data: XOR<
      EmotionUpdateWithoutPostEmotionsInput,
      EmotionUncheckedUpdateWithoutPostEmotionsInput
    >;
  };

  export type EmotionUpdateWithoutPostEmotionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
  };

  export type EmotionUncheckedUpdateWithoutPostEmotionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
  };

  export type PostCreateWithoutReactionsInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    postEmotions?: PostEmotionCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutReactionsInput = {
    id?: string;
    authorId: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postEmotions?: PostEmotionUncheckedCreateNestedManyWithoutPostInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutReactionsInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutReactionsInput,
      PostUncheckedCreateWithoutReactionsInput
    >;
  };

  export type UserCreateWithoutReactionsInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    privateNotes?: PrivateNoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    privateNotes?: PrivateNoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutReactionsInput,
      UserUncheckedCreateWithoutReactionsInput
    >;
  };

  export type PostUpsertWithoutReactionsInput = {
    update: XOR<
      PostUpdateWithoutReactionsInput,
      PostUncheckedUpdateWithoutReactionsInput
    >;
    create: XOR<
      PostCreateWithoutReactionsInput,
      PostUncheckedCreateWithoutReactionsInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutReactionsInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutReactionsInput,
      PostUncheckedUpdateWithoutReactionsInput
    >;
  };

  export type PostUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    postEmotions?: PostEmotionUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postEmotions?: PostEmotionUncheckedUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<
      UserUpdateWithoutReactionsInput,
      UserUncheckedUpdateWithoutReactionsInput
    >;
    create: XOR<
      UserCreateWithoutReactionsInput,
      UserUncheckedCreateWithoutReactionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutReactionsInput,
      UserUncheckedUpdateWithoutReactionsInput
    >;
  };

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PostCreateWithoutPrivateNotesInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    postEmotions?: PostEmotionCreateNestedManyWithoutPostInput;
    reactions?: ReactionCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutPrivateNotesInput = {
    id?: string;
    authorId: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postEmotions?: PostEmotionUncheckedCreateNestedManyWithoutPostInput;
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutPrivateNotesInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutPrivateNotesInput,
      PostUncheckedCreateWithoutPrivateNotesInput
    >;
  };

  export type UserCreateWithoutPrivateNotesInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    reactions?: ReactionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPrivateNotesInput = {
    id?: string;
    firebaseUid: string;
    ordinal?: number;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPrivateNotesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPrivateNotesInput,
      UserUncheckedCreateWithoutPrivateNotesInput
    >;
  };

  export type PostUpsertWithoutPrivateNotesInput = {
    update: XOR<
      PostUpdateWithoutPrivateNotesInput,
      PostUncheckedUpdateWithoutPrivateNotesInput
    >;
    create: XOR<
      PostCreateWithoutPrivateNotesInput,
      PostUncheckedCreateWithoutPrivateNotesInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutPrivateNotesInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutPrivateNotesInput,
      PostUncheckedUpdateWithoutPrivateNotesInput
    >;
  };

  export type PostUpdateWithoutPrivateNotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    postEmotions?: PostEmotionUpdateManyWithoutPostNestedInput;
    reactions?: ReactionUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutPrivateNotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postEmotions?: PostEmotionUncheckedUpdateManyWithoutPostNestedInput;
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserUpsertWithoutPrivateNotesInput = {
    update: XOR<
      UserUpdateWithoutPrivateNotesInput,
      UserUncheckedUpdateWithoutPrivateNotesInput
    >;
    create: XOR<
      UserCreateWithoutPrivateNotesInput,
      UserUncheckedCreateWithoutPrivateNotesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPrivateNotesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPrivateNotesInput,
      UserUncheckedUpdateWithoutPrivateNotesInput
    >;
  };

  export type UserUpdateWithoutPrivateNotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    reactions?: ReactionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPrivateNotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firebaseUid?: StringFieldUpdateOperationsInput | string;
    ordinal?: IntFieldUpdateOperationsInput | number;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PostCreateManyAuthorInput = {
    id?: string;
    whatPerson: string;
    thoughts?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReactionCreateManyUserInput = {
    id?: string;
    postId: string;
    type: string;
    createdAt?: Date | string;
  };

  export type PrivateNoteCreateManyUserInput = {
    id?: string;
    postId: string;
    body: string;
    createdAt?: Date | string;
  };

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postEmotions?: PostEmotionUpdateManyWithoutPostNestedInput;
    reactions?: ReactionUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postEmotions?: PostEmotionUncheckedUpdateManyWithoutPostNestedInput;
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput;
    privateNotes?: PrivateNoteUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    whatPerson?: StringFieldUpdateOperationsInput | string;
    thoughts?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutReactionsNestedInput;
  };

  export type ReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutPrivateNotesNestedInput;
  };

  export type PrivateNoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    postId?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostEmotionCreateManyPostInput = {
    emotionId: string;
  };

  export type ReactionCreateManyPostInput = {
    id?: string;
    userId: string;
    type: string;
    createdAt?: Date | string;
  };

  export type PrivateNoteCreateManyPostInput = {
    id?: string;
    userId: string;
    body: string;
    createdAt?: Date | string;
  };

  export type PostEmotionUpdateWithoutPostInput = {
    emotion?: EmotionUpdateOneRequiredWithoutPostEmotionsNestedInput;
  };

  export type PostEmotionUncheckedUpdateWithoutPostInput = {
    emotionId?: StringFieldUpdateOperationsInput | string;
  };

  export type PostEmotionUncheckedUpdateManyWithoutPostInput = {
    emotionId?: StringFieldUpdateOperationsInput | string;
  };

  export type ReactionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput;
  };

  export type ReactionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReactionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPrivateNotesNestedInput;
  };

  export type PrivateNoteUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PrivateNoteUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostEmotionCreateManyEmotionInput = {
    postId: string;
  };

  export type PostEmotionUpdateWithoutEmotionInput = {
    post?: PostUpdateOneRequiredWithoutPostEmotionsNestedInput;
  };

  export type PostEmotionUncheckedUpdateWithoutEmotionInput = {
    postId?: StringFieldUpdateOperationsInput | string;
  };

  export type PostEmotionUncheckedUpdateManyWithoutEmotionInput = {
    postId?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
