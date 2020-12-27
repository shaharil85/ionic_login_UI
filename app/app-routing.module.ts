import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'semm3242',
    loadChildren: () => import('./semm3242/semm3242.module').then( m => m.Semm3242PageModule)
  },
  {
    path: 'semm3233',
    loadChildren: () => import('./semm3233/semm3233.module').then( m => m.Semm3233PageModule)
  },
  {
    path: 'semm1013',
    loadChildren: () => import('./semm1013/semm1013.module').then( m => m.Semm1013PageModule)
  },
  {
    path: 'list-student',
    loadChildren: () => import('./list-student/list-student.module').then( m => m.ListStudentPageModule)
  },
  {
    path: 'find-student',
    loadChildren: () => import('./find-student/find-student.module').then( m => m.FindStudentPageModule)
  },
  {
    path: 'attendance-student',
    loadChildren: () => import('./attendance-student/attendance-student.module').then( m => m.AttendanceStudentPageModule)
  },
  {
    path: 'semm3242-list-student',
    loadChildren: () => import('./semm3242-list-student/semm3242-list-student.module').then( m => m.Semm3242ListStudentPageModule)
  },
  {
    path: 'semm3242-find-student',
    loadChildren: () => import('./semm3242-find-student/semm3242-find-student.module').then( m => m.Semm3242FindStudentPageModule)
  },
  {
    path: 'semm3242-attendance-student',
    loadChildren: () => import('./semm3242-attendance-student/semm3242-attendance-student.module').then( m => m.Semm3242AttendanceStudentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
