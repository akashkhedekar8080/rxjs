import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-interval",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./interval.component.html",
  styleUrl: "./interval.component.scss",
})
export class IntervalComponent implements OnInit {
  intervalResponse!: string;
  videoSubscription!: Subscription;
  @ViewChild("myUl") myUl!: ElementRef;
  ngOnInit(): void {
    const brodcast = interval(1000);
    this.videoSubscription = brodcast.subscribe((res) => {
      console.log(res);
      this.intervalResponse = "video " + res;
      this.myUl.nativeElement.innerHTML += `<li>${this.intervalResponse}</li>`;
      if (res >= 5) this.videoSubscription.unsubscribe();
    });
  }
}
