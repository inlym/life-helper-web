import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon'
import {ProjectEditingDialogComponent} from '../project-editing-dialog/project-editing-dialog.component'
import {Project, Tag} from './todo.model'
import {TodoService} from './todo.service'

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss',
})
export class TodoHomeComponent implements OnInit {
  projectList: Project[] = []
  tagList: Tag[] = []

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.todoService.getProjectList().subscribe((data) => {
      this.projectList = data
    })

    this.todoService.getTagList().subscribe((data) => {
      this.tagList = data
    })
  }

  /** 打开项目编辑弹窗 */
  openProjectEditingDialog() {
    const dialogRef = this.dialog.open(ProjectEditingDialogComponent, {
      data: {},
    })

    dialogRef.afterClosed().subscribe((data) => console.log(data))
  }
}
