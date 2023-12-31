import * as UI from '../../ui/legacy/legacy.js';
export declare class PropertiesWidget extends UI.ThrottledWidget.ThrottledWidget {
    private node;
    private readonly showAllPropertiesSetting;
    private filterRegex;
    private readonly noMatchesElement;
    private readonly treeOutline;
    private readonly expandController;
    private lastRequestedNode?;
    constructor(throttlingTimeout?: number);
    static instance(opts?: {
        forceNew: boolean;
        throttlingTimeout: number;
    }): PropertiesWidget;
    private filterProperties;
    private filterList;
    private setNode;
    doUpdate(): Promise<void>;
    private onNodeChange;
    wasShown(): void;
}
