import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { interval, map, merge, take } from "rxjs";

@Component({
  selector: "app-merge",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./merge.component.html",
  styleUrl: "./merge.component.scss",
})
export class MergeComponent implements OnInit {
  @ViewChild("list") list!: ElementRef;
  ngOnInit(): void {
    let sourceTech = interval(3000).pipe(
      map((v) => "Tech " + (v + 1)),
      take(5)
    );
    let sourceComedy = interval(6000).pipe(
      map((v) => "Comedy " + (v + 1)),
      take(3)
    );
    let sourceNews = interval(3500).pipe(
      map((v) => "News " + (v + 1)),
      take(4)
    );
    let finalObs = merge(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe({
      next: (res) => {
        this.list.nativeElement.innerHTML += `<li>${res}</li>`;
      },
    });
  }
}
