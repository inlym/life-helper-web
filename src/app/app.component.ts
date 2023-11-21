import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // 主组件
  }

  title = 'life-helper-web'
}
