<template>
    <div ref="wrap" :title="text"></div>
</template>

<script>
export default {
    props: {
        lines: {
            type: Number,
            default: 1,
        },
        text: {
            type: String,
            default: "",
        },
        lineHeight: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {};
    },
    mounted() {
        this.setEllipsis()
    },
    methods: {
        setEllipsis() {
            let el = this.$refs['wrap']
            let text = this.text
            // 获取文本的行高
            const computedStyle = window.getComputedStyle(el, null);
            const textLineHeight =
                computedStyle.getPropertyValue("line-height");
            const textFontSize = computedStyle.getPropertyValue("font-size");
            // 设置文本超出指定行数后隐藏样式
            const limitHeight = parseInt(textLineHeight) * this.lines;
            if (limitHeight) {
                el.style.height = `${limitHeight}px`;
                el.style.overflow = "hidden";
            }
            // 设置省略号，通过创建一个div按照同样的样式逐个字符显示文本内容，获取到达指定行数时的字符下标
            const newDiv = document.createElement("div");
            newDiv.style.width = `${el.clientWidth}px`;
            newDiv.style.lineHeight = textLineHeight;
            newDiv.style.fontSize = textFontSize;
            newDiv.style.visibility = "hidden";
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
            el.innerHTML = targetIndex
                ? `${text.substring(0, targetIndex - 3)}...`
                : text;
            el.setAttribute("data-overflow", !!targetIndex);
        },
    }
};
</script>

<style lang="scss">
</style>
