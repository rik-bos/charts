// Type definitions for deepmerge 1.3
// Project: https://github.com/KyleAMathews/deepmerge
// Definitions by: marvinscharle <https://github.com/marvinscharle>
//                 syy1125 <https://github.com/syy1125>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
// tslint:disable no-namespace

declare function deepmerge<T>(x: Partial<T>, y: Partial<T>, options?: deepmerge.Options): T;
declare function deepmerge<T1, T2>(x: T1, y: T2, options?: deepmerge.Options): T1 & T2;

declare namespace deepmerge {
    interface Options {
        clone?: boolean;
        arrayMerge?(destination: any[], source: any[], options?: Options): any[];
    }

    function all<T>(objects: Array<Partial<T>>, options?: Options): T;
}

declare module "deepmerge" {
    export default deepmerge;
}
