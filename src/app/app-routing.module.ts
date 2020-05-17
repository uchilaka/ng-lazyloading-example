import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { AdBannerComponent } from "./ad-banner/ad-banner.component";

const routes: Routes = [
  // Ad banner, to display ONLY when user is at /heroes
  // {
  //   path: "heroes",
  //   // pathMatch: "full",
  //   outlet: "ad-banner",
  //   component: AdBannerComponent,
  // },
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    data: { applyPreload: false },
  },
  { path: "detail/:id", component: HeroDetailComponent },
  {
    path: "heroes",
    children: [
      { path: "", outlet: "ad-banner", component: AdBannerComponent },
      { path: "", component: HeroesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
