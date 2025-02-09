import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { delay, map, of, pipe, retry, scan } from "rxjs";

@Component({
  selector: "app-retry",
  standalone: true,
  imports: [
    MatTabsModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./retry.component.html",
  styleUrl: "./retry.component.scss",
})
export class RetryComponent implements OnInit {
  status: string = "No data";
  loading: boolean = false;
  person: any;
  private http = inject(HttpClient);
  ngOnInit(): void {
    const numbers$ = of(1, 2, 3);
    numbers$
      .pipe(
        // Get the sum of the numbers coming in.
        scan((total, n) => total + n),
        // Get the average by dividing the sum by the total number
        // received so far (which is 1 more than the zero-based index).
        map((sum, index) => sum / (index + 1))
      )
      .subscribe(console.log);
  }

  fetchDetails() {
    this.loading = true;
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(retry(2), delay(2000))
      .subscribe({
        next: (res) => {
          this.status = "Data fetched";
          this.person = res;
          this.loading = false;
        },
        error: (err) => {
          this.status = "Problem in data Fetching";
          this.loading = false;
        },
      });
  }
}
