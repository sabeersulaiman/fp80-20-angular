import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { DogViewComponent } from './components/dog-view/dog-view.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dogs',
                component: DogListComponent
            },
            {
                path: 'dogs/view/:dogId',
                component: DogViewComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
