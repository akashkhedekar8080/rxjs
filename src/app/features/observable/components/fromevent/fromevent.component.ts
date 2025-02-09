import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-fromevent",
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule],
  templateUrl: "./fromevent.component.html",
  styleUrl: "./fromevent.component.scss",
})
export class FromeventComponent implements OnInit, AfterViewInit {
  @ViewChild("addBtn", { static: true }) addBtn!: ElementRef;
  list: Array<string> = [];
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let count = 1;
    console.log("hell", count);
    fromEvent(this.addBtn.nativeElement, "click").subscribe((res) => {
      console.log(`video ${count}`);
      this.list.push(`video ${count}`);
      console.log(this.list);
      count++;
      console.log(res);
    });
  }
}
