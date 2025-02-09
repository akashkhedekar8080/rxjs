import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterLinkActive } from "@angular/router";
@Component({
  selector: "app-list",
  standalone: true,
  imports: [MatCardModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
})
export class ListComponent {
  items = [
    { label: "From Event", link: "fromevent" },
    { label: "Interval", link: "interval" },
    { label: "Timer", link: "timer" },
    { label: "OF and From", link: "of-from" },
    { label: "toArray", link: "to-array" },
    { label: "Custom Observable", link: "custom" },
    { label: "Map", link: "map" },
    { label: "Pluck", link: "pluck" },
    { label: "Filter", link: "filter" },
    { label: "Tap", link: "tap" },
    { label: "Take", link: "take" },
    { label: "Retry", link: "Retry, Scan and Delay" },
    {
      label: "DebounceTime and DistinctUntilChanged",
      link: "debouncetime-distinctuntilchanged",
    },
    {
      label: "Subject and BehaviourSubject",
      link: "subject-behaviorsubject",
    },
    {
      label: "ReplaySubject",
      link: "replaysubject",
    },
    {
      label: "AsyncSubject",
      link: "asyncsubject",
    },
    { label: "Concat", link: "concat" },
    { label: "Merge", link: "merge" },
    { label: "Mergemap", link: "mergemap" },
    { label: "Concatmap", link: "concatmap" },
    { label: "Switchmap", link: "switchmap" },
    { label: "Exhaustmap", link: "exhaustmap" },
    { label: "ShareReplay", link: "sharereplay" },
    {
      label: "CombineLatest & WithLatestFrom",
      link: "combinelatest-withlatestfrom",
    },
    { label: "Zip & ForkJoin", link: "zip-forkjoin" },
    { label: "CatchError & ThrowError", link: "catcherror-throwerror" },
  ];
}
