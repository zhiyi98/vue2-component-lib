# vue2-component-lib

Vue2 组件/工具库，通过 Git 仓库方式供业务项目引用。

## 包含模块

| 模块 | 类型 | 说明 |
|---|---|---|
| `StyledButton` | UI 组件 | 带 `type`（primary/default）和 `text` 属性的按钮，支持 `click` 事件 |
| `SimpleCounter` | UI 组件 | 加减计数器，`initialValue`/`step` 属性，值变化时发射 `change` 事件 |
| `formatDate` | 工具函数 | `formatDate(date, formatStr)` 格式化日期，支持 `YYYY MM DD HH mm ss` |

## 构建

```bash
npm install
npm run build
```

产物输出到 `dist/`：
- `vue2-component-lib.umd.js` — UMD 格式
- `vue2-component-lib.es.js` — ES Module 格式
- `style.css` — 提取的样式

## 在业务项目中使用

### 1. 安装依赖

```bash
# 引用最新版本
npm install vue2-component-lib@git+https://github.com/zhiyi98/vue2-component-lib.git

# 引用指定 Tag
npm install vue2-component-lib@git+https://github.com/zhiyi98/vue2-component-lib.git#v1.0.0
```

对应 `package.json`：
```json
{
  "dependencies": {
    "vue2-component-lib": "git+https://github.com/zhiyi98/vue2-component-lib.git#v1.0.0"
  }
}
```

### 2. 全量注册（推荐）

```js
import Vue from 'vue'
import 'vue2-component-lib/dist/style.css'
import ComponentLib from 'vue2-component-lib'

Vue.use(ComponentLib)
```

之后可直接在模板中使用 `<StyledButton>` 和 `<SimpleCounter>`。

### 3. 按需导入

```js
import { StyledButton, SimpleCounter, formatDate } from 'vue2-component-lib'
```

### 4. 组件用法

**StyledButton**
```html
<StyledButton type="primary" text="提交" @click="handleSubmit" />
<StyledButton type="default" text="取消" @click="handleCancel" />
```

**SimpleCounter**
```html
<SimpleCounter :initial-value="0" :step="5" @change="onCountChange" />
```

**formatDate**
```js
import { formatDate } from 'vue2-component-lib'

formatDate(new Date(), 'YYYY-MM-DD')           // "2026-05-09"
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')  // "2026-05-09 14:30:00"
```

## 更新流程

```bash
# 库项目：修改代码后
npm run build
git add .
git commit -m "feat: xxx"
git tag v1.1.0
git push origin main --tags

# 业务项目：更新依赖
npm update vue2-component-lib
# 或锁定新 Tag
npm install vue2-component-lib@git+https://github.com/zhiyi98/vue2-component-lib.git#v1.1.0
```
