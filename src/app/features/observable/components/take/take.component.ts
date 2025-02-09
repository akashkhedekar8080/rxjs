import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatTabsModule } from "@angular/material/tabs";
import {
  from,
  fromEvent,
  interval,
  Subscription,
  take,
  takeLast,
  takeUntil,
  timer,
} from "rxjs";

@Component({
  selector: "app-take",
  standalone: true,
  imports: [MatTabsModule, MatChipsModule],
  templateUrl: "./take.component.html",
  styleUrl: "./take.component.scss",
})
export class TakeComponent {
  msg1!: string[];
  msg2: string[] = [];
  Names: string[] = [
    "akash",
    "omkar",
    "vinu",
    "swaraj",
    "prasad",
    "red",
    "green",
    "violet",
    "pink",
    "blue",
  ];
  videoSubscription1!: Subscription;
  videoSubscription2!: Subscription;
  videoSubscription3!: Subscription;
  @ViewChild("obsUl1") obsUl1!: ElementRef;
  @ViewChild("obsUl2") obsUl2!: ElementRef;
  @ViewChild("obsUl3") obsUl3!: ElementRef;

  ngAfterViewInit(): void {
    const obs3 = from(this.Names);
    this.videoSubscription1 = obs3.pipe(take(5)).subscribe((res) => {
      console.log(res);
      this.obsUl1.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    this.videoSubscription2 = obs3.pipe(takeLast(5)).subscribe((res) => {
      console.log(res);
      this.obsUl2.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    const condition = fromEvent(document, "click");
    const condition2 = timer(5000);

    this.videoSubscription3 = interval(1000)
      .pipe(takeUntil(condition2))
      .subscribe((res) => {
        console.log(res);
        setTimeout(() => {
          this.obsUl3.nativeElement.innerHTML += `<li>${res}</li>`;
        }, 2000);
      });
  }
  ngOnDestroy(): void {
    this.videoSubscription1.unsubscribe();
    this.videoSubscription2.unsubscribe();
    this.videoSubscription3.unsubscribe();
  }
}
