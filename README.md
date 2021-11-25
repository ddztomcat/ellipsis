# 多行文本的省略
在开发过程中，经常会遇到文本超出显示区域的情况，结合业务中的场景，简单总结如下：
1. 一行文本的省略
2. 业务中常见场景

3. 多行文本的省略
4. 封装成ellipsis指令或组件
## 一行文本的省略

css语法：
```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

通常在开发中，有时候明明样式已经加上，却仍然得不到想要的效果，仔细研究发现，往往是代码忽略掉两个原则：
1. 宽度（或隐式宽度，可以理解为通过继承父级宽度得到的）
2. css要加到离文本内容最近的块级dom上

举几个简单的例子，以下五种场景
```html
<div class="ellipsis w200">
    <p>
        1、{{text}}
    </p>
</div>
<div class="ellipsis w200">
    <p class="inline">
        2、{{text}}
    </p>
</div>
<div class="ellipsis w200">
    <p class="inline-block">
        3、{{text}}
    </p>
</div>
<div class="ellipsis w200">
    <span>
        4、{{text}}
    </span>
</div>
<div class="w200">
    <p class="ellipsis">
        5、{{text}}
    </p>
</div>
```
![效果图](//img10.360buyimg.com/img/jfs/t1/169917/11/25205/948079/619f002cE63ede877/952f1601e8d4213e.jpg)

为什么会出现上述结果呐？
1. demo1 违反了原则2，css 要加到 p 标签上
2. demo3 同样违反了原则2，因为 inline-block 同样具有 block 的属性
3. demo2 的 p 标签变为行内元素后和 demo4 类似，而 demo5 的 w200 并没有直接加到 p 标签上，但同样起到了隐式宽度的效果

## 业务中常见场景
Table组件内使用

要实现的效果：随着浏览器窗口的变动，动态展示出足够多的文字

![效果图](//img10.360buyimg.com/img/jfs/t1/170194/14/26389/504298/619f086fE9df44175/ea5e646c7e77b6fc.gif)

配合Table：table-layout: fixed 能帮助我们实现最终的效果

![效果图](//img10.360buyimg.com/img/jfs/t1/212214/14/5640/483993/619f0cb7Ed788b7ea/f1f8026906b56e6d.jpg)

## 多行文本的省略

css语法：
```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
text-overflow: ellipsis;
```
![效果图](//img10.360buyimg.com/img/jfs/t1/197832/20/18452/405474/619f0e89E31ac34bb/47de10dd32c60307.gif)

存在兼容性问题，只能支持webkit内核

js解决方案：
1. 通过line-height * 行数，得到文本高度
2. 创建dom模拟渲染，得到截断处的文本坐标
3. 追加省略符号

```js
function setEllipsis(el, binding, vnode) {
  // 接收指令传参（行数、是否设置title，行高）
  const lineNum = binding.value.lines || 1;
  const showTitle = binding.value.showTitle || false;
  const lineHeight = binding.value.lineHeight || 22;
  // 获取显示的文本内容
  const text = el.innerHTML;
  if (!text.length) return;
  // 是否显示title
  if (showTitle) el.setAttribute('title', text.trim());

  // 获取文本的行高
  const computedStyle = window.getComputedStyle(el, null);
  const textLineHeight = computedStyle.getPropertyValue('line-height') || lineHeight;
  const textFontSize = computedStyle.getPropertyValue('font-size');

  // 设置文本超出指定行数后隐藏样式
  const limitHeight = parseInt(textLineHeight) * lineNum;
  if (limitHeight) {
    el.style.height = `${limitHeight}px`;
    el.style.overflow = 'hidden';
  }
  // 创建一个div按照同样的样式逐个字符显示文本内容，获取到达指定行数时的字符下标
  const newDiv = document.createElement('div');
  newDiv.style.width = `${el.clientWidth}px`;
  newDiv.style.lineHeight = textLineHeight;
  newDiv.style.fontSize = textFontSize;
  newDiv.style.visibility = 'hidden';
  document.body.appendChild(newDiv);
  let targetIndex;
  for (let i = 0, len = text.length; i < len; i++) {
    newDiv.innerHTML = text.substring(0, i);
    if (newDiv.clientHeight > limitHeight) {
      targetIndex = i;
      break;
    }
  }
  document.body.removeChild(newDiv);
  el.innerHTML = targetIndex ? `${text.substring(0, targetIndex - 3)}...` : text;
}
```
## 封装成ellipsis指令或组件

省略指令`v-ellipsis`会接收3个参数：

| 参数      | 说明            | 类型
|:--------:| :-------------:|:-------------:|
| lines     | 行数 | number
|showTitle | 是否显示title，文本超出显示省略时，当鼠标hover上去时是否在title上显示完整的内容 | boolean
|lineHeight | 行高，非必需 | number

具体使用如下：

```html
<div class="example">
    <div class="label">2：超出一行省略，hover显示title</div>
    <div v-ellipsis="{ lines: 1, showTitle: true }">
        {{text}}
    </div>
</div>
```

![效果图](//img10.360buyimg.com/img/jfs/t1/214830/20/5653/1291615/619f26d8E2f41dae2/c2526f50ab9a047e.gif)