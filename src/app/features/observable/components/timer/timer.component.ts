import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Subscription, timer } from "rxjs";

@Component({
  selector: "app-timer",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./timer.component.html",
  styleUrl: "./timer.component.scss",
})
export class TimerComponent implements OnInit {
  timerResponse!: string;
  videoSubscription!: Subscription;
  @ViewChild("myUl") myUl!: ElementRef;
  ngOnInit(): void {
    const brodcast = timer(5000, 1000);
    this.videoSubscription = brodcast.subscribe((res) => {
      console.log(res);
      this.timerResponse = "video " + res;
      this.myUl.nativeElement.innerHTML += `<li>${this.timerResponse}</li>`;
      if (res >= 5) this.videoSubscription.unsubscribe();
    });
  }
}
