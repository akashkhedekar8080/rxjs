import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { CommonService } from "../../../../shared/services/common.service";
import { Comp1Component } from "./child/comp1/comp1.component";
import { Comp2Component } from "./child/comp2/comp2.component";
import { Comp3Component } from "./child/comp3/comp3.component";

@Component({
  selector: "app-subject-behaviorsubject",
  standalone: true,
  imports: [Comp1Component, Comp2Component, Comp3Component],
  templateUrl: "./subject-behaviorsubject.component.html",
  styleUrl: "./subject-behaviorsubject.component.scss",
})
export class SubjectBehaviorsubjectComponent implements OnInit, OnDestroy {
  commonService = inject(CommonService);
  name!: string;

  ngOnInit(): void {
    this.commonService.exclusive.next(true);
    this.commonService.name.subscribe({
      next: (res: string) => {
        this.name = res;
      },
    });
  }
  ngOnDestroy(): void {
    this.commonService.exclusive.next(false);
  }
}
