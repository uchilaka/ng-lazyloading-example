import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { MessagesModule } from "../messages/messages.module";
import { RouterModule } from "@angular/router";
import { HeroesModule } from "../heroes/heroes.module";

@NgModule({
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
  providers: [],
  imports: [
    CommonModule,
    MessagesModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent
      }
    ]),
    HeroesModule
  ]
})
export class DashboardModule {}
