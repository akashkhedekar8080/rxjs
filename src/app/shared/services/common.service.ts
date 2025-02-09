import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  exclusive: Subject<boolean> = new Subject<boolean>();
  name: BehaviorSubject<string> = new BehaviorSubject("Akash");
  video: ReplaySubject<string> = new ReplaySubject(5);
  asyncVideo: AsyncSubject<string> = new AsyncSubject();

  constructor() {}
}
