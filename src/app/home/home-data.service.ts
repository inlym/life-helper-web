import {Injectable} from '@angular/core'

/** 用户评价模块列表项 */
export interface Customer {
  /** 头像 URL */
  avatarUrl: string
  /** 姓名 */
  name: string
  /** 用户描述 */
  desc: string
  /** 评价内容 */
  content: string
}

/** 客户端设备信息 */
export interface DeviceInfo {
  /** 类型 */
  type: string
  /** 图片的 URL 地址 */
  imageUrl: string
  /** 描述说明 */
  desc: string
}

/**
 * 首页数据服务
 *
 * ### 说明
 * 实际上，这个服务类不需要，直接将数据放在 `HomeComponent` 类中即可，单独封装这个类的目的是：
 * 让视图组件的代码更单纯，同时也方便后续拓展。
 */
@Injectable({providedIn: 'root'})
export class HomeDataService {
  /** 用户评价列表 */
  public customers: Customer[] = [
    {
      avatarUrl: 'https://res.lifehelper.com.cn/avatar/236acfb5ce294a0ab3c0dd56b3739598',
      name: '会**鱼',
      desc: '3年老用户',
      content:
        '我是从「小鸣助手」上线的时候就开始用了，总体来说，还是很好用的，有很多功能蛮实用的，在「小鸣助手」上查天气比其他的 APP 都要更准。',
    },
    {
      avatarUrl: 'https://res.lifehelper.com.cn/avatar/2cc99f099606400dbf4f6859314369fd',
      name: '小**白',
      desc: '2年老用户',
      content:
        '用了「小鸣助手」2年了，几乎每天都会登录上去看一下，因为我把纪念日都记在上面了。我觉得最大的优点就是免费吧，其他软件的同类功能要不是收费的，要不就是有广告，就「小鸣助手」的界面最清爽好用。',
    },
    {
      avatarUrl: 'https://res.lifehelper.com.cn/avatar/33b01afea08e4b228d2287dfeafa0a1b',
      name: '神**蛙',
      desc: '2年老用户',
      content: '「小鸣助手」最大的优点就是手机上和电脑上都能用，日常查看就用微信小程序，要打字多的就用网页打开用。',
    },
  ]

  /** 客户端设备信息列表 */
  public devices: DeviceInfo[] = [
    {
      type: 'miniprogram',
      imageUrl: 'https://static.lifehelper.com.cn/web/device01.png',
      desc: '使用小程序',
    },
    {
      type: 'web',
      imageUrl: 'https://static.lifehelper.com.cn/web/device03.png',
      desc: '使用网页版',
    },
    {
      type: 'pc',
      imageUrl: 'https://static.lifehelper.com.cn/web/device02.png',
      desc: '下载桌面端',
    },
  ]
}
