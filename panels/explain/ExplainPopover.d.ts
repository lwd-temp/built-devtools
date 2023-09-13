export declare class ExplainPopover {
    #private;
    constructor(source: Source);
    show(): Promise<void>;
    hide(): void;
}
interface Source {
    getAnchor(): AnchorBox;
    getPrompt(): Promise<string>;
}
export {};
