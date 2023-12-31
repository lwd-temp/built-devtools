import { SearchMatch } from './ContentProvider.js';
export declare const Utils: {
    readonly _keyValueFilterRegex: RegExp;
    readonly _regexFilterRegex: RegExp;
    readonly _textFilterRegex: RegExp;
    readonly _SpaceCharRegex: RegExp;
    isSpaceChar: (char: string) => boolean;
    lineIndent: (line: string) => string;
    splitStringByRegexes(text: string, regexes: RegExp[]): {
        value: string;
        position: number;
        regexIndex: number;
        captureGroups: Array<string | undefined>;
    }[];
};
export declare class FilterParser {
    private readonly keys;
    constructor(keys: string[]);
    static cloneFilter(filter: ParsedFilter): ParsedFilter;
    parse(query: string): ParsedFilter[];
}
export declare class BalancedJSONTokenizer {
    private readonly callback;
    private index;
    private balance;
    private buffer;
    private findMultiple;
    private closingDoubleQuoteRegex;
    private lastBalancedIndex?;
    constructor(callback: (arg0: string) => void, findMultiple?: boolean);
    write(chunk: string): boolean;
    private reportBalanced;
    remainder(): string;
}
/**
 * Heuristic to check whether a given text was likely minified. Intended to
 * be used for HTML, CSS, and JavaScript inputs.
 *
 * A text is considered to be the result of minification if the average
 * line length for the whole text is 80 characters or more.
 *
 * @param text The input text to check.
 * @returns
 */
export declare const isMinified: (text: string) => boolean;
/**
 * @returns One {@link SearchMatch} per match. Multiple matches on the same line each
 * result in their own `SearchMatchExact` instance.
 */
export declare const performSearchInContent: (content: string, query: string, caseSensitive: boolean, isRegex: boolean) => SearchMatch[];
/**
 * Similar to {@link performSearchInContent} but doesn't search in a whole text but rather
 * finds the exact matches on a prelminiary search result (i.e. lines with known matches).
 * @param matches is deliberatedly typed as an object literal so we can pass the
 *                CDP search result type.
 */
export declare const performSearchInSearchMatches: (matches: {
    lineNumber: number;
    lineContent: string;
}[], query: string, caseSensitive: boolean, isRegex: boolean) => SearchMatch[];
export interface ParsedFilter {
    key?: string;
    text?: string | null;
    regex?: RegExp;
    negative: boolean;
}
