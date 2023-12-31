declare class ScriptInjector {
    #private;
    append(statement: string): void;
    pop(statement: string): void;
    inject(inject: (script: string) => void, force?: boolean): void;
}
/**
 * @internal
 */
export declare const scriptInjector: ScriptInjector;
export {};
//# sourceMappingURL=ScriptInjector.d.ts.map