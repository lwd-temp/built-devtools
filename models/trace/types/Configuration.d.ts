export type Configuration = Readonly<{
    settings: {};
    experiments: {
        /**
         * Include V8 RCS in the timeline
         */
        timelineV8RuntimeCallStats: boolean;
        /**
         * Show all events: disable the default filtering which hides and excludes some events.
         */
        timelineShowAllEvents: boolean;
    };
    processing: {
        /**
         * How long the processor should pause between event chunks.
         */
        pauseDuration: number;
        /**
         * How many events should be processed before yielding to the main thread for a pause.
         */
        eventsPerChunk: number;
    };
}>;
export declare const DEFAULT: Configuration;
