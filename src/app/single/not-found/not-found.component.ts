import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {HeaderComponent} from '../../common/components/header/header.component'

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
