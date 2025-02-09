import { Component, ViewChild } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import {
  catchError,
  from,
  interval,
  of,
  take,
  throwError,
  toArray,
} from "rxjs";

@Component({
  selector: "app-to-array",
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: "./to-array.component.html",
  styleUrl: "./to-array.component.scss",
})
export class ToArrayComponent {
  obsres!: Array<number>;
  obsres2!: string;
  obsres3!: Array<string>;
  error1: string | null = null;
  error2: string | null = null;
  error3: string | null = null;

  Users = [
    { name: "Akash", skill: "Angular" },
    { name: "Omkar", skill: "React" },
    { name: "Ashutosh", skill: "Django" },
    { name: "Prasad", skill: "Automation" },
    { name: "Swaraj", skill: "Full stack" },
  ];

  ngOnInit(): void {
    // Ex 1
    const obs1 = interval(1000);
    obs1
      .pipe(
        take(5),
        toArray(),
        catchError((error) => {
          this.error1 = error.message;
          return throwError(() => error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.obsres = res;
        },
        error: (err) => console.error("Interval error:", err),
      });

    // Ex 2
    const obs2 = from(this.Users);
    obs2
      .pipe(
        take(5),
        toArray(),
        catchError((error) => {
          this.error2 = error.message;
          return throwError(() => error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log("obsres2", res);
          this.obsres2 = JSON.stringify(res);
        },
        error: (err) => console.error("Users error:", err),
      });

    // Ex 3
    const obs3 = of("Anup", "Akash", "Omkar");
    obs3
      .pipe(
        take(5),
        toArray(),
        catchError((error) => {
          this.error3 = error.message;
          return throwError(() => error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.obsres3 = res;
        },
        error: (err) => console.error("Names error:", err),
      });
  }
}
