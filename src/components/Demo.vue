<template>
    <div class="content">
        <div class="example">
            <div class="label">demo1：无省略效果</div>
            <div>
                我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦
            </div>
        </div>
        <div class="example">
            <div class="label">demo2：超出一行省略，hover上去显示title</div>
            <div v-ellipsis="{ lines: 1, showTitle: true }">
                我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦
            </div>
        </div>
        <div class="example">
            <div class="label">demo3：超出两行省略</div>
            <div v-ellipsis="{ lines: 2 }">
                我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦
            </div>
        </div>
        <div class="example">
            <div class="label">
                demo4：超出三行省略，省略号右侧留白10个字符串
            </div>
            <div v-ellipsis="{ lines: 3, rightBlank: 10 }">
                我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦
            </div>
        </div>

        <div class="ellipsis w200">
            <p>
                整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。
            </p>
        </div>
        <div class="ellipsis w200">
            <p class="inline">
                整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。
            </p>
        </div>
        <div class="ellipsis w200">
            <p class="inline-block">
                整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。
            </p>
        </div>
        <div class="ellipsis w200">
            <span>
                整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。
            </span>
        </div>
        <div class="w200">
            <p class="ellipsis">
                整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。
            </p>
        </div>

        <div class="w200">
            <p class="more-ellipsis">
                整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。
            </p>
        </div>

        <div class="w200">
            <ellipsis :text="text" :lines="lines"></ellipsis>
        </div>

        <div class="w200">
            <ellipsis :text="text" :lines="lines"></ellipsis>
        </div>
    </div>
</template>

<script>
import ellipsis from "./multilineEllipsis/ellipsis.vue";
import vellipsis from "./multilineEllipsis/ellipsis.js";
console.log(vellipsis);
export default {
    name: "Demo",
    components: {
        ellipsis,
    },
    directives: {
        ellipsis: vellipsis,
    },
    data() {
        return {
            text: "整合京东海量数据理解及营销领域技术优势，提供一方数据持续营销、全域会员价值挖掘、线上线下整合营销等全渠道全链路的营销解决方案，专注数据资产和生意持续增长，助力企业数字化转型，驱动企业实现消费者资产持续增长。",
            lines: 5,
        };
    },
};
</script>

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
</style>