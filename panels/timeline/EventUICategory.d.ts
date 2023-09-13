import * as TraceEngine from '../../models/trace/trace.js';
export declare const EventCategories: readonly ["Loading", "Experience", "Scripting", "Rendering", "Painting", "GPU", "Async", "Other", "Idle"];
export type EventCategory = typeof EventCategories[number];
export declare class EventCategoryStyle {
    visible: boolean;
    childColor: string;
    color: string;
    private titleCallback;
    private hiddenInternal?;
    constructor(titleCallback: () => string, visible: boolean, childColor: string, color: string);
    get title(): string;
    get hidden(): boolean;
    set hidden(hidden: boolean);
}
export type CategoryPalette = {
    [c in EventCategory]: EventCategoryStyle;
};
export declare const DEFAULT_CATEGORY_STYLES_PALETTE: CategoryPalette;
/**
 * This map defines the styles for events shown in the panel. This
 * includes its color (which on the event's category, the label it's
 * displayed with and flag to know wether it's visible in the flamechart
 * or not).
 * The thread appenders use this map to determine if an event should be
 * shown in the flame chart. If an event is not in the map, then it
 * won't be shown, but it also won't be shown if it's marked as "hidden"
 * in its styles.
 *
 * The map is also used in other places, like the event's details view.
 */
export declare const EventStyles: Map<TraceEngine.Types.TraceEvents.KnownEventName, {
    categoryStyle: EventCategoryStyle;
    label: () => string;
    hidden?: boolean;
}>;
