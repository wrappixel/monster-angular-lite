import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "About",
      urls: [{ title: "About", url: "/about" }, { title: "About" }],
    },
    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class AboutModule {}
