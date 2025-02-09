import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormField, MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CommonService } from "../../../../../../shared/services/common.service";
@Component({
  selector: "app-comp3",
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormField,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: "./comp3.component.html",
  styleUrl: "./comp3.component.scss",
})
export class Comp3Component {
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
