import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'course', component:CourseComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'about', component:AboutComponent},
    
];
