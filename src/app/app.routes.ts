import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "Observable",
    pathMatch: "full",
  },
  {
    path: "Promise",
    loadComponent: () =>
      import("../app/features/promise/promise.component").then(
        (c) => c.PromiseComponent
      ),
  },
  {
    path: "Observable",
    loadComponent: () =>
      import("../app/features/observable/observable.component").then(
        (c) => c.ObservableComponent
      ),
    loadChildren: () =>
      import("../app/features/observable/observable.routes").then(
        (c) => c.OBSERVER_ROUTES
      ),
  },
];
