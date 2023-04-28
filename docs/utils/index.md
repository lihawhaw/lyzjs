---
nav:
  title: 工具
  order: 3
group:
  title: 介绍
  order: -1
---

## 安装

```
pnpm add lyzjs-utils
```

## 使用

```react
import { version } from 'lyzjs-utils'

export const App = () => {
  const handleVersion = () => {
    console.log(version)
  }

  return <Button onClick={handleVersion}>查看版本</Button>
}
```
