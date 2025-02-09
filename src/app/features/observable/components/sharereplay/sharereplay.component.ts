import { AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { filter, map, Observable, shareReplay } from "rxjs";

@Component({
  selector: "app-sharereplay",
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatButtonModule],
  templateUrl: "./sharereplay.component.html",
  styleUrl: "./sharereplay.component.scss",
})
export class SharereplayComponent implements OnInit {
  url = "https://dummyjson.com/products";
  http = inject(HttpClient);
  allProducts!: Observable<any>;
  beauty!: Observable<any>;
  grocery!: Observable<any>;

  ngOnInit(): void {
    this.allProducts = this.http.get(this.url).pipe(
      map((res: any) => res.products),
      shareReplay()
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
}
