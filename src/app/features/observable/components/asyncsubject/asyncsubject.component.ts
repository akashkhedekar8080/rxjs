import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonService } from "../../../../shared/services/common.service";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-asyncsubject",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: "./asyncsubject.component.html",
  styleUrl: "./asyncsubject.component.scss",
})
export class AsyncsubjectComponent implements OnInit {
  commonService = inject(CommonService);
  asynVideoEmit!: string;
  ngOnInit(): void {
    this.commonService.asyncVideo.subscribe({
      next: (res: string) => {
        this.asynVideoEmit = res;
      },
    });
  }
  addVideo(video: string): void {
    this.commonService.asyncVideo.next(video);
  }
  onComplete(): void {
    this.commonService.asyncVideo.complete();
  }
}
