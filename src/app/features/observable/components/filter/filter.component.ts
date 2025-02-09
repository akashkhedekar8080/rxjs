import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { filter, from, Subscription, toArray } from "rxjs";

@Component({
  selector: "app-filter",
  standalone: true,
  imports: [MatChipsModule, MatTableModule, MatTabsModule],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss",
})
export class FilterComponent implements OnInit {
  msg1!: any[];
  msg2: any[] = [];

  msg3!: any[];
  user = [
    {
      id: 1,
      name: "Akash",
      skill: "Angular",
      gender: "male",
    },
    {
      id: 2,
      name: "Omkar",
      skill: "React",
      gender: "male",
    },
    {
      id: 3,
      name: "Ashutosh",
      skill: "Django",
      gender: "male",
    },
    {
      id: 3,
      name: "Prasad",
      skill: "Automation",
      gender: "male",
    },
    {
      id: 4,
      name: "Swaraj",
      skill: "Full stack",
      gender: "male",
    },
    {
      id: 5,
      name: "Vinu",
      skill: "Full stack",
      gender: "female",
    },
  ];
  videoSubscription1!: Subscription;
  videoSubscription2!: Subscription;
  videoSubscription3!: Subscription;

  ngOnInit(): void {
    const obs3 = from(this.user);
    this.videoSubscription1 = obs3
      .pipe(
        filter((data) => data.name.length > 5),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.msg1 = res;
      });
    this.videoSubscription2 = obs3
      .pipe(
        filter((data) => data.gender == "female"),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.msg2 = res;
      });
    this.videoSubscription3 = obs3
      .pipe(
        filter((data) => data.id < 4),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.msg3 = res;
      });
  }
  ngOnDestroy(): void {
    this.videoSubscription1.unsubscribe();
    this.videoSubscription2.unsubscribe();
    this.videoSubscription3.unsubscribe();
  }
}
