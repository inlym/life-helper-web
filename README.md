# life-helper-frontend

「我的个人助手」项目 Web 前端部分

## 目录结构

```
life-helper-frontend
├── dist/                                 # 使用 `ng build` 命令产生的构建物
├── node_modules/                         # 依赖文件
├── src/                                  # 项目核心代码
│   ├── app/                              # 主体代码文件目录
│   │   ├── app-routing.module.ts         # 应用根路由
│   │   ├── app.component.ts              # 应用根组件
│   │   └── app.module.ts                 # 应用的根模块
│   ├── assets/                           # 资源目录，主要用于存放图片等文件
│   ├── environments/                     # 各个环境的配置文件
│   ├── styles/                           # 通用样式文件
│   ├── favicon.ico                       # favicon 图标
│   ├── index.html                        # 网站入口
│   ├── main.ts                           # 应用的入口
│   ├── polyfills.ts                      # 用于将不同浏览器对 Web 标准的不同支持程度进行标准化
│   ├── styles.scss                       # 全局样式文件
│   └── test.ts                           # 单元测试入口
├── .browserslistrc                       # 配置文件，用来在不同的前端工具之间共享目标浏览器
├── .editorconfig                         # `EditorConfig` 插件的配置文件，用于控制一致的代码风格
├── .gitignore                            # `Git` 的配置文件，用户控制不被 `Git` 跟踪的文件和目录
├── .prettierrc                           # `Prettier` 插件的配置文件，用于控制一致的代码风格
├── angular.json                          # Angular Cli 的配置文件，主要配置项目编译时的一些运行参数
├── Dockerfile                            # Docker 构建文件
├── package.jso n                         # 项目配置文件，主要用于记录使用的第三方依赖包和自定义脚本命令
├── README.md                             # 项目介绍文档，用于对外展现项目基本介绍
└── tsconfig.json                         # `TypeScript` 配置文件

```
