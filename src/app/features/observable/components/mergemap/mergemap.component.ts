import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { from, map, mergeAll, mergeMap, Observable, of } from "rxjs";

@Component({
  selector: "app-mergemap",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./mergemap.component.html",
  styleUrl: "./mergemap.component.scss",
})
export class MergemapComponent implements AfterViewInit {
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
      mergeAll()
    ).subscribe((res) => {
      this.list2.nativeElement.innerHTML += `<li>${res}</li>`;
    });
    Source.pipe(mergeMap((res: string) => this.getData(res))).subscribe(
      (res) => {
        this.list3.nativeElement.innerHTML += `<li>${res}</li>`;
      }
    );
  }
  getData(data: string): Observable<string> {
    return of(data + "Video uploaded");
  }
}
