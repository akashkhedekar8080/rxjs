import { Routes } from "@angular/router";

export const OBSERVER_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./observable.component").then((c) => c.ObservableComponent),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./components/list/list.component").then(
            (c) => c.ListComponent
          ),
      },
      {
        path: "fromevent",
        loadComponent: () =>
          import("./components/fromevent/fromevent.component").then(
            (c) => c.FromeventComponent
          ),
      },
      {
        path: "interval",
        loadComponent: () =>
          import("./components/interval/interval.component").then(
            (c) => c.IntervalComponent
          ),
      },
      {
        path: "timer",
        loadComponent: () =>
          import("./components/timer/timer.component").then(
            (c) => c.TimerComponent
          ),
      },
      {
        path: "of-from",
        loadComponent: () =>
          import("./components/of-from/of-from.component").then(
            (c) => c.OfFromComponent
          ),
      },
      {
        path: "to-array",
        loadComponent: () =>
          import("./components/to-array/to-array.component").then(
            (c) => c.ToArrayComponent
          ),
      },
      {
        path: "custom",
        loadComponent: () =>
          import("./components/custom/custom.component").then(
            (c) => c.CustomComponent
          ),
      },
      {
        path: "map",
        loadComponent: () =>
          import("./components/map/map.component").then((c) => c.MapComponent),
      },
      {
        path: "pluck",
        loadComponent: () =>
          import("./components/pluck/pluck.component").then(
            (c) => c.PluckComponent
          ),
      },
      {
        path: "filter",
        loadComponent: () =>
          import("./components/filter/filter.component").then(
            (c) => c.FilterComponent
          ),
      },
      {
        path: "tap",
        loadComponent: () =>
          import("./components/tap/tap.component").then((c) => c.TapComponent),
      },
      {
        path: "take",
        loadComponent: () =>
          import("./components/take/take.component").then(
            (c) => c.TakeComponent
          ),
      },
      {
        path: "retry",
        loadComponent: () =>
          import("./components/retry/retry.component").then(
            (c) => c.RetryComponent
          ),
      },
      {
        path: "debouncetime-distinctuntilchanged",
        loadComponent: () =>
          import(
            "./components/debouncetime-distinctuntilchanged/debouncetime-distinctuntilchanged.component"
          ).then((c) => c.DebouncetimeDistinctuntilchangedComponent),
      },
      {
        path: "subject-behaviorsubject",
        loadComponent: () =>
          import(
            "./components/subject-behaviorsubject/subject-behaviorsubject.component"
          ).then((c) => c.SubjectBehaviorsubjectComponent),
      },
      {
        path: "replaysubject",
        loadComponent: () =>
          import("./components/replaysubject/replaysubject.component").then(
            (c) => c.ReplaysubjectComponent
          ),
      },
      {
        path: "asyncsubject",
        loadComponent: () =>
          import("./components/asyncsubject/asyncsubject.component").then(
            (c) => c.AsyncsubjectComponent
          ),
      },
      {
        path: "concat",
        loadComponent: () =>
          import("./components/concat/concat.component").then(
            (c) => c.ConcatComponent
          ),
      },
      {
        path: "merge",
        loadComponent: () =>
          import("./components/merge/merge.component").then(
            (c) => c.MergeComponent
          ),
      },
      {
        path: "mergemap",
        loadComponent: () =>
          import("./components/mergemap/mergemap.component").then(
            (c) => c.MergemapComponent
          ),
      },
      {
        path: "concatmap",
        loadComponent: () =>
          import("./components/concatmap/concatmap.component").then(
            (c) => c.ConcatmapComponent
          ),
      },
      {
        path: "switchmap",
        loadComponent: () =>
          import("./components/switchmap/switchmap.component").then(
            (c) => c.SwitchmapComponent
          ),
      },
      {
        path: "exhaustmap",
        loadComponent: () =>
          import("./components/exhaustmap/exhaustmap.component").then(
            (c) => c.ExhaustmapComponent
          ),
      },
      {
        path: "sharereplay",
        loadComponent: () =>
          import("./components/sharereplay/sharereplay.component").then(
            (c) => c.SharereplayComponent
          ),
      },
      {
        path: "combinelatest-withlatestfrom",
        loadComponent: () =>
          import(
            "./components/combinelatest-withlatestfrom/combinelatest-withlatestfrom.component"
          ).then((c) => c.CombinelatestWithlatestfromComponent),
      },
      {
        path: "zip-forkjoin",
        loadComponent: () =>
          import("./components/zip-forkjoin/zip-forkjoin.component").then(
            (c) => c.ZipForkjoinComponent
          ),
      },
      {
        path: "catcherror-throwerror",
        loadComponent: () =>
          import(
            "./components/catcherror-throwerror/catcherror-throwerror.component"
          ).then((c) => c.CatcherrorThrowerrorComponent),
      },
    ],
  },
];
