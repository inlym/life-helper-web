import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatListModule} from '@angular/material/list'
import {Project} from './todo.model'
import {TodoService} from './todo.service'

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatExpansionModule, MatListModule],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss',
})
export class TodoHomeComponent implements OnInit {
  projectList: Project[] = []

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getProjectList().subscribe((data) => {
      this.projectList = data
    })
  }
}
