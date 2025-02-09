import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonService } from "../../../../shared/services/common.service";
import { MatCardModule } from "@angular/material/card";
import { Subscription } from "rxjs";

@Component({
  selector: "app-replaysubject",
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: "./replaysubject.component.html",
  styleUrl: "./replaysubject.component.scss",
})
export class ReplaysubjectComponent implements OnInit {
  commonService = inject(CommonService);
  userlist1: string[] = [];
  userlist2: string[] = [];
  userlist3: string[] = [];
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  ngOnInit(): void {
    this.commonService.video.subscribe({
      next: (res: string) => {
        this.userlist1.push(res);
      },
    });
  }
  addVideo(video: string) {
    this.commonService.video.next(video);
  }
  subscribeUser2() {
    if (!this.subscribeMode2) {
      this.subscription2 = this.commonService.video.subscribe({
        next: (res: string) => {
          this.userlist2.push(res);
        },
      });
    } else {
      this.subscription2.unsubscribe();
    }

    this.subscribeMode2 = !this.subscribeMode2;
  }
  subscribeUser3() {
    if (!this.subscribeMode3) {
      this.subscription3 = this.commonService.video.subscribe({
        next: (res: string) => {
          this.userlist3.push(res);
        },
      });
    } else {
      this.subscription3.unsubscribe();
    }

    this.subscribeMode3 = !this.subscribeMode3;
  }
}
