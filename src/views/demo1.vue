<script>
const code_example_1 = `<template>
    <div class="content">
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
    </div>
</template>

<script>
export default {
    name: "Demo1",
    data() {
        return {
            text: "整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。",
        };
    },
};
<\/script>

<style scoped>
.content {
    width: 1500px;
    line-height: 20px;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.w200 {
    width: 200px;
}
.inline-block {
    display: inline-block;
}
.inline {
    display: inline;
}
</style>`;
export default {
  name: "demo1",
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
  /* padding: 16px; */
}
</style>