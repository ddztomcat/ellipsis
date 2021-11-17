<script>
const code_example_1 = `<template>
    <div class="content">
        <div class="example">
            <div class="label">1：无省略效果</div>
            <div>
                {{text}}
            </div>
        </div>
        <div class="example">
            <div class="label">2：超出一行省略，hover显示title</div>
            <div v-ellipsis="{ lines: 1, showTitle: true }">
                {{text}}
            </div>
        </div>
        <div class="example">
            <div class="label">3：超出三行省略</div>
            <div v-ellipsis="{ lines: 3 }">
                {{text}}
            </div>
        </div>

        <div class="example">
            <div class="label">4：组件形式</div>
            <ellipsis :text="text" :lines="3"></ellipsis>
        </div>
    </div>
</template>

<script>
export default {
    name: "Demo",
    data() {
        return {
            text: "整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。",
            lines: 3,
        };
    },
};
<\/script>

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
          showCode={false}
        
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