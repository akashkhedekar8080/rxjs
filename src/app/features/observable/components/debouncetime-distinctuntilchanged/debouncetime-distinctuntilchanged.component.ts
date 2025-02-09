import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { debounceTime, fromEvent, distinctUntilChanged, map } from "rxjs";
@Component({
  selector: "app-debouncetime-distinctuntilchanged",
  standalone: true,
  imports: [
    MatTabsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./debouncetime-distinctuntilchanged.component.html",
  styleUrl: "./debouncetime-distinctuntilchanged.component.scss",
})
export class DebouncetimeDistinctuntilchangedComponent
  implements AfterViewInit
{
  @ViewChild("search1") search1!: ElementRef;
  @ViewChild("search2") search2!: ElementRef;
  ngAfterViewInit(): void {
    fromEvent(this.search1.nativeElement, "keyup")
      .pipe(
        map((event: any) => event?.target.value),
        debounceTime(2000)
      )
      .subscribe({
        next: (res) => {
          console.log("res1", res);
        },
      });
    fromEvent(this.search2.nativeElement, "keyup")
      .pipe(
        map((event: any) => event?.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe({
        next: (res) => {
          console.log("res2", res);
        },
      });
  }
}
