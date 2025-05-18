
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model FavoriteRestaurant
 * 
 */
export type FavoriteRestaurant = $Result.DefaultSelection<Prisma.$FavoriteRestaurantPayload>
/**
 * Model PaymentInfo
 * 
 */
export type PaymentInfo = $Result.DefaultSelection<Prisma.$PaymentInfoPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  Pending: 'Pending',
  Accepted: 'Accepted',
  Preparing: 'Preparing',
  PickedUp: 'PickedUp',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  Refunded: 'Refunded',
  Failed: 'Failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteRestaurant`: Exposes CRUD operations for the **FavoriteRestaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteRestaurants
    * const favoriteRestaurants = await prisma.favoriteRestaurant.findMany()
    * ```
    */
  get favoriteRestaurant(): Prisma.FavoriteRestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentInfo`: Exposes CRUD operations for the **PaymentInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentInfos
    * const paymentInfos = await prisma.paymentInfo.findMany()
    * ```
    */
  get paymentInfo(): Prisma.PaymentInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Restaurant: 'Restaurant',
    Driver: 'Driver',
    MenuItem: 'MenuItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment',
    Location: 'Location',
    FavoriteRestaurant: 'FavoriteRestaurant',
    PaymentInfo: 'PaymentInfo',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "restaurant" | "driver" | "menuItem" | "order" | "orderItem" | "payment" | "location" | "favoriteRestaurant" | "paymentInfo" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      FavoriteRestaurant: {
        payload: Prisma.$FavoriteRestaurantPayload<ExtArgs>
        fields: Prisma.FavoriteRestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteRestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteRestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>
          }
          findFirst: {
            args: Prisma.FavoriteRestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteRestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>
          }
          findMany: {
            args: Prisma.FavoriteRestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>[]
          }
          create: {
            args: Prisma.FavoriteRestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>
          }
          createMany: {
            args: Prisma.FavoriteRestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteRestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>[]
          }
          delete: {
            args: Prisma.FavoriteRestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>
          }
          update: {
            args: Prisma.FavoriteRestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteRestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteRestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteRestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteRestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRestaurantPayload>
          }
          aggregate: {
            args: Prisma.FavoriteRestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteRestaurant>
          }
          groupBy: {
            args: Prisma.FavoriteRestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteRestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteRestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteRestaurantCountAggregateOutputType> | number
          }
        }
      }
      PaymentInfo: {
        payload: Prisma.$PaymentInfoPayload<ExtArgs>
        fields: Prisma.PaymentInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          findFirst: {
            args: Prisma.PaymentInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          findMany: {
            args: Prisma.PaymentInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>[]
          }
          create: {
            args: Prisma.PaymentInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          createMany: {
            args: Prisma.PaymentInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>[]
          }
          delete: {
            args: Prisma.PaymentInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          update: {
            args: Prisma.PaymentInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          deleteMany: {
            args: Prisma.PaymentInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>[]
          }
          upsert: {
            args: Prisma.PaymentInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          aggregate: {
            args: Prisma.PaymentInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentInfo>
          }
          groupBy: {
            args: Prisma.PaymentInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentInfoCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    restaurant?: RestaurantOmit
    driver?: DriverOmit
    menuItem?: MenuItemOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    payment?: PaymentOmit
    location?: LocationOmit
    favoriteRestaurant?: FavoriteRestaurantOmit
    paymentInfo?: PaymentInfoOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
    favoriteRests: number
    notifications: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
    favoriteRests?: boolean | CustomerCountOutputTypeCountFavoriteRestsArgs
    notifications?: boolean | CustomerCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountFavoriteRestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRestaurantWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    menuItems: number
    orders: number
    favoriteBy: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | RestaurantCountOutputTypeCountMenuItemsArgs
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs
    favoriteBy?: boolean | RestaurantCountOutputTypeCountFavoriteByArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountFavoriteByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRestaurantWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    orders: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | DriverCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    orderItems: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    locationId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    locationId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    locationId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    locationId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    locationId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    locationId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId: number | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    locationId?: boolean
    location?: boolean | Customer$locationArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    favoriteRests?: boolean | Customer$favoriteRestsArgs<ExtArgs>
    paymentInfo?: boolean | Customer$paymentInfoArgs<ExtArgs>
    notifications?: boolean | Customer$notificationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    locationId?: boolean
    location?: boolean | Customer$locationArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    locationId?: boolean
    location?: boolean | Customer$locationArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    locationId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber" | "locationId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Customer$locationArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    favoriteRests?: boolean | Customer$favoriteRestsArgs<ExtArgs>
    paymentInfo?: boolean | Customer$paymentInfoArgs<ExtArgs>
    notifications?: boolean | Customer$notificationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Customer$locationArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Customer$locationArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      favoriteRests: Prisma.$FavoriteRestaurantPayload<ExtArgs>[]
      paymentInfo: Prisma.$PaymentInfoPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
      locationId: number | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends Customer$locationArgs<ExtArgs> = {}>(args?: Subset<T, Customer$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteRests<T extends Customer$favoriteRestsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$favoriteRestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentInfo<T extends Customer$paymentInfoArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paymentInfoArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Customer$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly cognitoId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly locationId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.location
   */
  export type Customer$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.favoriteRests
   */
  export type Customer$favoriteRestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    where?: FavoriteRestaurantWhereInput
    orderBy?: FavoriteRestaurantOrderByWithRelationInput | FavoriteRestaurantOrderByWithRelationInput[]
    cursor?: FavoriteRestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteRestaurantScalarFieldEnum | FavoriteRestaurantScalarFieldEnum[]
  }

  /**
   * Customer.paymentInfo
   */
  export type Customer$paymentInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    where?: PaymentInfoWhereInput
  }

  /**
   * Customer.notifications
   */
  export type Customer$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    description: string | null
    openTime: string | null
    closeTime: string | null
    locationId: number | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    description: string | null
    openTime: string | null
    closeTime: string | null
    locationId: number | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    description: number
    photoUrls: number
    openTime: number
    closeTime: number
    categories: number
    locationId: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type RestaurantSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    description?: true
    openTime?: true
    closeTime?: true
    locationId?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    description?: true
    openTime?: true
    closeTime?: true
    locationId?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    description?: true
    photoUrls?: true
    openTime?: true
    closeTime?: true
    categories?: true
    locationId?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description: string | null
    photoUrls: string[]
    openTime: string | null
    closeTime: string | null
    categories: string[]
    locationId: number | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    description?: boolean
    photoUrls?: boolean
    openTime?: boolean
    closeTime?: boolean
    categories?: boolean
    locationId?: boolean
    location?: boolean | Restaurant$locationArgs<ExtArgs>
    menuItems?: boolean | Restaurant$menuItemsArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    favoriteBy?: boolean | Restaurant$favoriteByArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    description?: boolean
    photoUrls?: boolean
    openTime?: boolean
    closeTime?: boolean
    categories?: boolean
    locationId?: boolean
    location?: boolean | Restaurant$locationArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    description?: boolean
    photoUrls?: boolean
    openTime?: boolean
    closeTime?: boolean
    categories?: boolean
    locationId?: boolean
    location?: boolean | Restaurant$locationArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    description?: boolean
    photoUrls?: boolean
    openTime?: boolean
    closeTime?: boolean
    categories?: boolean
    locationId?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber" | "description" | "photoUrls" | "openTime" | "closeTime" | "categories" | "locationId", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Restaurant$locationArgs<ExtArgs>
    menuItems?: boolean | Restaurant$menuItemsArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    favoriteBy?: boolean | Restaurant$favoriteByArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Restaurant$locationArgs<ExtArgs>
  }
  export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Restaurant$locationArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs> | null
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      favoriteBy: Prisma.$FavoriteRestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
      description: string | null
      photoUrls: string[]
      openTime: string | null
      closeTime: string | null
      categories: string[]
      locationId: number | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends Restaurant$locationArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    menuItems<T extends Restaurant$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Restaurant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteBy<T extends Restaurant$favoriteByArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$favoriteByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'Int'>
    readonly cognitoId: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly email: FieldRef<"Restaurant", 'String'>
    readonly phoneNumber: FieldRef<"Restaurant", 'String'>
    readonly description: FieldRef<"Restaurant", 'String'>
    readonly photoUrls: FieldRef<"Restaurant", 'String[]'>
    readonly openTime: FieldRef<"Restaurant", 'String'>
    readonly closeTime: FieldRef<"Restaurant", 'String'>
    readonly categories: FieldRef<"Restaurant", 'String[]'>
    readonly locationId: FieldRef<"Restaurant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.location
   */
  export type Restaurant$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Restaurant.menuItems
   */
  export type Restaurant$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Restaurant.orders
   */
  export type Restaurant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Restaurant.favoriteBy
   */
  export type Restaurant$favoriteByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    where?: FavoriteRestaurantWhereInput
    orderBy?: FavoriteRestaurantOrderByWithRelationInput | FavoriteRestaurantOrderByWithRelationInput[]
    cursor?: FavoriteRestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteRestaurantScalarFieldEnum | FavoriteRestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    orders?: boolean | Driver$ordersArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Driver$ordersArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Driver$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Driver$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly cognitoId: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly phoneNumber: FieldRef<"Driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.orders
   */
  export type Driver$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
    restaurantId: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    id: number | null
    price: number | null
    restaurantId: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    photoUrl: string | null
    restaurantId: number | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    photoUrl: string | null
    restaurantId: number | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    photoUrl: number
    restaurantId: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    id?: true
    price?: true
    restaurantId?: true
  }

  export type MenuItemSumAggregateInputType = {
    id?: true
    price?: true
    restaurantId?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    photoUrl?: true
    restaurantId?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    photoUrl?: true
    restaurantId?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    photoUrl?: true
    restaurantId?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    photoUrl: string | null
    restaurantId: number
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    photoUrl?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    photoUrl?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    photoUrl?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    photoUrl?: boolean
    restaurantId?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "photoUrl" | "restaurantId", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      photoUrl: string | null
      restaurantId: number
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
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
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'Int'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Float'>
    readonly photoUrl: FieldRef<"MenuItem", 'String'>
    readonly restaurantId: FieldRef<"MenuItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.orderItems
   */
  export type MenuItem$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    customerId: number | null
    restaurantId: number | null
    driverId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    customerId: number | null
    restaurantId: number | null
    driverId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    status: $Enums.OrderStatus | null
    totalPrice: number | null
    customerId: number | null
    restaurantId: number | null
    driverId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    status: $Enums.OrderStatus | null
    totalPrice: number | null
    customerId: number | null
    restaurantId: number | null
    driverId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    createdAt: number
    status: number
    totalPrice: number
    customerId: number
    restaurantId: number
    driverId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    customerId?: true
    restaurantId?: true
    driverId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    totalPrice?: true
    customerId?: true
    restaurantId?: true
    driverId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    totalPrice?: true
    customerId?: true
    restaurantId?: true
    driverId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    totalPrice?: true
    customerId?: true
    restaurantId?: true
    driverId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    totalPrice?: true
    customerId?: true
    restaurantId?: true
    driverId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    createdAt: Date
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
    driverId: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    totalPrice?: boolean
    customerId?: boolean
    restaurantId?: boolean
    driverId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    totalPrice?: boolean
    customerId?: boolean
    restaurantId?: boolean
    driverId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    totalPrice?: boolean
    customerId?: boolean
    restaurantId?: boolean
    driverId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    status?: boolean
    totalPrice?: boolean
    customerId?: boolean
    restaurantId?: boolean
    driverId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "status" | "totalPrice" | "customerId" | "restaurantId" | "driverId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      status: $Enums.OrderStatus
      totalPrice: number
      customerId: number
      restaurantId: number
      driverId: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends Order$driverArgs<ExtArgs> = {}>(args?: Subset<T, Order$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly restaurantId: FieldRef<"Order", 'Int'>
    readonly driverId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.driver
   */
  export type Order$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    orderId: number | null
    menuItemId: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    orderId: number | null
    menuItemId: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    orderId: number | null
    menuItemId: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    orderId: number | null
    menuItemId: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    orderId: number
    menuItemId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    orderId?: true
    menuItemId?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    orderId?: true
    menuItemId?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    orderId?: true
    menuItemId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    orderId?: true
    menuItemId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    orderId?: true
    menuItemId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    quantity: number
    price: number
    orderId: number
    menuItemId: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    orderId?: boolean
    menuItemId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    orderId?: boolean
    menuItemId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    orderId?: boolean
    menuItemId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    orderId?: boolean
    menuItemId?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "orderId" | "menuItemId", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: number
      orderId: number
      menuItemId: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Float'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly menuItemId: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    orderId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    orderId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    paymentDate: Date | null
    orderId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    paymentDate: Date | null
    orderId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    paymentDate: number
    orderId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    paymentDate?: true
    orderId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    paymentDate?: true
    orderId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    paymentDate?: true
    orderId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amount: number
    status: $Enums.PaymentStatus
    paymentDate: Date
    orderId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    orderId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "paymentDate" | "orderId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      status: $Enums.PaymentStatus
      paymentDate: Date
      orderId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly orderId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    customer?: boolean | Location$customerArgs<ExtArgs>
    restaurant?: boolean | Location$restaurantArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Location$customerArgs<ExtArgs>
    restaurant?: boolean | Location$restaurantArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Location$customerArgs<ExtArgs> = {}>(args?: Subset<T, Location$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends Location$restaurantArgs<ExtArgs> = {}>(args?: Subset<T, Location$restaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.customer
   */
  export type Location$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Location.restaurant
   */
  export type Location$restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteRestaurant
   */

  export type AggregateFavoriteRestaurant = {
    _count: FavoriteRestaurantCountAggregateOutputType | null
    _avg: FavoriteRestaurantAvgAggregateOutputType | null
    _sum: FavoriteRestaurantSumAggregateOutputType | null
    _min: FavoriteRestaurantMinAggregateOutputType | null
    _max: FavoriteRestaurantMaxAggregateOutputType | null
  }

  export type FavoriteRestaurantAvgAggregateOutputType = {
    customerId: number | null
    restaurantId: number | null
  }

  export type FavoriteRestaurantSumAggregateOutputType = {
    customerId: number | null
    restaurantId: number | null
  }

  export type FavoriteRestaurantMinAggregateOutputType = {
    customerId: number | null
    restaurantId: number | null
  }

  export type FavoriteRestaurantMaxAggregateOutputType = {
    customerId: number | null
    restaurantId: number | null
  }

  export type FavoriteRestaurantCountAggregateOutputType = {
    customerId: number
    restaurantId: number
    _all: number
  }


  export type FavoriteRestaurantAvgAggregateInputType = {
    customerId?: true
    restaurantId?: true
  }

  export type FavoriteRestaurantSumAggregateInputType = {
    customerId?: true
    restaurantId?: true
  }

  export type FavoriteRestaurantMinAggregateInputType = {
    customerId?: true
    restaurantId?: true
  }

  export type FavoriteRestaurantMaxAggregateInputType = {
    customerId?: true
    restaurantId?: true
  }

  export type FavoriteRestaurantCountAggregateInputType = {
    customerId?: true
    restaurantId?: true
    _all?: true
  }

  export type FavoriteRestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRestaurant to aggregate.
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRestaurants to fetch.
     */
    orderBy?: FavoriteRestaurantOrderByWithRelationInput | FavoriteRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteRestaurants
    **/
    _count?: true | FavoriteRestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteRestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteRestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteRestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteRestaurantMaxAggregateInputType
  }

  export type GetFavoriteRestaurantAggregateType<T extends FavoriteRestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteRestaurant[P]>
      : GetScalarType<T[P], AggregateFavoriteRestaurant[P]>
  }




  export type FavoriteRestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRestaurantWhereInput
    orderBy?: FavoriteRestaurantOrderByWithAggregationInput | FavoriteRestaurantOrderByWithAggregationInput[]
    by: FavoriteRestaurantScalarFieldEnum[] | FavoriteRestaurantScalarFieldEnum
    having?: FavoriteRestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteRestaurantCountAggregateInputType | true
    _avg?: FavoriteRestaurantAvgAggregateInputType
    _sum?: FavoriteRestaurantSumAggregateInputType
    _min?: FavoriteRestaurantMinAggregateInputType
    _max?: FavoriteRestaurantMaxAggregateInputType
  }

  export type FavoriteRestaurantGroupByOutputType = {
    customerId: number
    restaurantId: number
    _count: FavoriteRestaurantCountAggregateOutputType | null
    _avg: FavoriteRestaurantAvgAggregateOutputType | null
    _sum: FavoriteRestaurantSumAggregateOutputType | null
    _min: FavoriteRestaurantMinAggregateOutputType | null
    _max: FavoriteRestaurantMaxAggregateOutputType | null
  }

  type GetFavoriteRestaurantGroupByPayload<T extends FavoriteRestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteRestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteRestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteRestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteRestaurantGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteRestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    restaurantId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRestaurant"]>

  export type FavoriteRestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    restaurantId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRestaurant"]>

  export type FavoriteRestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    restaurantId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRestaurant"]>

  export type FavoriteRestaurantSelectScalar = {
    customerId?: boolean
    restaurantId?: boolean
  }

  export type FavoriteRestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerId" | "restaurantId", ExtArgs["result"]["favoriteRestaurant"]>
  export type FavoriteRestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type FavoriteRestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type FavoriteRestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $FavoriteRestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteRestaurant"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      restaurantId: number
    }, ExtArgs["result"]["favoriteRestaurant"]>
    composites: {}
  }

  type FavoriteRestaurantGetPayload<S extends boolean | null | undefined | FavoriteRestaurantDefaultArgs> = $Result.GetResult<Prisma.$FavoriteRestaurantPayload, S>

  type FavoriteRestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteRestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteRestaurantCountAggregateInputType | true
    }

  export interface FavoriteRestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteRestaurant'], meta: { name: 'FavoriteRestaurant' } }
    /**
     * Find zero or one FavoriteRestaurant that matches the filter.
     * @param {FavoriteRestaurantFindUniqueArgs} args - Arguments to find a FavoriteRestaurant
     * @example
     * // Get one FavoriteRestaurant
     * const favoriteRestaurant = await prisma.favoriteRestaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteRestaurantFindUniqueArgs>(args: SelectSubset<T, FavoriteRestaurantFindUniqueArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteRestaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteRestaurantFindUniqueOrThrowArgs} args - Arguments to find a FavoriteRestaurant
     * @example
     * // Get one FavoriteRestaurant
     * const favoriteRestaurant = await prisma.favoriteRestaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteRestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteRestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteRestaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantFindFirstArgs} args - Arguments to find a FavoriteRestaurant
     * @example
     * // Get one FavoriteRestaurant
     * const favoriteRestaurant = await prisma.favoriteRestaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteRestaurantFindFirstArgs>(args?: SelectSubset<T, FavoriteRestaurantFindFirstArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteRestaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantFindFirstOrThrowArgs} args - Arguments to find a FavoriteRestaurant
     * @example
     * // Get one FavoriteRestaurant
     * const favoriteRestaurant = await prisma.favoriteRestaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteRestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteRestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteRestaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteRestaurants
     * const favoriteRestaurants = await prisma.favoriteRestaurant.findMany()
     * 
     * // Get first 10 FavoriteRestaurants
     * const favoriteRestaurants = await prisma.favoriteRestaurant.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const favoriteRestaurantWithCustomerIdOnly = await prisma.favoriteRestaurant.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends FavoriteRestaurantFindManyArgs>(args?: SelectSubset<T, FavoriteRestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteRestaurant.
     * @param {FavoriteRestaurantCreateArgs} args - Arguments to create a FavoriteRestaurant.
     * @example
     * // Create one FavoriteRestaurant
     * const FavoriteRestaurant = await prisma.favoriteRestaurant.create({
     *   data: {
     *     // ... data to create a FavoriteRestaurant
     *   }
     * })
     * 
     */
    create<T extends FavoriteRestaurantCreateArgs>(args: SelectSubset<T, FavoriteRestaurantCreateArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteRestaurants.
     * @param {FavoriteRestaurantCreateManyArgs} args - Arguments to create many FavoriteRestaurants.
     * @example
     * // Create many FavoriteRestaurants
     * const favoriteRestaurant = await prisma.favoriteRestaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteRestaurantCreateManyArgs>(args?: SelectSubset<T, FavoriteRestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteRestaurants and returns the data saved in the database.
     * @param {FavoriteRestaurantCreateManyAndReturnArgs} args - Arguments to create many FavoriteRestaurants.
     * @example
     * // Create many FavoriteRestaurants
     * const favoriteRestaurant = await prisma.favoriteRestaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteRestaurants and only return the `customerId`
     * const favoriteRestaurantWithCustomerIdOnly = await prisma.favoriteRestaurant.createManyAndReturn({
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteRestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteRestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteRestaurant.
     * @param {FavoriteRestaurantDeleteArgs} args - Arguments to delete one FavoriteRestaurant.
     * @example
     * // Delete one FavoriteRestaurant
     * const FavoriteRestaurant = await prisma.favoriteRestaurant.delete({
     *   where: {
     *     // ... filter to delete one FavoriteRestaurant
     *   }
     * })
     * 
     */
    delete<T extends FavoriteRestaurantDeleteArgs>(args: SelectSubset<T, FavoriteRestaurantDeleteArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteRestaurant.
     * @param {FavoriteRestaurantUpdateArgs} args - Arguments to update one FavoriteRestaurant.
     * @example
     * // Update one FavoriteRestaurant
     * const favoriteRestaurant = await prisma.favoriteRestaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteRestaurantUpdateArgs>(args: SelectSubset<T, FavoriteRestaurantUpdateArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteRestaurants.
     * @param {FavoriteRestaurantDeleteManyArgs} args - Arguments to filter FavoriteRestaurants to delete.
     * @example
     * // Delete a few FavoriteRestaurants
     * const { count } = await prisma.favoriteRestaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteRestaurantDeleteManyArgs>(args?: SelectSubset<T, FavoriteRestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteRestaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteRestaurants
     * const favoriteRestaurant = await prisma.favoriteRestaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteRestaurantUpdateManyArgs>(args: SelectSubset<T, FavoriteRestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteRestaurants and returns the data updated in the database.
     * @param {FavoriteRestaurantUpdateManyAndReturnArgs} args - Arguments to update many FavoriteRestaurants.
     * @example
     * // Update many FavoriteRestaurants
     * const favoriteRestaurant = await prisma.favoriteRestaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteRestaurants and only return the `customerId`
     * const favoriteRestaurantWithCustomerIdOnly = await prisma.favoriteRestaurant.updateManyAndReturn({
     *   select: { customerId: true },
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
    updateManyAndReturn<T extends FavoriteRestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteRestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteRestaurant.
     * @param {FavoriteRestaurantUpsertArgs} args - Arguments to update or create a FavoriteRestaurant.
     * @example
     * // Update or create a FavoriteRestaurant
     * const favoriteRestaurant = await prisma.favoriteRestaurant.upsert({
     *   create: {
     *     // ... data to create a FavoriteRestaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteRestaurant we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteRestaurantUpsertArgs>(args: SelectSubset<T, FavoriteRestaurantUpsertArgs<ExtArgs>>): Prisma__FavoriteRestaurantClient<$Result.GetResult<Prisma.$FavoriteRestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteRestaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantCountArgs} args - Arguments to filter FavoriteRestaurants to count.
     * @example
     * // Count the number of FavoriteRestaurants
     * const count = await prisma.favoriteRestaurant.count({
     *   where: {
     *     // ... the filter for the FavoriteRestaurants we want to count
     *   }
     * })
    **/
    count<T extends FavoriteRestaurantCountArgs>(
      args?: Subset<T, FavoriteRestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteRestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteRestaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteRestaurantAggregateArgs>(args: Subset<T, FavoriteRestaurantAggregateArgs>): Prisma.PrismaPromise<GetFavoriteRestaurantAggregateType<T>>

    /**
     * Group by FavoriteRestaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRestaurantGroupByArgs} args - Group by arguments.
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
      T extends FavoriteRestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteRestaurantGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteRestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteRestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteRestaurant model
   */
  readonly fields: FavoriteRestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteRestaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteRestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteRestaurant model
   */
  interface FavoriteRestaurantFieldRefs {
    readonly customerId: FieldRef<"FavoriteRestaurant", 'Int'>
    readonly restaurantId: FieldRef<"FavoriteRestaurant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteRestaurant findUnique
   */
  export type FavoriteRestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRestaurant to fetch.
     */
    where: FavoriteRestaurantWhereUniqueInput
  }

  /**
   * FavoriteRestaurant findUniqueOrThrow
   */
  export type FavoriteRestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRestaurant to fetch.
     */
    where: FavoriteRestaurantWhereUniqueInput
  }

  /**
   * FavoriteRestaurant findFirst
   */
  export type FavoriteRestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRestaurant to fetch.
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRestaurants to fetch.
     */
    orderBy?: FavoriteRestaurantOrderByWithRelationInput | FavoriteRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRestaurants.
     */
    cursor?: FavoriteRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRestaurants.
     */
    distinct?: FavoriteRestaurantScalarFieldEnum | FavoriteRestaurantScalarFieldEnum[]
  }

  /**
   * FavoriteRestaurant findFirstOrThrow
   */
  export type FavoriteRestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRestaurant to fetch.
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRestaurants to fetch.
     */
    orderBy?: FavoriteRestaurantOrderByWithRelationInput | FavoriteRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRestaurants.
     */
    cursor?: FavoriteRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRestaurants.
     */
    distinct?: FavoriteRestaurantScalarFieldEnum | FavoriteRestaurantScalarFieldEnum[]
  }

  /**
   * FavoriteRestaurant findMany
   */
  export type FavoriteRestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRestaurants to fetch.
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRestaurants to fetch.
     */
    orderBy?: FavoriteRestaurantOrderByWithRelationInput | FavoriteRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteRestaurants.
     */
    cursor?: FavoriteRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRestaurants.
     */
    skip?: number
    distinct?: FavoriteRestaurantScalarFieldEnum | FavoriteRestaurantScalarFieldEnum[]
  }

  /**
   * FavoriteRestaurant create
   */
  export type FavoriteRestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteRestaurant.
     */
    data: XOR<FavoriteRestaurantCreateInput, FavoriteRestaurantUncheckedCreateInput>
  }

  /**
   * FavoriteRestaurant createMany
   */
  export type FavoriteRestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteRestaurants.
     */
    data: FavoriteRestaurantCreateManyInput | FavoriteRestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteRestaurant createManyAndReturn
   */
  export type FavoriteRestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteRestaurants.
     */
    data: FavoriteRestaurantCreateManyInput | FavoriteRestaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteRestaurant update
   */
  export type FavoriteRestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteRestaurant.
     */
    data: XOR<FavoriteRestaurantUpdateInput, FavoriteRestaurantUncheckedUpdateInput>
    /**
     * Choose, which FavoriteRestaurant to update.
     */
    where: FavoriteRestaurantWhereUniqueInput
  }

  /**
   * FavoriteRestaurant updateMany
   */
  export type FavoriteRestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteRestaurants.
     */
    data: XOR<FavoriteRestaurantUpdateManyMutationInput, FavoriteRestaurantUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteRestaurants to update
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * Limit how many FavoriteRestaurants to update.
     */
    limit?: number
  }

  /**
   * FavoriteRestaurant updateManyAndReturn
   */
  export type FavoriteRestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteRestaurants.
     */
    data: XOR<FavoriteRestaurantUpdateManyMutationInput, FavoriteRestaurantUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteRestaurants to update
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * Limit how many FavoriteRestaurants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteRestaurant upsert
   */
  export type FavoriteRestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteRestaurant to update in case it exists.
     */
    where: FavoriteRestaurantWhereUniqueInput
    /**
     * In case the FavoriteRestaurant found by the `where` argument doesn't exist, create a new FavoriteRestaurant with this data.
     */
    create: XOR<FavoriteRestaurantCreateInput, FavoriteRestaurantUncheckedCreateInput>
    /**
     * In case the FavoriteRestaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteRestaurantUpdateInput, FavoriteRestaurantUncheckedUpdateInput>
  }

  /**
   * FavoriteRestaurant delete
   */
  export type FavoriteRestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
    /**
     * Filter which FavoriteRestaurant to delete.
     */
    where: FavoriteRestaurantWhereUniqueInput
  }

  /**
   * FavoriteRestaurant deleteMany
   */
  export type FavoriteRestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRestaurants to delete
     */
    where?: FavoriteRestaurantWhereInput
    /**
     * Limit how many FavoriteRestaurants to delete.
     */
    limit?: number
  }

  /**
   * FavoriteRestaurant without action
   */
  export type FavoriteRestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRestaurant
     */
    select?: FavoriteRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRestaurant
     */
    omit?: FavoriteRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRestaurantInclude<ExtArgs> | null
  }


  /**
   * Model PaymentInfo
   */

  export type AggregatePaymentInfo = {
    _count: PaymentInfoCountAggregateOutputType | null
    _avg: PaymentInfoAvgAggregateOutputType | null
    _sum: PaymentInfoSumAggregateOutputType | null
    _min: PaymentInfoMinAggregateOutputType | null
    _max: PaymentInfoMaxAggregateOutputType | null
  }

  export type PaymentInfoAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    expiryMonth: number | null
    expiryYear: number | null
  }

  export type PaymentInfoSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    expiryMonth: number | null
    expiryYear: number | null
  }

  export type PaymentInfoMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    cardHolderName: string | null
    cardNumberHash: string | null
    expiryMonth: number | null
    expiryYear: number | null
    billingAddress: string | null
  }

  export type PaymentInfoMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    cardHolderName: string | null
    cardNumberHash: string | null
    expiryMonth: number | null
    expiryYear: number | null
    billingAddress: string | null
  }

  export type PaymentInfoCountAggregateOutputType = {
    id: number
    customerId: number
    cardHolderName: number
    cardNumberHash: number
    expiryMonth: number
    expiryYear: number
    billingAddress: number
    _all: number
  }


  export type PaymentInfoAvgAggregateInputType = {
    id?: true
    customerId?: true
    expiryMonth?: true
    expiryYear?: true
  }

  export type PaymentInfoSumAggregateInputType = {
    id?: true
    customerId?: true
    expiryMonth?: true
    expiryYear?: true
  }

  export type PaymentInfoMinAggregateInputType = {
    id?: true
    customerId?: true
    cardHolderName?: true
    cardNumberHash?: true
    expiryMonth?: true
    expiryYear?: true
    billingAddress?: true
  }

  export type PaymentInfoMaxAggregateInputType = {
    id?: true
    customerId?: true
    cardHolderName?: true
    cardNumberHash?: true
    expiryMonth?: true
    expiryYear?: true
    billingAddress?: true
  }

  export type PaymentInfoCountAggregateInputType = {
    id?: true
    customerId?: true
    cardHolderName?: true
    cardNumberHash?: true
    expiryMonth?: true
    expiryYear?: true
    billingAddress?: true
    _all?: true
  }

  export type PaymentInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentInfo to aggregate.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentInfos
    **/
    _count?: true | PaymentInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentInfoMaxAggregateInputType
  }

  export type GetPaymentInfoAggregateType<T extends PaymentInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentInfo[P]>
      : GetScalarType<T[P], AggregatePaymentInfo[P]>
  }




  export type PaymentInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentInfoWhereInput
    orderBy?: PaymentInfoOrderByWithAggregationInput | PaymentInfoOrderByWithAggregationInput[]
    by: PaymentInfoScalarFieldEnum[] | PaymentInfoScalarFieldEnum
    having?: PaymentInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentInfoCountAggregateInputType | true
    _avg?: PaymentInfoAvgAggregateInputType
    _sum?: PaymentInfoSumAggregateInputType
    _min?: PaymentInfoMinAggregateInputType
    _max?: PaymentInfoMaxAggregateInputType
  }

  export type PaymentInfoGroupByOutputType = {
    id: number
    customerId: number
    cardHolderName: string
    cardNumberHash: string
    expiryMonth: number
    expiryYear: number
    billingAddress: string
    _count: PaymentInfoCountAggregateOutputType | null
    _avg: PaymentInfoAvgAggregateOutputType | null
    _sum: PaymentInfoSumAggregateOutputType | null
    _min: PaymentInfoMinAggregateOutputType | null
    _max: PaymentInfoMaxAggregateOutputType | null
  }

  type GetPaymentInfoGroupByPayload<T extends PaymentInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentInfoGroupByOutputType[P]>
        }
      >
    >


  export type PaymentInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    cardHolderName?: boolean
    cardNumberHash?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    billingAddress?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInfo"]>

  export type PaymentInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    cardHolderName?: boolean
    cardNumberHash?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    billingAddress?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInfo"]>

  export type PaymentInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    cardHolderName?: boolean
    cardNumberHash?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    billingAddress?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInfo"]>

  export type PaymentInfoSelectScalar = {
    id?: boolean
    customerId?: boolean
    cardHolderName?: boolean
    cardNumberHash?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    billingAddress?: boolean
  }

  export type PaymentInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "cardHolderName" | "cardNumberHash" | "expiryMonth" | "expiryYear" | "billingAddress", ExtArgs["result"]["paymentInfo"]>
  export type PaymentInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PaymentInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PaymentInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $PaymentInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentInfo"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      cardHolderName: string
      cardNumberHash: string
      expiryMonth: number
      expiryYear: number
      billingAddress: string
    }, ExtArgs["result"]["paymentInfo"]>
    composites: {}
  }

  type PaymentInfoGetPayload<S extends boolean | null | undefined | PaymentInfoDefaultArgs> = $Result.GetResult<Prisma.$PaymentInfoPayload, S>

  type PaymentInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentInfoCountAggregateInputType | true
    }

  export interface PaymentInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentInfo'], meta: { name: 'PaymentInfo' } }
    /**
     * Find zero or one PaymentInfo that matches the filter.
     * @param {PaymentInfoFindUniqueArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentInfoFindUniqueArgs>(args: SelectSubset<T, PaymentInfoFindUniqueArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentInfoFindUniqueOrThrowArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoFindFirstArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentInfoFindFirstArgs>(args?: SelectSubset<T, PaymentInfoFindFirstArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoFindFirstOrThrowArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentInfos
     * const paymentInfos = await prisma.paymentInfo.findMany()
     * 
     * // Get first 10 PaymentInfos
     * const paymentInfos = await prisma.paymentInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentInfoWithIdOnly = await prisma.paymentInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentInfoFindManyArgs>(args?: SelectSubset<T, PaymentInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentInfo.
     * @param {PaymentInfoCreateArgs} args - Arguments to create a PaymentInfo.
     * @example
     * // Create one PaymentInfo
     * const PaymentInfo = await prisma.paymentInfo.create({
     *   data: {
     *     // ... data to create a PaymentInfo
     *   }
     * })
     * 
     */
    create<T extends PaymentInfoCreateArgs>(args: SelectSubset<T, PaymentInfoCreateArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentInfos.
     * @param {PaymentInfoCreateManyArgs} args - Arguments to create many PaymentInfos.
     * @example
     * // Create many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentInfoCreateManyArgs>(args?: SelectSubset<T, PaymentInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentInfos and returns the data saved in the database.
     * @param {PaymentInfoCreateManyAndReturnArgs} args - Arguments to create many PaymentInfos.
     * @example
     * // Create many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentInfos and only return the `id`
     * const paymentInfoWithIdOnly = await prisma.paymentInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentInfo.
     * @param {PaymentInfoDeleteArgs} args - Arguments to delete one PaymentInfo.
     * @example
     * // Delete one PaymentInfo
     * const PaymentInfo = await prisma.paymentInfo.delete({
     *   where: {
     *     // ... filter to delete one PaymentInfo
     *   }
     * })
     * 
     */
    delete<T extends PaymentInfoDeleteArgs>(args: SelectSubset<T, PaymentInfoDeleteArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentInfo.
     * @param {PaymentInfoUpdateArgs} args - Arguments to update one PaymentInfo.
     * @example
     * // Update one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentInfoUpdateArgs>(args: SelectSubset<T, PaymentInfoUpdateArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentInfos.
     * @param {PaymentInfoDeleteManyArgs} args - Arguments to filter PaymentInfos to delete.
     * @example
     * // Delete a few PaymentInfos
     * const { count } = await prisma.paymentInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentInfoDeleteManyArgs>(args?: SelectSubset<T, PaymentInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentInfoUpdateManyArgs>(args: SelectSubset<T, PaymentInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentInfos and returns the data updated in the database.
     * @param {PaymentInfoUpdateManyAndReturnArgs} args - Arguments to update many PaymentInfos.
     * @example
     * // Update many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentInfos and only return the `id`
     * const paymentInfoWithIdOnly = await prisma.paymentInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentInfo.
     * @param {PaymentInfoUpsertArgs} args - Arguments to update or create a PaymentInfo.
     * @example
     * // Update or create a PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.upsert({
     *   create: {
     *     // ... data to create a PaymentInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentInfo we want to update
     *   }
     * })
     */
    upsert<T extends PaymentInfoUpsertArgs>(args: SelectSubset<T, PaymentInfoUpsertArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoCountArgs} args - Arguments to filter PaymentInfos to count.
     * @example
     * // Count the number of PaymentInfos
     * const count = await prisma.paymentInfo.count({
     *   where: {
     *     // ... the filter for the PaymentInfos we want to count
     *   }
     * })
    **/
    count<T extends PaymentInfoCountArgs>(
      args?: Subset<T, PaymentInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentInfoAggregateArgs>(args: Subset<T, PaymentInfoAggregateArgs>): Prisma.PrismaPromise<GetPaymentInfoAggregateType<T>>

    /**
     * Group by PaymentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoGroupByArgs} args - Group by arguments.
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
      T extends PaymentInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentInfoGroupByArgs['orderBy'] }
        : { orderBy?: PaymentInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentInfo model
   */
  readonly fields: PaymentInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentInfo model
   */
  interface PaymentInfoFieldRefs {
    readonly id: FieldRef<"PaymentInfo", 'Int'>
    readonly customerId: FieldRef<"PaymentInfo", 'Int'>
    readonly cardHolderName: FieldRef<"PaymentInfo", 'String'>
    readonly cardNumberHash: FieldRef<"PaymentInfo", 'String'>
    readonly expiryMonth: FieldRef<"PaymentInfo", 'Int'>
    readonly expiryYear: FieldRef<"PaymentInfo", 'Int'>
    readonly billingAddress: FieldRef<"PaymentInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentInfo findUnique
   */
  export type PaymentInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo findUniqueOrThrow
   */
  export type PaymentInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo findFirst
   */
  export type PaymentInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentInfos.
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentInfos.
     */
    distinct?: PaymentInfoScalarFieldEnum | PaymentInfoScalarFieldEnum[]
  }

  /**
   * PaymentInfo findFirstOrThrow
   */
  export type PaymentInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentInfos.
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentInfos.
     */
    distinct?: PaymentInfoScalarFieldEnum | PaymentInfoScalarFieldEnum[]
  }

  /**
   * PaymentInfo findMany
   */
  export type PaymentInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfos to fetch.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentInfos.
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    distinct?: PaymentInfoScalarFieldEnum | PaymentInfoScalarFieldEnum[]
  }

  /**
   * PaymentInfo create
   */
  export type PaymentInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentInfo.
     */
    data: XOR<PaymentInfoCreateInput, PaymentInfoUncheckedCreateInput>
  }

  /**
   * PaymentInfo createMany
   */
  export type PaymentInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentInfos.
     */
    data: PaymentInfoCreateManyInput | PaymentInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentInfo createManyAndReturn
   */
  export type PaymentInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentInfos.
     */
    data: PaymentInfoCreateManyInput | PaymentInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentInfo update
   */
  export type PaymentInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentInfo.
     */
    data: XOR<PaymentInfoUpdateInput, PaymentInfoUncheckedUpdateInput>
    /**
     * Choose, which PaymentInfo to update.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo updateMany
   */
  export type PaymentInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentInfos.
     */
    data: XOR<PaymentInfoUpdateManyMutationInput, PaymentInfoUncheckedUpdateManyInput>
    /**
     * Filter which PaymentInfos to update
     */
    where?: PaymentInfoWhereInput
    /**
     * Limit how many PaymentInfos to update.
     */
    limit?: number
  }

  /**
   * PaymentInfo updateManyAndReturn
   */
  export type PaymentInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * The data used to update PaymentInfos.
     */
    data: XOR<PaymentInfoUpdateManyMutationInput, PaymentInfoUncheckedUpdateManyInput>
    /**
     * Filter which PaymentInfos to update
     */
    where?: PaymentInfoWhereInput
    /**
     * Limit how many PaymentInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentInfo upsert
   */
  export type PaymentInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentInfo to update in case it exists.
     */
    where: PaymentInfoWhereUniqueInput
    /**
     * In case the PaymentInfo found by the `where` argument doesn't exist, create a new PaymentInfo with this data.
     */
    create: XOR<PaymentInfoCreateInput, PaymentInfoUncheckedCreateInput>
    /**
     * In case the PaymentInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentInfoUpdateInput, PaymentInfoUncheckedUpdateInput>
  }

  /**
   * PaymentInfo delete
   */
  export type PaymentInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter which PaymentInfo to delete.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo deleteMany
   */
  export type PaymentInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentInfos to delete
     */
    where?: PaymentInfoWhereInput
    /**
     * Limit how many PaymentInfos to delete.
     */
    limit?: number
  }

  /**
   * PaymentInfo without action
   */
  export type PaymentInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    message: string | null
    sentAt: Date | null
    read: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    message: string | null
    sentAt: Date | null
    read: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    customerId: number
    message: number
    sentAt: number
    read: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    customerId?: true
    message?: true
    sentAt?: true
    read?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    customerId?: true
    message?: true
    sentAt?: true
    read?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    customerId?: true
    message?: true
    sentAt?: true
    read?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    customerId: number
    message: string
    sentAt: Date
    read: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    customerId?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "message" | "sentAt" | "read", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      message: string
      sentAt: Date
      read: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly customerId: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly read: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    locationId: 'locationId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    description: 'description',
    photoUrls: 'photoUrls',
    openTime: 'openTime',
    closeTime: 'closeTime',
    categories: 'categories',
    locationId: 'locationId'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    photoUrl: 'photoUrl',
    restaurantId: 'restaurantId'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    status: 'status',
    totalPrice: 'totalPrice',
    customerId: 'customerId',
    restaurantId: 'restaurantId',
    driverId: 'driverId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    orderId: 'orderId',
    menuItemId: 'menuItemId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    paymentDate: 'paymentDate',
    orderId: 'orderId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const FavoriteRestaurantScalarFieldEnum: {
    customerId: 'customerId',
    restaurantId: 'restaurantId'
  };

  export type FavoriteRestaurantScalarFieldEnum = (typeof FavoriteRestaurantScalarFieldEnum)[keyof typeof FavoriteRestaurantScalarFieldEnum]


  export const PaymentInfoScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    cardHolderName: 'cardHolderName',
    cardNumberHash: 'cardNumberHash',
    expiryMonth: 'expiryMonth',
    expiryYear: 'expiryYear',
    billingAddress: 'billingAddress'
  };

  export type PaymentInfoScalarFieldEnum = (typeof PaymentInfoScalarFieldEnum)[keyof typeof PaymentInfoScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    message: 'message',
    sentAt: 'sentAt',
    read: 'read'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    cognitoId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    locationId?: IntNullableFilter<"Customer"> | number | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    orders?: OrderListRelationFilter
    favoriteRests?: FavoriteRestaurantListRelationFilter
    paymentInfo?: XOR<PaymentInfoNullableScalarRelationFilter, PaymentInfoWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    locationId?: SortOrderInput | SortOrder
    location?: LocationOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    favoriteRests?: FavoriteRestaurantOrderByRelationAggregateInput
    paymentInfo?: PaymentInfoOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    email?: string
    locationId?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    orders?: OrderListRelationFilter
    favoriteRests?: FavoriteRestaurantListRelationFilter
    paymentInfo?: XOR<PaymentInfoNullableScalarRelationFilter, PaymentInfoWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "cognitoId" | "email" | "locationId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    locationId?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    cognitoId?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    locationId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    cognitoId?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    phoneNumber?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    photoUrls?: StringNullableListFilter<"Restaurant">
    openTime?: StringNullableFilter<"Restaurant"> | string | null
    closeTime?: StringNullableFilter<"Restaurant"> | string | null
    categories?: StringNullableListFilter<"Restaurant">
    locationId?: IntNullableFilter<"Restaurant"> | number | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    menuItems?: MenuItemListRelationFilter
    orders?: OrderListRelationFilter
    favoriteBy?: FavoriteRestaurantListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    photoUrls?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    categories?: SortOrder
    locationId?: SortOrderInput | SortOrder
    location?: LocationOrderByWithRelationInput
    menuItems?: MenuItemOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    favoriteBy?: FavoriteRestaurantOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    email?: string
    locationId?: number
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    phoneNumber?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    photoUrls?: StringNullableListFilter<"Restaurant">
    openTime?: StringNullableFilter<"Restaurant"> | string | null
    closeTime?: StringNullableFilter<"Restaurant"> | string | null
    categories?: StringNullableListFilter<"Restaurant">
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    menuItems?: MenuItemListRelationFilter
    orders?: OrderListRelationFilter
    favoriteBy?: FavoriteRestaurantListRelationFilter
  }, "id" | "cognitoId" | "email" | "locationId">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    photoUrls?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    categories?: SortOrder
    locationId?: SortOrderInput | SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurant"> | number
    cognitoId?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    email?: StringWithAggregatesFilter<"Restaurant"> | string
    phoneNumber?: StringWithAggregatesFilter<"Restaurant"> | string
    description?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    photoUrls?: StringNullableListFilter<"Restaurant">
    openTime?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    closeTime?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    categories?: StringNullableListFilter<"Restaurant">
    locationId?: IntNullableWithAggregatesFilter<"Restaurant"> | number | null
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    cognitoId?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    phoneNumber?: StringFilter<"Driver"> | string
    orders?: OrderListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    email?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    phoneNumber?: StringFilter<"Driver"> | string
    orders?: OrderListRelationFilter
  }, "id" | "cognitoId" | "email">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    cognitoId?: StringWithAggregatesFilter<"Driver"> | string
    name?: StringWithAggregatesFilter<"Driver"> | string
    email?: StringWithAggregatesFilter<"Driver"> | string
    phoneNumber?: StringWithAggregatesFilter<"Driver"> | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: FloatFilter<"MenuItem"> | number
    photoUrl?: StringNullableFilter<"MenuItem"> | string | null
    restaurantId?: IntFilter<"MenuItem"> | number
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: FloatFilter<"MenuItem"> | number
    photoUrl?: StringNullableFilter<"MenuItem"> | string | null
    restaurantId?: IntFilter<"MenuItem"> | number
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItem"> | number
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    price?: FloatWithAggregatesFilter<"MenuItem"> | number
    photoUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    restaurantId?: IntWithAggregatesFilter<"MenuItem"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    restaurantId?: IntFilter<"Order"> | number
    driverId?: IntNullableFilter<"Order"> | number | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    items?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    createdAt?: DateTimeFilter<"Order"> | Date | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    restaurantId?: IntFilter<"Order"> | number
    driverId?: IntNullableFilter<"Order"> | number | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    items?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    customerId?: IntWithAggregatesFilter<"Order"> | number
    restaurantId?: IntWithAggregatesFilter<"Order"> | number
    driverId?: IntNullableWithAggregatesFilter<"Order"> | number | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    menuItemId?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    order?: OrderOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    menuItemId?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number
    menuItemId?: IntWithAggregatesFilter<"OrderItem"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    orderId?: IntFilter<"Payment"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    orderId?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    orderId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    orderId?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
  }

  export type FavoriteRestaurantWhereInput = {
    AND?: FavoriteRestaurantWhereInput | FavoriteRestaurantWhereInput[]
    OR?: FavoriteRestaurantWhereInput[]
    NOT?: FavoriteRestaurantWhereInput | FavoriteRestaurantWhereInput[]
    customerId?: IntFilter<"FavoriteRestaurant"> | number
    restaurantId?: IntFilter<"FavoriteRestaurant"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type FavoriteRestaurantOrderByWithRelationInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type FavoriteRestaurantWhereUniqueInput = Prisma.AtLeast<{
    customerId_restaurantId?: FavoriteRestaurantCustomerIdRestaurantIdCompoundUniqueInput
    AND?: FavoriteRestaurantWhereInput | FavoriteRestaurantWhereInput[]
    OR?: FavoriteRestaurantWhereInput[]
    NOT?: FavoriteRestaurantWhereInput | FavoriteRestaurantWhereInput[]
    customerId?: IntFilter<"FavoriteRestaurant"> | number
    restaurantId?: IntFilter<"FavoriteRestaurant"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "customerId_restaurantId">

  export type FavoriteRestaurantOrderByWithAggregationInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
    _count?: FavoriteRestaurantCountOrderByAggregateInput
    _avg?: FavoriteRestaurantAvgOrderByAggregateInput
    _max?: FavoriteRestaurantMaxOrderByAggregateInput
    _min?: FavoriteRestaurantMinOrderByAggregateInput
    _sum?: FavoriteRestaurantSumOrderByAggregateInput
  }

  export type FavoriteRestaurantScalarWhereWithAggregatesInput = {
    AND?: FavoriteRestaurantScalarWhereWithAggregatesInput | FavoriteRestaurantScalarWhereWithAggregatesInput[]
    OR?: FavoriteRestaurantScalarWhereWithAggregatesInput[]
    NOT?: FavoriteRestaurantScalarWhereWithAggregatesInput | FavoriteRestaurantScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"FavoriteRestaurant"> | number
    restaurantId?: IntWithAggregatesFilter<"FavoriteRestaurant"> | number
  }

  export type PaymentInfoWhereInput = {
    AND?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    OR?: PaymentInfoWhereInput[]
    NOT?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    id?: IntFilter<"PaymentInfo"> | number
    customerId?: IntFilter<"PaymentInfo"> | number
    cardHolderName?: StringFilter<"PaymentInfo"> | string
    cardNumberHash?: StringFilter<"PaymentInfo"> | string
    expiryMonth?: IntFilter<"PaymentInfo"> | number
    expiryYear?: IntFilter<"PaymentInfo"> | number
    billingAddress?: StringFilter<"PaymentInfo"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type PaymentInfoOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    cardHolderName?: SortOrder
    cardNumberHash?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    billingAddress?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type PaymentInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    customerId?: number
    AND?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    OR?: PaymentInfoWhereInput[]
    NOT?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    cardHolderName?: StringFilter<"PaymentInfo"> | string
    cardNumberHash?: StringFilter<"PaymentInfo"> | string
    expiryMonth?: IntFilter<"PaymentInfo"> | number
    expiryYear?: IntFilter<"PaymentInfo"> | number
    billingAddress?: StringFilter<"PaymentInfo"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "customerId">

  export type PaymentInfoOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    cardHolderName?: SortOrder
    cardNumberHash?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    billingAddress?: SortOrder
    _count?: PaymentInfoCountOrderByAggregateInput
    _avg?: PaymentInfoAvgOrderByAggregateInput
    _max?: PaymentInfoMaxOrderByAggregateInput
    _min?: PaymentInfoMinOrderByAggregateInput
    _sum?: PaymentInfoSumOrderByAggregateInput
  }

  export type PaymentInfoScalarWhereWithAggregatesInput = {
    AND?: PaymentInfoScalarWhereWithAggregatesInput | PaymentInfoScalarWhereWithAggregatesInput[]
    OR?: PaymentInfoScalarWhereWithAggregatesInput[]
    NOT?: PaymentInfoScalarWhereWithAggregatesInput | PaymentInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentInfo"> | number
    customerId?: IntWithAggregatesFilter<"PaymentInfo"> | number
    cardHolderName?: StringWithAggregatesFilter<"PaymentInfo"> | string
    cardNumberHash?: StringWithAggregatesFilter<"PaymentInfo"> | string
    expiryMonth?: IntWithAggregatesFilter<"PaymentInfo"> | number
    expiryYear?: IntWithAggregatesFilter<"PaymentInfo"> | number
    billingAddress?: StringWithAggregatesFilter<"PaymentInfo"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    customerId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    customerId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    customerId?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type CustomerCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    location?: LocationCreateNestedOneWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutCustomerInput
    notifications?: NotificationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantUncheckedCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutCustomerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUncheckedUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId?: number | null
  }

  export type CustomerUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RestaurantCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    location?: LocationCreateNestedOneWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    locationId?: number | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    location?: LocationUpdateOneWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    locationId?: number | null
  }

  export type RestaurantUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DriverCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    orders?: OrderCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type DriverUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemCreateInput = {
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    restaurant: RestaurantCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    restaurantId: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: IntFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    restaurantId: number
  }

  export type MenuItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    driver?: DriverCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
    driverId?: number | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    driver?: DriverUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
    driverId?: number | null
  }

  export type OrderUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderItemCreateInput = {
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    quantity: number
    price: number
    orderId: number
    menuItemId: number
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: number
    quantity: number
    price: number
    orderId: number
    menuItemId: number
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    amount: number
    status: $Enums.PaymentStatus
    paymentDate: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amount: number
    status: $Enums.PaymentStatus
    paymentDate: Date | string
    orderId: number
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    amount: number
    status: $Enums.PaymentStatus
    paymentDate: Date | string
    orderId: number
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateInput = {
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    customer?: CustomerCreateNestedOneWithoutLocationInput
    restaurant?: RestaurantCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    customer?: CustomerUncheckedCreateNestedOneWithoutLocationInput
    restaurant?: RestaurantUncheckedCreateNestedOneWithoutLocationInput
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneWithoutLocationNestedInput
    restaurant?: RestaurantUpdateOneWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUncheckedUpdateOneWithoutLocationNestedInput
    restaurant?: RestaurantUncheckedUpdateOneWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteRestaurantCreateInput = {
    customer: CustomerCreateNestedOneWithoutFavoriteRestsInput
    restaurant: RestaurantCreateNestedOneWithoutFavoriteByInput
  }

  export type FavoriteRestaurantUncheckedCreateInput = {
    customerId: number
    restaurantId: number
  }

  export type FavoriteRestaurantUpdateInput = {
    customer?: CustomerUpdateOneRequiredWithoutFavoriteRestsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutFavoriteByNestedInput
  }

  export type FavoriteRestaurantUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRestaurantCreateManyInput = {
    customerId: number
    restaurantId: number
  }

  export type FavoriteRestaurantUpdateManyMutationInput = {

  }

  export type FavoriteRestaurantUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentInfoCreateInput = {
    cardHolderName: string
    cardNumberHash: string
    expiryMonth: number
    expiryYear: number
    billingAddress: string
    customer: CustomerCreateNestedOneWithoutPaymentInfoInput
  }

  export type PaymentInfoUncheckedCreateInput = {
    id?: number
    customerId: number
    cardHolderName: string
    cardNumberHash: string
    expiryMonth: number
    expiryYear: number
    billingAddress: string
  }

  export type PaymentInfoUpdateInput = {
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumberHash?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentInfoNestedInput
  }

  export type PaymentInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumberHash?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentInfoCreateManyInput = {
    id?: number
    customerId: number
    cardHolderName: string
    cardNumberHash: string
    expiryMonth: number
    expiryYear: number
    billingAddress: string
  }

  export type PaymentInfoUpdateManyMutationInput = {
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumberHash?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumberHash?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    message: string
    sentAt?: Date | string
    read?: boolean
    customer: CustomerCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    customerId: number
    message: string
    sentAt?: Date | string
    read?: boolean
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    customerId: number
    message: string
    sentAt?: Date | string
    read?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type FavoriteRestaurantListRelationFilter = {
    every?: FavoriteRestaurantWhereInput
    some?: FavoriteRestaurantWhereInput
    none?: FavoriteRestaurantWhereInput
  }

  export type PaymentInfoNullableScalarRelationFilter = {
    is?: PaymentInfoWhereInput | null
    isNot?: PaymentInfoWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteRestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    locationId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    locationId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    locationId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    categories?: SortOrder
    locationId?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    photoUrl?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    photoUrl?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    photoUrl?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    customerId?: SortOrder
    restaurantId?: SortOrder
    driverId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type RestaurantNullableScalarRelationFilter = {
    is?: RestaurantWhereInput | null
    isNot?: RestaurantWhereInput | null
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavoriteRestaurantCustomerIdRestaurantIdCompoundUniqueInput = {
    customerId: number
    restaurantId: number
  }

  export type FavoriteRestaurantCountOrderByAggregateInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
  }

  export type FavoriteRestaurantAvgOrderByAggregateInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
  }

  export type FavoriteRestaurantMaxOrderByAggregateInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
  }

  export type FavoriteRestaurantMinOrderByAggregateInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
  }

  export type FavoriteRestaurantSumOrderByAggregateInput = {
    customerId?: SortOrder
    restaurantId?: SortOrder
  }

  export type PaymentInfoCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    cardHolderName?: SortOrder
    cardNumberHash?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    billingAddress?: SortOrder
  }

  export type PaymentInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
  }

  export type PaymentInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    cardHolderName?: SortOrder
    cardNumberHash?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    billingAddress?: SortOrder
  }

  export type PaymentInfoMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    cardHolderName?: SortOrder
    cardNumberHash?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    billingAddress?: SortOrder
  }

  export type PaymentInfoSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationCreateNestedOneWithoutCustomerInput = {
    create?: XOR<LocationCreateWithoutCustomerInput, LocationUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: LocationCreateOrConnectWithoutCustomerInput
    connect?: LocationWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FavoriteRestaurantCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutCustomerInput, FavoriteRestaurantUncheckedCreateWithoutCustomerInput> | FavoriteRestaurantCreateWithoutCustomerInput[] | FavoriteRestaurantUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutCustomerInput | FavoriteRestaurantCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteRestaurantCreateManyCustomerInputEnvelope
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
  }

  export type PaymentInfoCreateNestedOneWithoutCustomerInput = {
    create?: XOR<PaymentInfoCreateWithoutCustomerInput, PaymentInfoUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutCustomerInput
    connect?: PaymentInfoWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<NotificationCreateWithoutCustomerInput, NotificationUncheckedCreateWithoutCustomerInput> | NotificationCreateWithoutCustomerInput[] | NotificationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCustomerInput | NotificationCreateOrConnectWithoutCustomerInput[]
    createMany?: NotificationCreateManyCustomerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FavoriteRestaurantUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutCustomerInput, FavoriteRestaurantUncheckedCreateWithoutCustomerInput> | FavoriteRestaurantCreateWithoutCustomerInput[] | FavoriteRestaurantUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutCustomerInput | FavoriteRestaurantCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteRestaurantCreateManyCustomerInputEnvelope
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
  }

  export type PaymentInfoUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<PaymentInfoCreateWithoutCustomerInput, PaymentInfoUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutCustomerInput
    connect?: PaymentInfoWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<NotificationCreateWithoutCustomerInput, NotificationUncheckedCreateWithoutCustomerInput> | NotificationCreateWithoutCustomerInput[] | NotificationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCustomerInput | NotificationCreateOrConnectWithoutCustomerInput[]
    createMany?: NotificationCreateManyCustomerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LocationUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<LocationCreateWithoutCustomerInput, LocationUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: LocationCreateOrConnectWithoutCustomerInput
    upsert?: LocationUpsertWithoutCustomerInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutCustomerInput, LocationUpdateWithoutCustomerInput>, LocationUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FavoriteRestaurantUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutCustomerInput, FavoriteRestaurantUncheckedCreateWithoutCustomerInput> | FavoriteRestaurantCreateWithoutCustomerInput[] | FavoriteRestaurantUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutCustomerInput | FavoriteRestaurantCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteRestaurantUpsertWithWhereUniqueWithoutCustomerInput | FavoriteRestaurantUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteRestaurantCreateManyCustomerInputEnvelope
    set?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    disconnect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    delete?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    update?: FavoriteRestaurantUpdateWithWhereUniqueWithoutCustomerInput | FavoriteRestaurantUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteRestaurantUpdateManyWithWhereWithoutCustomerInput | FavoriteRestaurantUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteRestaurantScalarWhereInput | FavoriteRestaurantScalarWhereInput[]
  }

  export type PaymentInfoUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<PaymentInfoCreateWithoutCustomerInput, PaymentInfoUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutCustomerInput
    upsert?: PaymentInfoUpsertWithoutCustomerInput
    disconnect?: PaymentInfoWhereInput | boolean
    delete?: PaymentInfoWhereInput | boolean
    connect?: PaymentInfoWhereUniqueInput
    update?: XOR<XOR<PaymentInfoUpdateToOneWithWhereWithoutCustomerInput, PaymentInfoUpdateWithoutCustomerInput>, PaymentInfoUncheckedUpdateWithoutCustomerInput>
  }

  export type NotificationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<NotificationCreateWithoutCustomerInput, NotificationUncheckedCreateWithoutCustomerInput> | NotificationCreateWithoutCustomerInput[] | NotificationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCustomerInput | NotificationCreateOrConnectWithoutCustomerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCustomerInput | NotificationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: NotificationCreateManyCustomerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCustomerInput | NotificationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCustomerInput | NotificationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FavoriteRestaurantUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutCustomerInput, FavoriteRestaurantUncheckedCreateWithoutCustomerInput> | FavoriteRestaurantCreateWithoutCustomerInput[] | FavoriteRestaurantUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutCustomerInput | FavoriteRestaurantCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteRestaurantUpsertWithWhereUniqueWithoutCustomerInput | FavoriteRestaurantUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteRestaurantCreateManyCustomerInputEnvelope
    set?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    disconnect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    delete?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    update?: FavoriteRestaurantUpdateWithWhereUniqueWithoutCustomerInput | FavoriteRestaurantUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteRestaurantUpdateManyWithWhereWithoutCustomerInput | FavoriteRestaurantUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteRestaurantScalarWhereInput | FavoriteRestaurantScalarWhereInput[]
  }

  export type PaymentInfoUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<PaymentInfoCreateWithoutCustomerInput, PaymentInfoUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutCustomerInput
    upsert?: PaymentInfoUpsertWithoutCustomerInput
    disconnect?: PaymentInfoWhereInput | boolean
    delete?: PaymentInfoWhereInput | boolean
    connect?: PaymentInfoWhereUniqueInput
    update?: XOR<XOR<PaymentInfoUpdateToOneWithWhereWithoutCustomerInput, PaymentInfoUpdateWithoutCustomerInput>, PaymentInfoUncheckedUpdateWithoutCustomerInput>
  }

  export type NotificationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<NotificationCreateWithoutCustomerInput, NotificationUncheckedCreateWithoutCustomerInput> | NotificationCreateWithoutCustomerInput[] | NotificationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCustomerInput | NotificationCreateOrConnectWithoutCustomerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCustomerInput | NotificationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: NotificationCreateManyCustomerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCustomerInput | NotificationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCustomerInput | NotificationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RestaurantCreatephotoUrlsInput = {
    set: string[]
  }

  export type RestaurantCreatecategoriesInput = {
    set: string[]
  }

  export type LocationCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<LocationCreateWithoutRestaurantInput, LocationUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRestaurantInput
    connect?: LocationWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FavoriteRestaurantCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutRestaurantInput, FavoriteRestaurantUncheckedCreateWithoutRestaurantInput> | FavoriteRestaurantCreateWithoutRestaurantInput[] | FavoriteRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutRestaurantInput | FavoriteRestaurantCreateOrConnectWithoutRestaurantInput[]
    createMany?: FavoriteRestaurantCreateManyRestaurantInputEnvelope
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FavoriteRestaurantUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutRestaurantInput, FavoriteRestaurantUncheckedCreateWithoutRestaurantInput> | FavoriteRestaurantCreateWithoutRestaurantInput[] | FavoriteRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutRestaurantInput | FavoriteRestaurantCreateOrConnectWithoutRestaurantInput[]
    createMany?: FavoriteRestaurantCreateManyRestaurantInputEnvelope
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RestaurantUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RestaurantUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LocationUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<LocationCreateWithoutRestaurantInput, LocationUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRestaurantInput
    upsert?: LocationUpsertWithoutRestaurantInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutRestaurantInput, LocationUpdateWithoutRestaurantInput>, LocationUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuItemUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutRestaurantInput | MenuItemUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutRestaurantInput | MenuItemUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutRestaurantInput | MenuItemUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FavoriteRestaurantUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutRestaurantInput, FavoriteRestaurantUncheckedCreateWithoutRestaurantInput> | FavoriteRestaurantCreateWithoutRestaurantInput[] | FavoriteRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutRestaurantInput | FavoriteRestaurantCreateOrConnectWithoutRestaurantInput[]
    upsert?: FavoriteRestaurantUpsertWithWhereUniqueWithoutRestaurantInput | FavoriteRestaurantUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FavoriteRestaurantCreateManyRestaurantInputEnvelope
    set?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    disconnect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    delete?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    update?: FavoriteRestaurantUpdateWithWhereUniqueWithoutRestaurantInput | FavoriteRestaurantUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FavoriteRestaurantUpdateManyWithWhereWithoutRestaurantInput | FavoriteRestaurantUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FavoriteRestaurantScalarWhereInput | FavoriteRestaurantScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutRestaurantInput | MenuItemUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutRestaurantInput | MenuItemUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutRestaurantInput | MenuItemUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FavoriteRestaurantCreateWithoutRestaurantInput, FavoriteRestaurantUncheckedCreateWithoutRestaurantInput> | FavoriteRestaurantCreateWithoutRestaurantInput[] | FavoriteRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FavoriteRestaurantCreateOrConnectWithoutRestaurantInput | FavoriteRestaurantCreateOrConnectWithoutRestaurantInput[]
    upsert?: FavoriteRestaurantUpsertWithWhereUniqueWithoutRestaurantInput | FavoriteRestaurantUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FavoriteRestaurantCreateManyRestaurantInputEnvelope
    set?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    disconnect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    delete?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    connect?: FavoriteRestaurantWhereUniqueInput | FavoriteRestaurantWhereUniqueInput[]
    update?: FavoriteRestaurantUpdateWithWhereUniqueWithoutRestaurantInput | FavoriteRestaurantUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FavoriteRestaurantUpdateManyWithWhereWithoutRestaurantInput | FavoriteRestaurantUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FavoriteRestaurantScalarWhereInput | FavoriteRestaurantScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutDriverInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutDriverNestedInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDriverInput | OrderUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDriverInput | OrderUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDriverInput | OrderUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDriverInput | OrderUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDriverInput | OrderUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDriverInput | OrderUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuItemsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuItemsInput
    upsert?: RestaurantUpsertWithoutMenuItemsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutMenuItemsInput, RestaurantUpdateWithoutMenuItemsInput>, RestaurantUncheckedUpdateWithoutMenuItemsInput>
  }

  export type OrderItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutOrdersInput = {
    create?: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DriverCreateOrConnectWithoutOrdersInput
    connect?: DriverWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    upsert?: RestaurantUpsertWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOrdersInput, RestaurantUpdateWithoutOrdersInput>, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type DriverUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DriverCreateOrConnectWithoutOrdersInput
    upsert?: DriverUpsertWithoutOrdersInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutOrdersInput, DriverUpdateWithoutOrdersInput>, DriverUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuItemUpsertWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, MenuItemUpdateWithoutOrderItemsInput>, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type CustomerCreateNestedOneWithoutLocationInput = {
    create?: XOR<CustomerCreateWithoutLocationInput, CustomerUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLocationInput
    connect?: CustomerWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutLocationInput = {
    create?: XOR<RestaurantCreateWithoutLocationInput, RestaurantUncheckedCreateWithoutLocationInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutLocationInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutLocationInput = {
    create?: XOR<CustomerCreateWithoutLocationInput, CustomerUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLocationInput
    connect?: CustomerWhereUniqueInput
  }

  export type RestaurantUncheckedCreateNestedOneWithoutLocationInput = {
    create?: XOR<RestaurantCreateWithoutLocationInput, RestaurantUncheckedCreateWithoutLocationInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutLocationInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutLocationNestedInput = {
    create?: XOR<CustomerCreateWithoutLocationInput, CustomerUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLocationInput
    upsert?: CustomerUpsertWithoutLocationInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLocationInput, CustomerUpdateWithoutLocationInput>, CustomerUncheckedUpdateWithoutLocationInput>
  }

  export type RestaurantUpdateOneWithoutLocationNestedInput = {
    create?: XOR<RestaurantCreateWithoutLocationInput, RestaurantUncheckedCreateWithoutLocationInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutLocationInput
    upsert?: RestaurantUpsertWithoutLocationInput
    disconnect?: RestaurantWhereInput | boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutLocationInput, RestaurantUpdateWithoutLocationInput>, RestaurantUncheckedUpdateWithoutLocationInput>
  }

  export type CustomerUncheckedUpdateOneWithoutLocationNestedInput = {
    create?: XOR<CustomerCreateWithoutLocationInput, CustomerUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLocationInput
    upsert?: CustomerUpsertWithoutLocationInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLocationInput, CustomerUpdateWithoutLocationInput>, CustomerUncheckedUpdateWithoutLocationInput>
  }

  export type RestaurantUncheckedUpdateOneWithoutLocationNestedInput = {
    create?: XOR<RestaurantCreateWithoutLocationInput, RestaurantUncheckedCreateWithoutLocationInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutLocationInput
    upsert?: RestaurantUpsertWithoutLocationInput
    disconnect?: RestaurantWhereInput | boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutLocationInput, RestaurantUpdateWithoutLocationInput>, RestaurantUncheckedUpdateWithoutLocationInput>
  }

  export type CustomerCreateNestedOneWithoutFavoriteRestsInput = {
    create?: XOR<CustomerCreateWithoutFavoriteRestsInput, CustomerUncheckedCreateWithoutFavoriteRestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoriteRestsInput
    connect?: CustomerWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutFavoriteByInput = {
    create?: XOR<RestaurantCreateWithoutFavoriteByInput, RestaurantUncheckedCreateWithoutFavoriteByInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFavoriteByInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutFavoriteRestsNestedInput = {
    create?: XOR<CustomerCreateWithoutFavoriteRestsInput, CustomerUncheckedCreateWithoutFavoriteRestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoriteRestsInput
    upsert?: CustomerUpsertWithoutFavoriteRestsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutFavoriteRestsInput, CustomerUpdateWithoutFavoriteRestsInput>, CustomerUncheckedUpdateWithoutFavoriteRestsInput>
  }

  export type RestaurantUpdateOneRequiredWithoutFavoriteByNestedInput = {
    create?: XOR<RestaurantCreateWithoutFavoriteByInput, RestaurantUncheckedCreateWithoutFavoriteByInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFavoriteByInput
    upsert?: RestaurantUpsertWithoutFavoriteByInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutFavoriteByInput, RestaurantUpdateWithoutFavoriteByInput>, RestaurantUncheckedUpdateWithoutFavoriteByInput>
  }

  export type CustomerCreateNestedOneWithoutPaymentInfoInput = {
    create?: XOR<CustomerCreateWithoutPaymentInfoInput, CustomerUncheckedCreateWithoutPaymentInfoInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentInfoInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutPaymentInfoNestedInput = {
    create?: XOR<CustomerCreateWithoutPaymentInfoInput, CustomerUncheckedCreateWithoutPaymentInfoInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentInfoInput
    upsert?: CustomerUpsertWithoutPaymentInfoInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaymentInfoInput, CustomerUpdateWithoutPaymentInfoInput>, CustomerUncheckedUpdateWithoutPaymentInfoInput>
  }

  export type CustomerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CustomerCreateWithoutNotificationsInput, CustomerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutNotificationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<CustomerCreateWithoutNotificationsInput, CustomerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutNotificationsInput
    upsert?: CustomerUpsertWithoutNotificationsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutNotificationsInput, CustomerUpdateWithoutNotificationsInput>, CustomerUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationCreateWithoutCustomerInput = {
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    restaurant?: RestaurantCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutCustomerInput = {
    id?: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    restaurant?: RestaurantUncheckedCreateNestedOneWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutCustomerInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCustomerInput, LocationUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateWithoutCustomerInput = {
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    driver?: DriverCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    restaurantId: number
    driverId?: number | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteRestaurantCreateWithoutCustomerInput = {
    restaurant: RestaurantCreateNestedOneWithoutFavoriteByInput
  }

  export type FavoriteRestaurantUncheckedCreateWithoutCustomerInput = {
    restaurantId: number
  }

  export type FavoriteRestaurantCreateOrConnectWithoutCustomerInput = {
    where: FavoriteRestaurantWhereUniqueInput
    create: XOR<FavoriteRestaurantCreateWithoutCustomerInput, FavoriteRestaurantUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteRestaurantCreateManyCustomerInputEnvelope = {
    data: FavoriteRestaurantCreateManyCustomerInput | FavoriteRestaurantCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentInfoCreateWithoutCustomerInput = {
    cardHolderName: string
    cardNumberHash: string
    expiryMonth: number
    expiryYear: number
    billingAddress: string
  }

  export type PaymentInfoUncheckedCreateWithoutCustomerInput = {
    id?: number
    cardHolderName: string
    cardNumberHash: string
    expiryMonth: number
    expiryYear: number
    billingAddress: string
  }

  export type PaymentInfoCreateOrConnectWithoutCustomerInput = {
    where: PaymentInfoWhereUniqueInput
    create: XOR<PaymentInfoCreateWithoutCustomerInput, PaymentInfoUncheckedCreateWithoutCustomerInput>
  }

  export type NotificationCreateWithoutCustomerInput = {
    message: string
    sentAt?: Date | string
    read?: boolean
  }

  export type NotificationUncheckedCreateWithoutCustomerInput = {
    id?: number
    message: string
    sentAt?: Date | string
    read?: boolean
  }

  export type NotificationCreateOrConnectWithoutCustomerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCustomerInput, NotificationUncheckedCreateWithoutCustomerInput>
  }

  export type NotificationCreateManyCustomerInputEnvelope = {
    data: NotificationCreateManyCustomerInput | NotificationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutCustomerInput = {
    update: XOR<LocationUpdateWithoutCustomerInput, LocationUncheckedUpdateWithoutCustomerInput>
    create: XOR<LocationCreateWithoutCustomerInput, LocationUncheckedCreateWithoutCustomerInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutCustomerInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutCustomerInput, LocationUncheckedUpdateWithoutCustomerInput>
  }

  export type LocationUpdateWithoutCustomerInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    restaurant?: RestaurantUpdateOneWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    restaurant?: RestaurantUncheckedUpdateOneWithoutLocationNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    restaurantId?: IntFilter<"Order"> | number
    driverId?: IntNullableFilter<"Order"> | number | null
  }

  export type FavoriteRestaurantUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteRestaurantWhereUniqueInput
    update: XOR<FavoriteRestaurantUpdateWithoutCustomerInput, FavoriteRestaurantUncheckedUpdateWithoutCustomerInput>
    create: XOR<FavoriteRestaurantCreateWithoutCustomerInput, FavoriteRestaurantUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteRestaurantUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteRestaurantWhereUniqueInput
    data: XOR<FavoriteRestaurantUpdateWithoutCustomerInput, FavoriteRestaurantUncheckedUpdateWithoutCustomerInput>
  }

  export type FavoriteRestaurantUpdateManyWithWhereWithoutCustomerInput = {
    where: FavoriteRestaurantScalarWhereInput
    data: XOR<FavoriteRestaurantUpdateManyMutationInput, FavoriteRestaurantUncheckedUpdateManyWithoutCustomerInput>
  }

  export type FavoriteRestaurantScalarWhereInput = {
    AND?: FavoriteRestaurantScalarWhereInput | FavoriteRestaurantScalarWhereInput[]
    OR?: FavoriteRestaurantScalarWhereInput[]
    NOT?: FavoriteRestaurantScalarWhereInput | FavoriteRestaurantScalarWhereInput[]
    customerId?: IntFilter<"FavoriteRestaurant"> | number
    restaurantId?: IntFilter<"FavoriteRestaurant"> | number
  }

  export type PaymentInfoUpsertWithoutCustomerInput = {
    update: XOR<PaymentInfoUpdateWithoutCustomerInput, PaymentInfoUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentInfoCreateWithoutCustomerInput, PaymentInfoUncheckedCreateWithoutCustomerInput>
    where?: PaymentInfoWhereInput
  }

  export type PaymentInfoUpdateToOneWithWhereWithoutCustomerInput = {
    where?: PaymentInfoWhereInput
    data: XOR<PaymentInfoUpdateWithoutCustomerInput, PaymentInfoUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentInfoUpdateWithoutCustomerInput = {
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumberHash?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentInfoUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumberHash?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCustomerInput, NotificationUncheckedUpdateWithoutCustomerInput>
    create: XOR<NotificationCreateWithoutCustomerInput, NotificationUncheckedCreateWithoutCustomerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCustomerInput, NotificationUncheckedUpdateWithoutCustomerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCustomerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    customerId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
  }

  export type LocationCreateWithoutRestaurantInput = {
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    customer?: CustomerCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutRestaurantInput = {
    id?: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    customer?: CustomerUncheckedCreateNestedOneWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutRestaurantInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutRestaurantInput, LocationUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuItemCreateWithoutRestaurantInput = {
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutRestaurantInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutRestaurantInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuItemCreateManyRestaurantInputEnvelope = {
    data: MenuItemCreateManyRestaurantInput | MenuItemCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    driver?: DriverCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    driverId?: number | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteRestaurantCreateWithoutRestaurantInput = {
    customer: CustomerCreateNestedOneWithoutFavoriteRestsInput
  }

  export type FavoriteRestaurantUncheckedCreateWithoutRestaurantInput = {
    customerId: number
  }

  export type FavoriteRestaurantCreateOrConnectWithoutRestaurantInput = {
    where: FavoriteRestaurantWhereUniqueInput
    create: XOR<FavoriteRestaurantCreateWithoutRestaurantInput, FavoriteRestaurantUncheckedCreateWithoutRestaurantInput>
  }

  export type FavoriteRestaurantCreateManyRestaurantInputEnvelope = {
    data: FavoriteRestaurantCreateManyRestaurantInput | FavoriteRestaurantCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutRestaurantInput = {
    update: XOR<LocationUpdateWithoutRestaurantInput, LocationUncheckedUpdateWithoutRestaurantInput>
    create: XOR<LocationCreateWithoutRestaurantInput, LocationUncheckedCreateWithoutRestaurantInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutRestaurantInput, LocationUncheckedUpdateWithoutRestaurantInput>
  }

  export type LocationUpdateWithoutRestaurantInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUncheckedUpdateOneWithoutLocationNestedInput
  }

  export type MenuItemUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutRestaurantInput, MenuItemUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutRestaurantInput, MenuItemUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: FloatFilter<"MenuItem"> | number
    photoUrl?: StringNullableFilter<"MenuItem"> | string | null
    restaurantId?: IntFilter<"MenuItem"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type FavoriteRestaurantUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: FavoriteRestaurantWhereUniqueInput
    update: XOR<FavoriteRestaurantUpdateWithoutRestaurantInput, FavoriteRestaurantUncheckedUpdateWithoutRestaurantInput>
    create: XOR<FavoriteRestaurantCreateWithoutRestaurantInput, FavoriteRestaurantUncheckedCreateWithoutRestaurantInput>
  }

  export type FavoriteRestaurantUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: FavoriteRestaurantWhereUniqueInput
    data: XOR<FavoriteRestaurantUpdateWithoutRestaurantInput, FavoriteRestaurantUncheckedUpdateWithoutRestaurantInput>
  }

  export type FavoriteRestaurantUpdateManyWithWhereWithoutRestaurantInput = {
    where: FavoriteRestaurantScalarWhereInput
    data: XOR<FavoriteRestaurantUpdateManyMutationInput, FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OrderCreateWithoutDriverInput = {
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDriverInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDriverInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput>
  }

  export type OrderCreateManyDriverInputEnvelope = {
    data: OrderCreateManyDriverInput | OrderCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutDriverInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDriverInput, OrderUncheckedUpdateWithoutDriverInput>
    create: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDriverInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDriverInput, OrderUncheckedUpdateWithoutDriverInput>
  }

  export type OrderUpdateManyWithWhereWithoutDriverInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDriverInput>
  }

  export type RestaurantCreateWithoutMenuItemsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    location?: LocationCreateNestedOneWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutMenuItemsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    locationId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutMenuItemsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
  }

  export type OrderItemCreateWithoutMenuItemInput = {
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutMenuItemInput = {
    id?: number
    quantity: number
    price: number
    orderId: number
  }

  export type OrderItemCreateOrConnectWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemCreateManyMenuItemInputEnvelope = {
    data: OrderItemCreateManyMenuItemInput | OrderItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutMenuItemsInput = {
    update: XOR<RestaurantUpdateWithoutMenuItemsInput, RestaurantUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutMenuItemsInput, RestaurantUncheckedUpdateWithoutMenuItemsInput>
  }

  export type RestaurantUpdateWithoutMenuItemsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    location?: LocationUpdateOneWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutMenuItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    menuItemId?: IntFilter<"OrderItem"> | number
  }

  export type CustomerCreateWithoutOrdersInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    location?: LocationCreateNestedOneWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutCustomerInput
    notifications?: NotificationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId?: number | null
    favoriteRests?: FavoriteRestaurantUncheckedCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutCustomerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type RestaurantCreateWithoutOrdersInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    location?: LocationCreateNestedOneWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOrdersInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    locationId?: number | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
  }

  export type DriverCreateWithoutOrdersInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type DriverUncheckedCreateWithoutOrdersInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type DriverCreateOrConnectWithoutOrdersInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: number
    price: number
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    price: number
    menuItemId: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    amount: number
    status: $Enums.PaymentStatus
    paymentDate: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    amount: number
    status: $Enums.PaymentStatus
    paymentDate: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteRests?: FavoriteRestaurantUncheckedUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RestaurantUpsertWithoutOrdersInput = {
    update: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateWithoutOrdersInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    location?: LocationUpdateOneWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type DriverUpsertWithoutOrdersInput = {
    update: XOR<DriverUpdateWithoutOrdersInput, DriverUncheckedUpdateWithoutOrdersInput>
    create: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutOrdersInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutOrdersInput, DriverUncheckedUpdateWithoutOrdersInput>
  }

  export type DriverUpdateWithoutOrdersInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type DriverUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutItemsInput = {
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    driver?: DriverCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
    driverId?: number | null
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type MenuItemCreateWithoutOrderItemsInput = {
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    restaurant: RestaurantCreateNestedOneWithoutMenuItemsInput
  }

  export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
    restaurantId: number
  }

  export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    driver?: DriverUpdateOneWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type MenuItemUpsertWithoutOrderItemsInput = {
    update: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateWithoutPaymentInput = {
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    driver?: DriverCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
    driverId?: number | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    driver?: DriverUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type CustomerCreateWithoutLocationInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutCustomerInput
    notifications?: NotificationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutLocationInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantUncheckedCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutCustomerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutLocationInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLocationInput, CustomerUncheckedCreateWithoutLocationInput>
  }

  export type RestaurantCreateWithoutLocationInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutLocationInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    favoriteBy?: FavoriteRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutLocationInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutLocationInput, RestaurantUncheckedCreateWithoutLocationInput>
  }

  export type CustomerUpsertWithoutLocationInput = {
    update: XOR<CustomerUpdateWithoutLocationInput, CustomerUncheckedUpdateWithoutLocationInput>
    create: XOR<CustomerCreateWithoutLocationInput, CustomerUncheckedCreateWithoutLocationInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLocationInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLocationInput, CustomerUncheckedUpdateWithoutLocationInput>
  }

  export type CustomerUpdateWithoutLocationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUncheckedUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RestaurantUpsertWithoutLocationInput = {
    update: XOR<RestaurantUpdateWithoutLocationInput, RestaurantUncheckedUpdateWithoutLocationInput>
    create: XOR<RestaurantCreateWithoutLocationInput, RestaurantUncheckedCreateWithoutLocationInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutLocationInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutLocationInput, RestaurantUncheckedUpdateWithoutLocationInput>
  }

  export type RestaurantUpdateWithoutLocationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    favoriteBy?: FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type CustomerCreateWithoutFavoriteRestsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    location?: LocationCreateNestedOneWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutCustomerInput
    notifications?: NotificationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFavoriteRestsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutCustomerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFavoriteRestsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFavoriteRestsInput, CustomerUncheckedCreateWithoutFavoriteRestsInput>
  }

  export type RestaurantCreateWithoutFavoriteByInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    location?: LocationCreateNestedOneWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutFavoriteByInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    description?: string | null
    photoUrls?: RestaurantCreatephotoUrlsInput | string[]
    openTime?: string | null
    closeTime?: string | null
    categories?: RestaurantCreatecategoriesInput | string[]
    locationId?: number | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutFavoriteByInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutFavoriteByInput, RestaurantUncheckedCreateWithoutFavoriteByInput>
  }

  export type CustomerUpsertWithoutFavoriteRestsInput = {
    update: XOR<CustomerUpdateWithoutFavoriteRestsInput, CustomerUncheckedUpdateWithoutFavoriteRestsInput>
    create: XOR<CustomerCreateWithoutFavoriteRestsInput, CustomerUncheckedCreateWithoutFavoriteRestsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutFavoriteRestsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutFavoriteRestsInput, CustomerUncheckedUpdateWithoutFavoriteRestsInput>
  }

  export type CustomerUpdateWithoutFavoriteRestsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFavoriteRestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutCustomerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RestaurantUpsertWithoutFavoriteByInput = {
    update: XOR<RestaurantUpdateWithoutFavoriteByInput, RestaurantUncheckedUpdateWithoutFavoriteByInput>
    create: XOR<RestaurantCreateWithoutFavoriteByInput, RestaurantUncheckedCreateWithoutFavoriteByInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutFavoriteByInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutFavoriteByInput, RestaurantUncheckedUpdateWithoutFavoriteByInput>
  }

  export type RestaurantUpdateWithoutFavoriteByInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    location?: LocationUpdateOneWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutFavoriteByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: RestaurantUpdatephotoUrlsInput | string[]
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: RestaurantUpdatecategoriesInput | string[]
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type CustomerCreateWithoutPaymentInfoInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    location?: LocationCreateNestedOneWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantCreateNestedManyWithoutCustomerInput
    notifications?: NotificationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaymentInfoInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantUncheckedCreateNestedManyWithoutCustomerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaymentInfoInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaymentInfoInput, CustomerUncheckedCreateWithoutPaymentInfoInput>
  }

  export type CustomerUpsertWithoutPaymentInfoInput = {
    update: XOR<CustomerUpdateWithoutPaymentInfoInput, CustomerUncheckedUpdateWithoutPaymentInfoInput>
    create: XOR<CustomerCreateWithoutPaymentInfoInput, CustomerUncheckedCreateWithoutPaymentInfoInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaymentInfoInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaymentInfoInput, CustomerUncheckedUpdateWithoutPaymentInfoInput>
  }

  export type CustomerUpdateWithoutPaymentInfoInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUpdateManyWithoutCustomerNestedInput
    notifications?: NotificationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaymentInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUncheckedUpdateManyWithoutCustomerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutNotificationsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    location?: LocationCreateNestedOneWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutNotificationsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    locationId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    favoriteRests?: FavoriteRestaurantUncheckedCreateNestedManyWithoutCustomerInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutNotificationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutNotificationsInput, CustomerUncheckedCreateWithoutNotificationsInput>
  }

  export type CustomerUpsertWithoutNotificationsInput = {
    update: XOR<CustomerUpdateWithoutNotificationsInput, CustomerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CustomerCreateWithoutNotificationsInput, CustomerUncheckedCreateWithoutNotificationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutNotificationsInput, CustomerUncheckedUpdateWithoutNotificationsInput>
  }

  export type CustomerUpdateWithoutNotificationsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    favoriteRests?: FavoriteRestaurantUncheckedUpdateManyWithoutCustomerNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    restaurantId: number
    driverId?: number | null
  }

  export type FavoriteRestaurantCreateManyCustomerInput = {
    restaurantId: number
  }

  export type NotificationCreateManyCustomerInput = {
    id?: number
    message: string
    sentAt?: Date | string
    read?: boolean
  }

  export type OrderUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    driver?: DriverUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteRestaurantUpdateWithoutCustomerInput = {
    restaurant?: RestaurantUpdateOneRequiredWithoutFavoriteByNestedInput
  }

  export type FavoriteRestaurantUncheckedUpdateWithoutCustomerInput = {
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRestaurantUncheckedUpdateManyWithoutCustomerInput = {
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutCustomerInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuItemCreateManyRestaurantInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    photoUrl?: string | null
  }

  export type OrderCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    driverId?: number | null
  }

  export type FavoriteRestaurantCreateManyRestaurantInput = {
    customerId: number
  }

  export type MenuItemUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    driver?: DriverUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteRestaurantUpdateWithoutRestaurantInput = {
    customer?: CustomerUpdateOneRequiredWithoutFavoriteRestsNestedInput
  }

  export type FavoriteRestaurantUncheckedUpdateWithoutRestaurantInput = {
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRestaurantUncheckedUpdateManyWithoutRestaurantInput = {
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyDriverInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.OrderStatus
    totalPrice: number
    customerId: number
    restaurantId: number
  }

  export type OrderUpdateWithoutDriverInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyMenuItemInput = {
    id?: number
    quantity: number
    price: number
    orderId: number
  }

  export type OrderItemUpdateWithoutMenuItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    quantity: number
    price: number
    menuItemId: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    menuItemId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}