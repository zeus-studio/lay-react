---
nav: 组件
nav:
  title: Icon
  order: 3
---

# Icon 图标

## 基础用法

```jsx
import { Icon } from 'lay-react';

export default () => (
  <div>
    <Icon icon="github" />
    <Icon icon="chrome" />
  </div>
);
```

## 设置图标颜色

```jsx
import { Icon } from 'lay-react';

export default () => <Icon icon="github" color="red" />;
```

## 设置图标大小

图标大小支持 **sm**、**md**、**lg** 三种预设，除去这三种预设之外，可以直接传入数值

```jsx
import { Icon } from 'lay-react';

export default () => <Icon icon="github" size={56} />;
```

## Props 说明

| 属性名 | 属性类型 | 说明                                 |
| ------ | -------- | ------------------------------------ |
| icon   | string   | 图标类型                             |
| color  | string   | 图标颜色，写入到 style 的 color 属性 |
