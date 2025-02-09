import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  viewChild,
  ViewChild,
} from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { from, pluck, Subscription, toArray } from "rxjs";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-pluck",
  standalone: true,
  imports: [MatChipsModule, MatTabsModule, MatTableModule],
  templateUrl: "./pluck.component.html",
  styleUrl: "./pluck.component.scss",
})
export class PluckComponent implements OnInit, OnDestroy {
  msg1!: string[];
  msg2: string[] = [];

  msg3: string = "";
  user = [
    {
      name: "Akash",
      skill: "Angular",
      job: {
        title: "Angular developer",
        exp: 3,
      },
    },
    {
      name: "Omkar",
      skill: "React",
      job: {
        title: "Frontend developer",
        exp: 3,
      },
    },
    {
      name: "Ashutosh",
      skill: "Django",
      job: {
        title: "Backend developer",
        exp: 3,
      },
    },
    {
      name: "Prasad",
      skill: "Automation",
      job: {
        title: "Automation developer",
        exp: 3,
      },
    },
    {
      name: "Swaraj",
      skill: "Full stack",
      job: {
        title: "Full stack developer",
        exp: 3,
      },
    },
  ];
  videoSubscription1!: Subscription;
  videoSubscription2!: Subscription;

  ngOnInit(): void {
    const obs3 = from(this.user);
    this.videoSubscription1 = obs3
      .pipe(pluck("name"), toArray())
      .subscribe((res) => {
        console.log(res);
        this.msg1 = res;
      });
    this.videoSubscription2 = obs3
      .pipe(pluck("job", "title"), toArray())
      .subscribe((res) => {
        console.log(res);
        this.msg2 = res;
      });
  }
  ngOnDestroy(): void {
    this.videoSubscription1.unsubscribe();
    this.videoSubscription2.unsubscribe();
  }
}
