import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { combineLatest, from, fromEvent, map, withLatestFrom } from "rxjs";

@Component({
  selector: "app-combinelatest-withlatestfrom",
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: "./combinelatest-withlatestfrom.component.html",
  styleUrl: "./combinelatest-withlatestfrom.component.scss",
})
export class CombinelatestWithlatestfromComponent implements AfterViewInit {
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
    ).pipe(map((event: any) => event.target.value));
    const colorObservable = fromEvent(
      this.colorSelect.nativeElement,
      "change"
    ).pipe(map((event: any) => event.target.value));
    combineLatest({ name: nameObservable, color: colorObservable }).subscribe(
      (res) => {
        console.log(res);
        this.createBox(res.name, res.color, "combine");
      }
    );
    nameObservable
      .pipe(withLatestFrom(colorObservable))
      .subscribe(([name, color]) => {
        console.log("latst", name, color);
        this.createBox(name, color, "latest");
      });
  }
  createBox(name: string, color: string, id: string) {
    if (id == "combine") {
      this.combine.nativeElement.innerHTML += `<div style="background-color: ${color};  width: 10rem;padding: 1rem; border-radius: 1rem;">${name}</div>`;
    } else if (id == "latest") {
      this.latest.nativeElement.innerHTML += `<div style="background-color: ${color};  width: 10rem; padding: 1rem;border-radius: 1rem;">${name}</div>`;
    }
  }
}
