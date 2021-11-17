<script>
let code_example_1 = `<template>
    <div class="content">
    </div>
</template>

<script>
export default {
    name: "Demo",
    directives: {
        ellipsis: {
          inserted(el, binding, vnode) {
            // 接收指令传参
            let lineNum = binding.value.lines || 1;
            let showTitle = binding.value.showTitle || false;
            let lineHeight = binding.value.lineHeight || 22;

            // 获取显示的文本内容
            let text = el.innerHTML;
            if (!text.length) return;
            // 是否显示title
            if (showTitle) el.setAttribute('title', text.trim());

            // 获取文本的行高
            let computedStyle = window.getComputedStyle(el, null);
            let textLineHeight = computedStyle.getPropertyValue('line-height') || lineHeight;
            let textFontSize = computedStyle.getPropertyValue('font-size');

            // 设置文本超出指定行数后隐藏样式
            let limitHeight = parseInt(textLineHeight) * lineNum;
            if (limitHeight) {
              el.style.height = \`\${limitHeight}px\`;
              el.style.overflow = 'hidden';
            }

            // 设置省略号，通过创建一个div按照同样的样式逐个字符显示文本内容，获取到达指定行数时的字符下标
            let newDiv = document.createElement('div');
            newDiv.style.width = \`\${el.clientWidth}px\`;
            newDiv.style.lineHeight = textLineHeight;
            newDiv.style.fontSize = textFontSize;
            newDiv.style.visibility = 'hidden';
            document.body.appendChild(newDiv);
            let index;
            for (let i = 0, len = text.length; i < len; i++) {
              newDiv.innerHTML = text.substring(0, i);
              if (newDiv.clientHeight > limitHeight) {
                index = i;
                break;
              }
            }
            document.body.removeChild(newDiv);
            el.innerHTML = index ? \`\${text.substring(0, index - 3)}...\` : text;
          }
        },
    },
};
<\/script>`;
export default {
  name: "demo",
  data() {
    return {
      className: ["page-container"], // page className
    };
  },
  mounted() {},
  methods: {},
  render() {
    let { className, style } = this;
    return (
      <div class={className} style={style}>
        <code-viewer
          source={code_example_1}
          showCode={true}
        
        ></code-viewer>
      </div>
    );
  },
};
</script>

<style scoped>
.page-container {
  padding: 16px;
}
</style>