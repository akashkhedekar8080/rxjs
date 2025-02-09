import { Component, ElementRef, ViewChild } from "@angular/core";
import { forkJoin, fromEvent, map, take, zip } from "rxjs";

@Component({
  selector: "app-zip-forkjoin",
  standalone: true,
  imports: [],
  templateUrl: "./zip-forkjoin.component.html",
  styleUrl: "./zip-forkjoin.component.scss",
})
export class ZipForkjoinComponent {
  names = ["Anup", "Akash", "Vinu", "Mayur", "Omkar", "Swaraj", "Kishor"];
  colors = ["pink", "yellow", "red", "purple", "blue", "orange", "brown"];
  @ViewChild("name") nameSelect!: ElementRef;
  @ViewChild("color") colorSelect!: ElementRef;
  @ViewChild("combine") combine!: ElementRef;
  @ViewChild("latest") latest!: ElementRef;
  ngAfterViewInit(): void {
    const nameObservable = fromEvent(
      this.nameSelect.nativeElement,
      "change"
    ).pipe(
      map((event: any) => event.target.value),
      take(4)
    );
    const colorObservable = fromEvent(
      this.colorSelect.nativeElement,
      "change"
    ).pipe(
      map((event: any) => event.target.value),
      take(3)
    );
    zip(nameObservable, colorObservable).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, "combine");
    });
    forkJoin({ name: nameObservable, color: colorObservable }).subscribe(
      (res) => {
        console.log("res", res);
        this.createBox(res.name, res.color, "latest");
      }
    );
  }
  createBox(name: string, color: string, id: string) {
    if (id == "combine") {
      this.combine.nativeElement.innerHTML += `<div style="background-color: ${color};  width: 10rem;padding: 1rem; border-radius: 1rem;">${name}</div>`;
    } else if (id == "latest") {
      this.latest.nativeElement.innerHTML += `<div style="background-color: ${color};  width: 10rem; padding: 1rem;border-radius: 1rem;">${name}</div>`;
    }
  }
}
