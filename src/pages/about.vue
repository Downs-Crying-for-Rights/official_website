<template>
  <div class="content margin-x">
    <h1 class="text-h3 mb-8">平台简介</h1>

    <v-card class="mb-8" variant="tonal">
      <v-card-title class="text-h5">什么是学生互助频道？</v-card-title>
      <v-card-text class="text-body-1">
        <p class="mb-4">
          DCR，即学生互助频道，自 2023
          年成立以来，频道一直致力于为那些对学校违规补课心存不满、渴望互助，
          却因种种顾虑不便举报的学生们，搭建一个提供无偿帮助的温暖平台。
        </p>
        <p class="mb-4">
          我们深知，许多学生面对违规补课时，既想维护自己的合法权益，又担心直接举报可能带来的各种压力和顾虑。
          因此，DCR 应运而生，为这些学生提供一个安全、专业、温暖的互助环境。
        </p>
      </v-card-text>
    </v-card>

    <v-card class="mb-8" variant="outlined">
      <v-card-title class="text-h5">为什么要互助举报？</v-card-title>
      <v-card-text class="text-body-1">
        <v-list>
          <v-list-item prepend-icon="mdi-shield-check">
            <v-list-item-title>保护隐私</v-list-item-title>
            <v-list-item-subtitle
              >通过互助方式，可以更好地保护举报者的身份信息</v-list-item-subtitle
            >
          </v-list-item>
          <v-list-item prepend-icon="mdi-account-group">
            <v-list-item-title>经验分享</v-list-item-title>
            <v-list-item-subtitle
              >与其他有相同经历的学生交流，获得宝贵的经验和建议</v-list-item-subtitle
            >
          </v-list-item>
          <v-list-item prepend-icon="mdi-heart-outline">
            <v-list-item-title>心理支持</v-list-item-title>
            <v-list-item-subtitle>在互助社区中获得情感支持，减轻心理压力</v-list-item-subtitle>
          </v-list-item>
          <v-list-item prepend-icon="mdi-book-open-variant">
            <v-list-item-title>专业指导</v-list-item-title>
            <v-list-item-subtitle>获得专业的举报流程指导和材料准备帮助</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="mb-8" variant="tonal" color="green-lighten-3">
      <v-card-title class="text-h5">平台使命</v-card-title>
      <v-card-text class="text-body-1">
        <p class="mb-4">我们的使命是：</p>
        <ul class="ml-6">
          <li class="mb-2">为学生提供一个安全、温暖、专业的互助平台</li>
          <li class="mb-2">帮助学生合理、合法地反映违规补课问题</li>
          <li class="mb-2">分享举报经验，提高举报成功率</li>
          <li class="mb-2">提供心理支持，帮助学生缓解压力</li>
          <li class="mb-2">坚持无偿服务，拒绝任何形式的收费</li>
        </ul>
      </v-card-text>
    </v-card>

    <v-card class="mb-8" variant="outlined">
      <v-card-title class="text-h5">活动范围</v-card-title>
      <v-card-text class="text-body-1">
        <p class="mb-4">DCR 学生互助频道主要提供以下服务：</p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4">
              <v-icon icon="mdi-file-document-edit" size="large" class="mb-2" />
              <h3 class="text-h6 mb-2">委托表服务</h3>
              <p>提供在线委托表生成工具，帮助学生规范化申请互助</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4">
              <v-icon icon="mdi-book-open-variant" size="large" class="mb-2" />
              <h3 class="text-h6 mb-2">教程与文档</h3>
              <p>提供详细的举报教程、途径说明和成功案例分享</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4">
              <v-icon icon="mdi-robot" size="large" class="mb-2" />
              <h3 class="text-h6 mb-2">AI 辅助</h3>
              <p>智能 AI bot 协助准备互助材料，提供专业建议</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4">
              <v-icon icon="mdi-heart" size="large" class="mb-2" />
              <h3 class="text-h6 mb-2">心理支持</h3>
              <p>提供安全、温暖的倾诉空间，促进心理健康</p>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-alert type="info" variant="tonal" class="mb-8">
      <v-alert-title>重要说明</v-alert-title>
      <p class="mb-2"><strong>收费不存在</strong> - 我们承诺永久免费提供所有服务</p>
      <p class="mb-2"><strong>DCR 是该频道的代号</strong> - 其内容并不代表任何法人实体</p>
      <p>我们是一个由学生自发组织的互助社区，不隶属于任何组织或机构</p>
    </v-alert>

    <div class="text-center">
      <v-btn color="green" size="large" to="/form" prepend-icon="mdi-file-document-edit">
        开始互助之旅
      </v-btn>
      <v-btn
        color="green"
        size="large"
        variant="outlined"
        href="https://qun.qq.com/universal-share/share?ac=1&authKey=27wt%2BV3jpF1Sh7iV%2BqrRjjR3M8eK96fKLjw%2BDOfHV0C1n2SVPaEKJOSIRtieebZE&busi_data=eyJncm91cENvZGUiOiI2MDk4MTI2MTMiLCJ0b2tlbiI6Im9PcWFBNEo5QnAyOU9HOG4xL3hFTkVhTS9XYnI5VXF3ZlVsY29RZ3dESWgzVnZNcVVOTkdYbkY4T2gvcVZSdEciLCJ1aW4iOiIxMjgyMTA1Njg1In0=&data=FuH6V8EcXOkJVY-dAHIoXKAFvHE9yyYjgW-wn6_vwNtuz0sxmTcdy0lcyonXMfN_3yiDGhtzT1eHvpDacmfycv37MU1w-qtGl-4vrwHwR_s&svctype=5&tempid=h5_group_info"
        target="_blank"
        prepend-icon="mdi-account-group"
        class="ml-4"
      >
        加入审核组
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: '平台简介 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: '了解 DCR 学生互助频道的使命、服务范围和平台特色。'
    }
  ]
});
</script>

<style scoped>
.content {
  padding-top: 80px;
  padding-bottom: 42px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
