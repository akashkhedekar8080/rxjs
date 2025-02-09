import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-promise",
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    MatGridListModule,
  ],
  templateUrl: "./promise.component.html",
  styleUrl: "./promise.component.scss",
})
export class PromiseComponent implements OnInit {
  promise!: string;

  ngOnInit(): void {}
  dellAvailable() {
    return setTimeout(() => {
      return true;
    }, 3000);
  }
  hpAvailable() {
    return setTimeout(() => {
      return false;
    }, 3000);
  }
  myFunction(): void {
    let bupMyLaptop: Promise<string> = new Promise((resolve, reject) => {
      // resolve("Promise is resolved");
      // reject("Promise is reject");
      if (this.dellAvailable()) {
        resolve("Dell is Purchased");
      } else if (this.hpAvailable()) {
        resolve("Hp is available");
      } else {
        reject("Not available Hp/Dell");
      }
    });
    bupMyLaptop
      .then((res: string) => {
        this.promise = res;
        console.log("then code => ", res);
      })
      .catch((error: string) => {
        this.promise = error;
        console.log("error", error);
      });
    console.log(this.promise);
  }
}
