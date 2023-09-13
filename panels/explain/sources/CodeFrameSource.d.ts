import type * as Sources from '../../sources/sources.js';
export declare class CodeFrameSource {
    #private;
    constructor(frame: Sources.UISourceCodeFrame.UISourceCodeFrame);
    getAnchor(): AnchorBox;
    getPrompt(): Promise<string>;
}
