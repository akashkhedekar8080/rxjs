import { AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, map, Observable, shareReplay, throwError } from "rxjs";

@Component({
  selector: "app-catcherror-throwerror",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AsyncPipe],
  templateUrl: "./catcherror-throwerror.component.html",
  styleUrl: "./catcherror-throwerror.component.scss",
})
export class CatcherrorThrowerrorComponent {
  url = "https://dummyjson.com/products";
  http = inject(HttpClient);
  private _snackBar = inject(MatSnackBar);
  allProducts!: Observable<any>;
  beauty!: Observable<any>;
  grocery!: Observable<any>;

  ngOnInit(): void {
    this.allProducts = this.http.get(this.url).pipe(
      map((res: any) => res.products),
      shareReplay(),
      catchError((err) => this.handleError(err))
    );
    this.beauty = this.allProducts?.pipe(
      map((res) => res.filter((beauty: any) => beauty.category == "beauty"))
    );
    this.grocery = this.allProducts.pipe(
      map((res) =>
        res.filter((grocery: any) => grocery.category == "groceries")
      )
    );
  }
  handleError(err: any): Observable<never> {
    let erroMsg = "Unkown Error";
    if (err?.error?.error) {
      erroMsg = err.error.error;
    }
    console.log("err", err);
    // Show error message in Snackbar
    this._snackBar.open(erroMsg, "Close");
    return throwError(() => new Error(erroMsg));
  }
}
