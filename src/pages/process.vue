<template>
  <div class="content margin-x">
    <h1 class="text-h3 mb-8">互助流程</h1>

    <v-alert type="info" variant="tonal" class="mb-8">
      <v-alert-title>流程概览</v-alert-title>
      简单四步，即可加入 DCR 学生互助频道，开始您的互助之旅。
    </v-alert>

    <v-timeline side="end" align="start">
      <v-timeline-item
        v-for="(step, index) in steps"
        :key="index"
        :dot-color="step.color"
        size="large"
      >
        <template v-slot:icon>
          <v-icon :icon="step.icon" />
        </template>
        <template v-slot:opposite>
          <div class="text-h6">步骤 {{ index + 1 }}</div>
        </template>
        <v-card>
          <v-card-title class="text-h5">{{ step.title }}</v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-4">{{ step.description }}</p>
            <v-list v-if="step.details" density="compact">
              <v-list-item v-for="(detail, i) in step.details" :key="i" :prepend-icon="detail.icon">
                <v-list-item-title>{{ detail.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn
              v-if="step.action"
              :color="step.color"
              :to="step.action.to"
              :href="step.action.href"
              :target="step.action.href ? '_blank' : undefined"
              class="mt-4"
            >
              {{ step.action.text }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-card class="mt-8 mb-8" variant="tonal" color="green-lighten-5">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-check-circle" class="mr-2" />
        成功案例
      </v-card-title>
      <v-card-text>
        <p class="text-body-1 mb-4">
          许多学生通过我们的互助平台成功反映了违规补课问题，并获得了满意的处理结果。
          以下是一些脱敏后的成功案例：
        </p>
        <v-expansion-panels>
          <v-expansion-panel v-for="(example, index) in successExamples" :key="index">
            <v-expansion-panel-title>
              <v-icon :icon="example.icon" class="mr-2" />
              {{ example.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ example.content }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card variant="outlined" class="mb-8">
      <v-card-title class="text-h5">常见问题</v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ faq.answer }}</v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <div class="text-center">
      <v-btn color="green" size="large" to="/form" prepend-icon="mdi-file-document-edit">
        填写委托表
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
      <v-btn variant="text" size="large" to="/faq" prepend-icon="mdi-help-circle" class="ml-4">
        查看更多问题
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: '互助流程 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: '了解 DCR 学生互助频道的详细互助流程，从填写委托表到成功加入互助队伍。'
    }
  ]
});

const steps = [
  {
    title: '填写委托表',
    icon: 'mdi-file-document-edit',
    color: 'green',
    description: '在线填写委托表，提供必要的信息。我们会严格保护您的隐私，所有信息仅用于互助服务。',
    details: [
      { icon: 'mdi-form-textbox', text: '填写基本信息和互助需求' },
      { icon: 'mdi-shield-check', text: '所有信息严格保密' },
      { icon: 'mdi-clock-fast', text: '提交后即可进入审核流程' }
    ],
    action: {
      text: '立即填写',
      to: '/form'
    }
  },
  {
    title: '审核',
    icon: 'mdi-check-circle',
    color: 'teal',
    description: '我们会对您的申请进行审核，确保信息真实有效。审核通常在 1-3 个工作日内完成。',
    details: [
      { icon: 'mdi-account-check', text: '核实基本信息' },
      { icon: 'mdi-file-check', text: '评估互助需求' },
      { icon: 'mdi-email', text: '审核结果将通过邮件通知' }
    ]
  },
  {
    title: '考核',
    icon: 'mdi-school',
    color: 'orange-lighten-3',
    description:
      '通过简单的考核，确保您了解互助流程和相关注意事项。考核内容包括基础知识和案例分析。',
    details: [
      { icon: 'mdi-book-open-variant', text: '学习互助教程' },
      { icon: 'mdi-pencil', text: '完成简单测试' },
      { icon: 'mdi-trophy', text: '通过后即可加入' }
    ],
    action: {
      text: '查看教程',
      href: 'https://cloud.dcr.smart-teach.cn'
    }
  },
  {
    title: '加入互助队伍',
    icon: 'mdi-account-group',
    color: 'green-darken-1',
    description:
      '恭喜！您已成功加入 DCR 学生互助频道。现在您可以获得互助服务，也可以帮助其他学生。',
    details: [
      { icon: 'mdi-hand-heart', text: '获得互助服务' },
      { icon: 'mdi-share-variant', text: '分享经验和建议' },
      { icon: 'mdi-heart', text: '参与心理支持活动' }
    ]
  }
];

const successExamples = [
  {
    title: '案例一：成功反映周末补课问题',
    icon: 'mdi-calendar-check',
    content:
      '某学生通过我们的平台反映了学校周末违规补课的问题，在我们的指导下准备了完整的材料，最终教育部门介入调查，学校停止了违规补课行为。'
  },
  {
    title: '案例二：寒假补课得到妥善处理',
    icon: 'mdi-snowflake',
    content:
      '寒假期间，某学校要求学生返校补课。学生通过我们的互助服务，成功向相关部门反映情况，最终学校取消了补课安排，学生得以享受完整的假期。'
  },
  {
    title: '案例三：收费补课问题得到解决',
    icon: 'mdi-currency-cny',
    content:
      '某学校以各种名义收取补课费用，学生通过我们的平台获得了举报指导，最终相关部门责令学校退还所有费用，并对学校进行了处罚。'
  }
];

const faqs = [
  {
    question: '填写委托表需要多长时间？',
    answer: '通常只需要 5-10 分钟即可完成委托表的填写。我们的在线工具会引导您逐步完成。'
  },
  {
    question: '审核需要多久？',
    answer: '审核通常在 1-3 个工作日内完成。如果信息不完整，我们会通过邮件联系您补充。'
  },
  {
    question: '考核难吗？',
    answer:
      '考核内容都是基础知识，只要认真学习教程，都能顺利通过。我们的目的是确保您了解互助流程，而不是为难大家。'
  },
  {
    question: '加入后有什么义务吗？',
    answer: '没有强制义务。我们鼓励大家在获得帮助后，也能帮助其他有需要的学生，但这完全是自愿的。'
  }
];
</script>

<style scoped>
.content {
  padding-top: 80px;
  padding-bottom: 42px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
