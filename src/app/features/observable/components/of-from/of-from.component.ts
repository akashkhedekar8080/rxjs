import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatGridListModule } from "@angular/material/grid-list";
import { from, of, Subscription } from "rxjs";
@Component({
  selector: "app-of-from",
  standalone: true,
  imports: [MatChipsModule, MatGridListModule],
  templateUrl: "./of-from.component.html",
  styleUrl: "./of-from.component.scss",
})
export class OfFromComponent implements OnInit, AfterViewInit {
  obsres: Record<string, string> = {};
  videoSubscription!: Subscription;
  @ViewChild("obs1Ul") obs1Ul!: ElementRef;
  @ViewChild("obs3Ul") obs3Ul!: ElementRef;
  @ViewChild("obs4Ul") obs4Ul!: ElementRef;
  @ViewChild("obs5Ul") obs5Ul!: ElementRef;

  ngOnInit(): void {
    const obs2 = of({ a: "Anup", b: "Akash", c: "Vinu" });
    obs2.subscribe((res) => {
      this.obsres = res;
      console.log("res", res);
    });
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved");
      }, 2000);
    });
  }
  ngAfterViewInit(): void {
    const obs1 = of("Akash", "Omkar", "Vinu");
    obs1.subscribe((res: string) => {
      console.log(res);
      this.obs1Ul.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    const obs3 = from(["Akash", "Omkar", "Vinu"]);
    obs3.subscribe((res) => {
      console.log(res);
      this.obs3Ul.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved");
      }, 2000);
    });
    const obs4 = from(promise);
    obs4.subscribe((res) => {
      console.log("res", res);
      this.obs4Ul.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    const obs5 = from("Welcome to Home!");
    obs5.subscribe((res) => {
      console.log("res", res);
      this.obs5Ul.nativeElement.innerHTML += `<li>${res}</li>`;
    });
  }
}
