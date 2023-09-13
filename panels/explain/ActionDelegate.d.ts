import * as UI from '../../ui/legacy/legacy.js';
export declare class ActionDelegate implements UI.ActionRegistration.ActionDelegate {
    static instance(opts?: {
        forceNew: boolean | null;
    }): ActionDelegate;
    handleAction(_context: UI.Context.Context, actionId: string): boolean;
}
