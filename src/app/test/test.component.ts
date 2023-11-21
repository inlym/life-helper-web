import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { logger } from '../common/core/logger'

/** 临时调试或者测试用途的组件 */
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    logger.debug('打开调试页')
  }
}
