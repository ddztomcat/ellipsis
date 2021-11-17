<script>
// https://stackoverflow.com/questions/36607932/unterminated-template-literal-syntax-error-when-literal-contains-script-tag
/* eslint-disable no-useless-escape */
const code_example_1 = `<template>
    <div class="content">
        <div class="example">
            <div class="label">demo1：无省略效果</div>
            <div>
                {{text}}
            </div>
        </div>
        <div class="example">
            <div class="label">demo2：超出一行省略，hover上去显示title</div>
            <div v-ellipsis="{ lines: 1, showTitle: true }">
                {{text}}
            </div>
        </div>
        <div class="example">
            <div class="label">demo3：超出两行省略</div>
            <div v-ellipsis="{ lines: 2 }">
                {{text}}
            </div>
        </div>
        <div class="example">
            <div class="label">
                demo4：超出三行省略，省略号右侧留白10个字符串
            </div>
            <div v-ellipsis="{ lines: 3, rightBlank: 10 }">
                {{text}}
            </div>
        </div>

        <div class="ellipsis w200">
            <p>
                {{text}}
            </p>
        </div>
        <div class="ellipsis w200">
            <p class="inline">
                {{text}}
            </p>
        </div>
        <div class="ellipsis w200">
            <p class="inline-block">
                {{text}}
            </p>
        </div>
        <div class="ellipsis w200">
            <span>
                {{text}}
            </span>
        </div>
        <div class="w200">
            <p class="ellipsis">
                {{text}}
            </p>
        </div>

        <div class="w200">
            <p class="more-ellipsis">
                {{text}}
            </p>
        </div>

        <div class="w200">
            <ellipsis :text="text" :lines="lines"></ellipsis>
        </div>
    </div>
</template>

<script>
export default {
    name: "Demo",
    data() {
        return {
            text: "整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。",
            lines: 5,
        };
    },
};
<\/script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    width: 1500px;
    line-height: 20px;
}
.example {
    width: 400px;
    margin-bottom: 20px;
}
.label {
    margin-bottom: 16px;
    font-weight: bold;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.w200 {
    width: 200px;
}
.more-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ellipsis-no-width {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.inline-block {
    display: inline-block;
}
.inline {
    display: inline;
}
</style>`;
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
    const { className, style } = this;
    return (
      <div class={className} style={style}>
        <code-viewer
          source={code_example_1}
        
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