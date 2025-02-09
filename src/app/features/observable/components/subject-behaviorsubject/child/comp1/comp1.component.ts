import { Component, inject, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonService } from "../../../../../../shared/services/common.service";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-comp1",
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: "./comp1.component.html",
  styleUrl: "./comp1.component.scss",
})
export class Comp1Component implements OnInit {
  commonService = inject(CommonService);
  name!: string;
  constructor() {}
  ngOnInit(): void {
    this.commonService.name.subscribe({
      next: (res: string) => {
        this.name = res;
      },
    });
  }
  nameChange(): void {
    this.commonService.name.next(this.name);
  }
}
