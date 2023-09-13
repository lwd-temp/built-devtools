import * as Types from '../types/types.js';
import * as CPUProfile from '../../cpu_profile/cpu_profile.js';
declare const profilesInProcess: Map<Types.TraceEvents.ProcessID, Map<Types.TraceEvents.ThreadID, ProfileData>>;
export declare function buildProfileCalls(): void;
export declare function reset(): void;
export declare function initialize(): void;
export declare function handleEvent(event: Types.TraceEvents.TraceEventData): void;
export declare function finalize(): Promise<void>;
export declare function data(): SamplesHandlerData;
export interface SamplesHandlerData {
    profilesInProcess: typeof profilesInProcess;
}
export type ProfileData = {
    rawProfile: CPUProfile.CPUProfileDataModel.ExtendedProfile;
    parsedProfile: CPUProfile.CPUProfileDataModel.CPUProfileDataModel;
    profileCalls: Types.TraceEvents.TraceEventSyntheticProfileCall[];
};
export {};
