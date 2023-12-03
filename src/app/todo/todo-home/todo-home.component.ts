import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {Project, Tag} from './todo.model'
import {TodoService} from './todo.service'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss',
})
export class TodoHomeComponent implements OnInit {
  projectList: Project[] = []
  tagList: Tag[] = []

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getProjectList().subscribe((data) => {
      this.projectList = data
    })

    this.todoService.getTagList().subscribe((data) => {
      this.tagList = data
    })
  }
}
