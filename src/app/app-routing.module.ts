import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './shared/components/technologies/technologies.component';

const routes: Routes = [
  {path: "technologies", component : TechnologiesComponent},
  {path: "updateTech/:id", component : TechnologiesComponent},
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
