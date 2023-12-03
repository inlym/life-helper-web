/** 待办项目 */
export interface Project {
  /** 项目 ID */
  id: number
  /** 项目名称 */
  name: string
}

/** 待办任务 */
export interface Task {
  /** 任务 ID */
  id: number
  /** 任务标题 */
  title: string
  /** 任务描述 */
  description: string
}

/** 待办任务标签 */
export interface Tag {
  /** 标签 ID */
  id: number
  /** 标签名称 */
  name: string
}
