import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { concat, interval, map, take } from "rxjs";

@Component({
  selector: "app-concat",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./concat.component.html",
  styleUrl: "./concat.component.scss",
})
export class ConcatComponent implements OnInit {
  @ViewChild("list") list!: ElementRef;
  ngOnInit(): void {
    let sourceTech = interval(1000).pipe(
      map((v) => "Tech " + (v + 1)),
      take(5)
    );
    let sourceComedy = interval(1000).pipe(
      map((v) => "Comedy " + (v + 1)),
      take(3)
    );
    let sourceNews = interval(1000).pipe(
      map((v) => "News " + (v + 1)),
      take(4)
    );
    let finalObs = concat(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe({
      next: (res) => {
        this.list.nativeElement.innerHTML += `<li>${res}</li>`;
      },
    });
  }
}
