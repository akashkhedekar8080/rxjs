import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatTabsModule } from "@angular/material/tabs";
import { interval, map, Subscription, tap } from "rxjs";

@Component({
  selector: "app-tap",
  standalone: true,
  imports: [MatTabsModule, MatChipsModule, CommonModule],
  templateUrl: "./tap.component.html",
  styleUrl: "./tap.component.scss",
})
export class TapComponent implements AfterViewInit, OnDestroy {
  msg1!: string[];
  msg2: string[] = [];
  color!: string;
  Names: string[] = ["akash", "omkar", "vinu", "swaraj", "prasad"];
  Colors: string[] = ["red", "green", "violet", "pink", "blue"];
  videoSubscription1!: Subscription;
  videoSubscription2!: Subscription;
  @ViewChild("obsUl1") obsUl1!: ElementRef;
  @ViewChild("obsUl2") obsUl2!: ElementRef;

  ngAfterViewInit(): void {
    const obs3 = interval(1500);
    this.videoSubscription1 = obs3
      .pipe(
        tap((res) => {
          console.log("before", res);
          if (res == 5) {
            this.videoSubscription1.unsubscribe();
          }
        }),
        map((res: number) => this.Names[res]),
        tap((res) => {
          console.log("after", res);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.obsUl1.nativeElement.innerHTML += `<li>${res}</li>`;
      });
    this.videoSubscription2 = obs3
      .pipe(
        tap((res) => {
          console.log("before", res);
          if (res == 5) {
            this.videoSubscription2.unsubscribe();
          }
        }),
        map((res: number) => this.Colors[res]),
        tap((res) => {
          this.color = res;
          console.log("after", res);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.obsUl2.nativeElement.innerHTML += `<li>${res}</li>`;
      });
  }
  ngOnDestroy(): void {
    this.videoSubscription1.unsubscribe();
    this.videoSubscription2.unsubscribe();
  }
}
