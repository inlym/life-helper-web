import {Injectable} from '@angular/core'
import {Project, Tag} from './todo.model'
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

  getTagList() {
    const list: Tag[] = [
      {id: 666, name: '标签3号'},
      {id: 333, name: '标签2号'},
      {id: 232, name: '标签1号'},
    ]
    return of(list)
  }
}
