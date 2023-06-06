---
nav: 组件
nav:
  title: Grid
  order: 2
---

# Grid 栅格

在栅格系统中，将整个 `Row` 容器分割成了 12 等分，以 `Row` > `Col` 组件的结构方式，进行布局，如下：

```jsx
import { Row, Col } from 'lay-react';

const blockStyle = {
  textAlign: 'center',
  lineHeight: '36px',
  color: 'white',
};

export default () => (
  <Row>
    <Col xs="4" sm="4" md="4" lg="4" xl="4">
      <div style={{ ...blockStyle, background: '#64ba79' }}>1</div>
    </Col>
    <Col xs="4" sm="4" md="4" lg="4" xl="4">
      <div style={{ ...blockStyle, background: '#79c48c' }}>2</div>
    </Col>
    <Col xs="4" sm="4" md="4" lg="4" xl="4">
      <div style={{ ...blockStyle, background: '#64ba79' }}>3</div>
    </Col>
  </Row>
);
```

栅格系统中的 `Row`（行）和 `Col`（列）均支持最多五种不同的组合，分别是：**xs**（超小屏幕，如手机）、**sm**（小屏幕，如平板）、**md**（桌面中等屏幕）、**lg**（桌面大型屏幕）、**xl**（超大屏），以呈现更加灵活的布局。

不同的规格对应的屏幕像素大小分界点如下表：

- **xs** <768px
- **sm** [768px，992px)
- **md** [992px, 1200px)
- **lg** [1200px, 1400px)
- **xl** >1400px

## 设置间隔

```jsx
import { Row, Col } from 'lay-react';

const blockStyle = {
  textAlign: 'center',
  lineHeight: '36px',
  color: 'white',
};

export default () => (
  <Row space="6">
    <Col md="6" lg="6" xl="6">
      <div style={{ ...blockStyle, background: '#64ba79' }}>1</div>
    </Col>
    <Col md="6" lg="6" xl="6">
      <div style={{ ...blockStyle, background: '#79c48c' }}>2</div>
    </Col>
  </Row>
);
```

## 设置偏移

```jsx
import { Row, Col } from 'lay-react';

const blockStyle = {
  textAlign: 'center',
  lineHeight: '36px',
  color: 'white',
};

export default () => (
  <Row>
    <Col md="2" lg="2" xl="2">
      <div style={{ ...blockStyle, background: '#64ba79' }}>1</div>
    </Col>
    <Col md="8" lg="8" xl="8" offsetMd="2" offsetLg="2" offsetXl="2">
      <div style={{ ...blockStyle, background: '#79c48c' }}>2</div>
    </Col>
  </Row>
);
```

### Props 说明

### \<Row\>

| 属性名 | 属性类型 | 说明                                                   |
| ------ | -------- | ------------------------------------------------------ |
| xs     | string   | 在超小屏幕页面显示情况，show-展示，hide-隐藏，默认显示 |
| sm     | string   | 在小屏幕页面显示情况，show-展示，hide-隐藏，默认显示   |
| md     | string   | 在中等屏幕页面显示情况，show-展示，hide-隐藏，默认显示 |
| lg     | string   | 在宽屏幕页面显示情况，show-展示，hide-隐藏，默认显示   |
| xl     | string   | 在超大屏幕页面显示情况，show-展示，hide-隐藏，默认显示 |
| space  | string   | 列之间的间隔，默认为 0                                 |

### \<Col\>

| 属性名   | 属性类型 | 说明                                                       |
| -------- | -------- | ---------------------------------------------------------- |
| xs       | string   | 在超小屏幕页面行内所占比例，0~12，默认 12，当为 0 时不显示 |
| sm       | string   | 在小屏幕页面行内所占比例，0~12，默认 12，当为 0 时不显示   |
| md       | string   | 在中等屏幕页面行内所占比例，0~12，默认 12，当为 0 时不显示 |
| lg       | string   | 在宽屏幕页面行内所占比例，0~12，默认 12，当为 0 时不显示   |
| xl       | string   | 在超大屏幕页面行内所占比例，0~12，默认 12，当为 0 时不显示 |
| offsetXs | string   | 在超小屏幕页面行内左侧偏移比例，0~12，默认 0 不偏移        |
| offsetSm | string   | 在小屏幕页面行内左侧偏移比例，0~12，默认 0 不偏移          |
| offsetMd | string   | 在中等屏幕页面行内左侧偏移比例，0~12，默认 0 不偏移        |
| offsetLg | string   | 在宽屏幕页面行内左侧偏移比例，0~12，默认 0 不偏移          |
| offsetXl | string   | 在超大屏幕页面行内左侧偏移比例，0~12，默认 0 不偏移        |
