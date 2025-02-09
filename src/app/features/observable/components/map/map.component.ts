import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { from, interval, map, Subscription } from "rxjs";

@Component({
  selector: "app-map",
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.scss",
})
export class MapComponent implements AfterViewInit {
  msg1!: string;
  msg2!: number;
  msg3: string = "";
  @ViewChild("obsUl") obsUl!: ElementRef;
  videoSubscription1!: Subscription;
  videoSubscription2!: Subscription;
  videoSubscription3!: Subscription;

  ngAfterViewInit(): void {
    const brodcast = interval(1000);
    this.videoSubscription1 = brodcast
      .pipe(map((res) => "video " + res))
      .subscribe((res) => {
        console.log(res);
        this.msg1 = res;
      });
    this.videoSubscription2 = brodcast
      .pipe(map((res) => res * 10))
      .subscribe((res) => {
        console.log(res);
        this.msg2 = res;
      });
    setTimeout(() => {
      this.videoSubscription1.unsubscribe();
      this.videoSubscription2.unsubscribe();
    }, 5000);
    const obs3 = from([
      { name: "Akash", skill: "Angular" },
      { name: "Omkar", skill: "React" },
      { name: "Ashutosh", skill: "Django" },
      { name: "Prasad", skill: "Automation" },
      { name: "Swaraj", skill: "Full stack" },
    ]);
    this.videoSubscription3 = obs3
      .pipe(map((res) => res.name))
      .subscribe((res) => {
        console.log(res);
        this.obsUl.nativeElement.innerHTML += `<li>${res}</li>`;
      });
  }
}
