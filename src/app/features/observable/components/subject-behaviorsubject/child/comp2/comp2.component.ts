import { Component, inject } from "@angular/core";
import { CommonService } from "../../../../../../shared/services/common.service";
import { FormsModule } from "@angular/forms";
import { MatFormField, MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-comp2",
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormField,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: "./comp2.component.html",
  styleUrl: "./comp2.component.scss",
})
export class Comp2Component {
  commonService = inject(CommonService);
  name!: string;
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
