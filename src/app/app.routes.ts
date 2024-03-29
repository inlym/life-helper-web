import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {NotFoundComponent} from './single/not-found/not-found.component'
import {TestComponent} from './test/test.component'
import {TodoHomeComponent} from './todo/todo-home/todo-home.component'

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'todo', component: TodoHomeComponent},
  {path: '**', component: NotFoundComponent},
]
