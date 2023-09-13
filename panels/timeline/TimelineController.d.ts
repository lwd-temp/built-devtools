import * as SDK from '../../core/sdk/sdk.js';
import * as TimelineModel from '../../models/timeline_model/timeline_model.js';
import * as TraceEngine from '../../models/trace/trace.js';
import type * as Protocol from '../../generated/protocol.js';
import { PerformanceModel } from './PerformanceModel.js';
export declare class TimelineController implements SDK.TargetManager.SDKModelObserver<SDK.CPUProfilerModel.CPUProfilerModel>, TraceEngine.TracingManager.TracingManagerClient {
    readonly primaryPageTarget: SDK.Target.Target;
    private tracingManager;
    private performanceModel;
    private readonly client;
    private readonly tracingModel;
    private tracingCompleteCallback?;
    private profiling?;
    private cpuProfiles?;
    constructor(target: SDK.Target.Target, client: Client);
    dispose(): Promise<void>;
    startRecording(options: RecordingOptions): Promise<Protocol.ProtocolResponseWithError>;
    stopRecording(): Promise<PerformanceModel>;
    getPerformanceModel(): PerformanceModel;
    private waitForTracingToStop;
    modelAdded(cpuProfilerModel: SDK.CPUProfilerModel.CPUProfilerModel): void;
    modelRemoved(_cpuProfilerModel: SDK.CPUProfilerModel.CPUProfilerModel): void;
    private addCpuProfile;
    private stopProfilingOnAllModels;
    private startRecordingWithCategories;
    traceEventsCollected(events: TraceEngine.TracingManager.EventPayload[]): void;
    tracingComplete(): void;
    private allSourcesFinished;
    private finalizeTrace;
    private injectCpuProfileEvent;
    private buildTargetToProcessIdMap;
    private injectCpuProfileEvents;
    tracingBufferUsage(usage: number): void;
    eventsRetrievalProgress(progress: number): void;
}
export interface Client {
    recordingProgress(usage: number): void;
    loadingStarted(): void;
    processingStarted(): void;
    loadingProgress(progress?: number): void;
    loadingComplete(tracingModel: TraceEngine.Legacy.TracingModel | null, exclusiveFilter: TimelineModel.TimelineModelFilter.TimelineModelFilter | null, isCpuProfile: boolean): Promise<void>;
    loadingCompleteForTest(): void;
}
export interface RecordingOptions {
    enableJSSampling?: boolean;
    capturePictures?: boolean;
    captureFilmStrip?: boolean;
}
