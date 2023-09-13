import * as Types from '../types/types.js';
export interface WarningsData {
    perEvent: Map<Types.TraceEvents.TraceEventData, Warning[]>;
    perWarning: Map<Warning, Types.TraceEvents.TraceEventData[]>;
}
export type Warning = 'LONG_TASK' | 'IDLE_CALLBACK_OVER_TIME' | 'FORCED_LAYOUT' | 'FORCED_STYLE';
export declare const FORCED_LAYOUT_AND_STYLES_THRESHOLD: Types.Timing.MicroSeconds;
export declare const LONG_MAIN_THREAD_TASK_THRESHOLD: Types.Timing.MicroSeconds;
export declare function reset(): void;
export declare function handleEvent(event: Types.TraceEvents.TraceEventData): void;
export declare function data(): WarningsData;
