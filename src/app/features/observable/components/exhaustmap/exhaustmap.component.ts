import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { exhaustMap, fromEvent, interval, map, take, tap } from "rxjs";

@Component({
  selector: "app-exhaustmap",
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatProgressSpinner],
  templateUrl: "./exhaustmap.component.html",
  styleUrl: "./exhaustmap.component.scss",
})
export class ExhaustmapComponent implements AfterViewInit {
  @ViewChild("btn") btn!: ElementRef;
  fetching!: boolean;
  reqResponse!: number;
  counter: number = 0;

  ngAfterViewInit(): void {
    const fakeApiCall$ = interval(2000).pipe(
      take(1),
      tap(() => {
        this.counter++;
      })
    );

    fromEvent(this.btn.nativeElement, "click")
      .pipe(
        tap(() => {
          this.fetching = true;
        }),
        exhaustMap(() => fakeApiCall$)
      )
      .subscribe((res) => {
        console.log("Api res", res);
        this.reqResponse = this.counter;
        this.fetching = false;
      });
  }
}
