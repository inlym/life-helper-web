import {Injectable} from '@angular/core'
import {Project} from './todo.model'
import {of} from 'rxjs'

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor() {}

  getProjectList() {
    const list: Project[] = [
      {id: 1, name: '2dfdsf'},
      {id: 2, name: '23432e'},
      {id: 3, name: '32424'},
    ]
    return of(list)
  }
}
