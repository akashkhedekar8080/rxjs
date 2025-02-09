import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { concatAll, concatMap, delay, from, map, Observable, of } from "rxjs";

@Component({
  selector: "app-concatmap",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./concatmap.component.html",
  styleUrl: "./concatmap.component.scss",
})
export class ConcatmapComponent implements AfterViewInit {
  @ViewChild("list1") list1!: ElementRef;
  @ViewChild("list2") list2!: ElementRef;
  @ViewChild("list3") list3!: ElementRef;

  ngAfterViewInit(): void {
    let Source = from(["Tech", "Comedy", "News"]);
    Source.pipe(map((res: string) => this.getData(res))).subscribe((res) => {
      this.list1.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    Source.pipe(
      map((res: string) => this.getData(res)),
      concatAll()
    ).subscribe((res) => {
      this.list2.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    Source.pipe(concatMap((res: string) => this.getData(res))).subscribe(
      (res) => {
        this.list3.nativeElement.innerHTML += `<li>${res}</li>`;
      }
    );
  }
  getData(data: string): Observable<string> {
    return of(data + "Video uploaded").pipe(delay(1000));
  }
}
