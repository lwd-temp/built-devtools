import type * as Console from '../../console/console.js';
export declare class ConsoleMessageSource {
    #private;
    constructor(consoleMessage: Console.ConsoleViewMessage.ConsoleViewMessage);
    getAnchor(): AnchorBox;
    getPrompt(): Promise<string>;
}
