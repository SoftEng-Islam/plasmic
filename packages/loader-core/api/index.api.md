## API Report File for "@plasmicapp/loader-core"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Api } from '@plasmicapp/loader-fetcher';
import { AssetModule } from '@plasmicapp/loader-fetcher';
import { CodeModule } from '@plasmicapp/loader-fetcher';
import { ComponentMeta } from '@plasmicapp/loader-fetcher';
import { ExperimentSlice } from '@plasmicapp/loader-fetcher';
import { FontMeta } from '@plasmicapp/loader-fetcher';
import { GlobalGroupMeta } from '@plasmicapp/loader-fetcher';
import { LoaderBundleCache } from '@plasmicapp/loader-fetcher';
import { LoaderBundleOutput } from '@plasmicapp/loader-fetcher';
import { LoaderHtmlOutput } from '@plasmicapp/loader-fetcher';
import { PageMeta } from '@plasmicapp/loader-fetcher';
import { PageMetadata } from '@plasmicapp/loader-fetcher';
import { PlasmicModulesFetcher } from '@plasmicapp/loader-fetcher';
import { ProjectMeta } from '@plasmicapp/loader-fetcher';
import { SegmentSlice } from '@plasmicapp/loader-fetcher';
import { Split } from '@plasmicapp/loader-fetcher';

export { Api }

export { AssetModule }

export { CodeModule }

export { ComponentMeta }

export { ExperimentSlice }

export { FontMeta }

// @public
export function getBundleSubset(bundle: LoaderBundleOutput, names: string[], opts?: {
    target?: 'browser' | 'server';
}): LoaderBundleOutput;

export { GlobalGroupMeta }

export { LoaderBundleCache }

export { LoaderBundleOutput }

export { LoaderHtmlOutput }

export { PageMeta }

export { PageMetadata }

export { PlasmicModulesFetcher }

// @public (undocumented)
export class PlasmicTracker {
    constructor(opts: TrackerOptions);
    // (undocumented)
    trackConversion(value?: number): void;
    // (undocumented)
    trackFetch(): void;
    // (undocumented)
    trackRender(opts?: TrackRenderOptions): void;
}

export { ProjectMeta }

// @public (undocumented)
export class Registry {
    constructor();
    // (undocumented)
    clear(): void;
    // (undocumented)
    getRegisteredModule(name: string): any;
    // (undocumented)
    hasModule(name: string, opts?: {
        forceOriginal?: boolean;
    }): boolean;
    // (undocumented)
    isEmpty(): boolean;
    // (undocumented)
    load(name: string, opts?: {
        forceOriginal?: boolean;
    }): any;
    // (undocumented)
    register(name: string, module: any): void;
    // (undocumented)
    updateModules(bundle: LoaderBundleOutput): void;
}

export { SegmentSlice }

export { Split }

// @public (undocumented)
export interface TrackRenderOptions {
    // (undocumented)
    renderCtx?: TrackerRenderProperties;
    // (undocumented)
    variation?: Record<string, string>;
}

// (No @packageDocumentation comment for this package)

```
