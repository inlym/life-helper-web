# life-helper-frontend

「我的个人助手」项目 Web 前端部分

## 目录结构

```
life-helper-frontend
├── dist/                                                         # 使用 `ng build` 命令产生的构建物
├── node_modules/                                                 # 依赖文件
├── src/                                                          # 项目核心代码
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── styles/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── .browserslistrc                                              # 配置文件，用来在不同的前端工具之间共享目标浏览器
├── .editorconfig                                                # `EditorConfig` 插件的配置文件，用于控制一致的代码风格
├── .gitignore                                                   # `Git` 的配置文件，用户控制不被 `Git` 跟踪的文件和目录
├── .prettierrc                                                  # `Prettier` 插件的配置文件，用于控制一致的代码风格
├── angular.json                                                 # Angular Cli 的配置文件，主要配置项目编译时的一些运行参数
├── Dockerfile
├── package.json                                                 # 项目配置文件，主要用于记录使用的第三方依赖包和自定义脚本命令
├── README.md                                                    # 项目文档，用于对外展现项目基本介绍
└── tsconfig.json                                                # `TypeScript` 的配置文件

```
