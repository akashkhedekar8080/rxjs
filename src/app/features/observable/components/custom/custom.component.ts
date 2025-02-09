import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-custom",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./custom.component.html",
  styleUrl: "./custom.component.scss",
})
export class CustomComponent implements OnInit {
  @ViewChild("obs1Ul") obs1Ul!: ElementRef;
  @ViewChild("obs2Ul") obs2Ul!: ElementRef;

  status1: string = "";
  status2: string = "";
  ngOnInit(): void {
    const names = ["Angular", "Javascript", "HTML5", "Scss"];

    const nameObservable = new Observable<string>((subscriber) => {
      names.forEach((name, index) => {
        setTimeout(() => {
          subscriber.next(name);

          if (index === names.length - 1) {
            subscriber.complete();
          }
        }, index * 1000);
      });

      // Cleanup;
      return () => {
        console.log("Unsubscribed from nameObservable");
      };
    });

    const subscription = nameObservable.subscribe({
      next: (name) => {
        console.log(`Name: ${name}`);
        const li = document.createElement("li");
        li.textContent = name;
        this.obs1Ul.nativeElement?.appendChild(li);
      },
      error: (error) => {
        console.log("error");
        this.status1 = "error";
      },
      complete: () => {
        console.log("All names emitted!");
        this.status1 = "complete";
        subscription.unsubscribe();
      },
    });
    const obs2 = new Observable<string>((observer) => {
      const interval = setInterval(() => {
        names.forEach((value, index) => {
          observer.next(value);
          if (index == names.length - 2) {
            observer.error(new Error("Error"));
            clearInterval(interval);
          }
        });
      }, 1000);
    });
    obs2.subscribe({
      next: (name) => {
        console.log(`Name: ${name}`);
        const li = document.createElement("li");
        li.textContent = name;
        this.obs2Ul.nativeElement?.appendChild(li);
      },
      error: (error) => {
        console.error("error", error);
        this.status2 = "error";
      },
      complete: () => {
        console.log("All names emitted!");
        this.status2 = "complete";
        subscription.unsubscribe();
      },
    });
  }
}
