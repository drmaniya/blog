import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { PostService } from './post.service';
import { SharedModule } from '../shared/shared.module';

const routes:Routes =[
  {path:'blog', component:ListComponent},
  {path:'blog/:id', component:DetailComponent},
  {path:'dashboard', component:PostDashboardComponent},
]
@NgModule({
  declarations: [PostDashboardComponent, DetailComponent, ListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [PostService]
})
export class PostsModule { }
