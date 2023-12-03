import {CommonModule} from '@angular/common'
import {Component, Inject} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {ProjectEditingDialogInputData} from './project-editing-dialog.model'
import {TodoService} from '../todo-home/todo.service'

@Component({
  selector: 'app-project-editing-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './project-editing-dialog.component.html',
  styleUrl: './project-editing-dialog.component.scss',
})
export class ProjectEditingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectEditingDialogInputData,
    private todoService: TodoService
  ) {
    this.isNew = !data.id
    this.name = data.name
  }

  /** 是否是“新建” */
  isNew: boolean = true

  /** 清单名称 */
  name: string = ''

  confirm() {
    this.todoService.addProject(this.name).subscribe((data) => console.log(data))
  }
}
