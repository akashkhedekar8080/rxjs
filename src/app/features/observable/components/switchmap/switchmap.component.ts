import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import {
  concatMap,
  delay,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchAll,
  switchMap,
} from "rxjs";

@Component({
  selector: "app-switchmap",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./switchmap.component.html",
  styleUrl: "./switchmap.component.scss",
})
export class SwitchmapComponent {
  @ViewChild("list1") list1!: ElementRef;
  @ViewChild("list2") list2!: ElementRef;
  @ViewChild("list3") list3!: ElementRef;

  ngAfterViewInit(): void {
    let Source = from(["Tech", "Comedy", "News"]);
    Source.pipe(mergeMap((res: string) => this.getData(res))).subscribe(
      (res) => {
        this.list1.nativeElement.innerHTML += `<li>${res}</li>`;
      }
    );
    Source.pipe(
      concatMap((res: string) => this.getData(res))
      // switchAll()
    ).subscribe((res) => {
      this.list2.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    Source.pipe(switchMap((res: string) => this.getData(res))).subscribe(
      (res) => {
        this.list3.nativeElement.innerHTML += `<li>${res}</li>`;
      }
    );
  }
  getData(data: string): Observable<string> {
    return of(data + "Video uploaded").pipe(delay(1000));
  }
}
