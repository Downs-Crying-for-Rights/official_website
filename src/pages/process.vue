<template>
  <div class="content margin-x page-shell">
    <PageHero title="互助流程" subtitle="简单四步，快速加入 DCR 学生互助频道，开启互助之旅。" />

    <v-alert type="info" variant="tonal" class="mt-6 mb-10 rounded-lg" border="start">
      <v-alert-title>流程概览</v-alert-title>
      所有流程均以“无偿、隐私保护、可追踪”为原则。你可以随时查看进展并获取帮助。
    </v-alert>

    <v-timeline side="end" align="start" class="process-timeline">
      <ProcessTimelineStep v-for="(step, index) in steps" :key="step.title" :step="step" :index="index" />
    </v-timeline>

    <v-row class="mt-4" dense>
      <v-col cols="12" md="6">
        <v-card class="info-card h-100" variant="tonal" color="green">
          <v-card-title class="text-h6 d-flex align-center ga-2">
            <v-icon icon="mdi-check-circle" />
            成功案例
          </v-card-title>
          <v-card-text>
            <p class="text-body-2 mb-4 text-medium-emphasis">
              以下内容均已脱敏，展示了平台在不同场景下的互助成效。
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
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="info-card h-100" variant="outlined">
          <v-card-title class="text-h6">常见问题</v-card-title>
          <v-card-text>
            <FaqAccordion :items="faqs" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="cta-card mt-10" border>
      <v-card-text class="d-flex flex-column flex-md-row align-md-center justify-space-between ga-4">
        <div>
          <div class="text-h6 font-weight-bold">准备好开始互助了吗？</div>
          <div class="text-body-2 text-medium-emphasis mt-1">填写委托表后，我们会尽快进入审核流程。</div>
        </div>

        <div class="d-flex flex-wrap ga-3">
          <v-btn color="green" size="large" href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank" prepend-icon="mdi-file-document-edit">
            填写委托表
          </v-btn>
          <v-btn
            color="green"
            size="large"
            variant="outlined"
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=27wt%2BV3jpF1Sh7iV%2BqrRjjR3M8eK96fKLjw%2BDOfHV0C1n2SVPaEKJOSIRtieebZE&busi_data=eyJncm91cENvZGUiOiI2MDk4MTI2MTMiLCJ0b2tlbiI6Im9PcWFBNEo5QnAyOU9HOG4xL3hFTkVhTS9XYnI5VXF3ZlVsY29RZ3dESWgzVnZNcVVOTkdYbkY4T2gvcVZSdEciLCJ1aW4iOiIxMjgyMTA1Njg1In0=&data=FuH6V8EcXOkJVY-dAHIoXKAFvHE9yyYjgW-wn6_vwNtuz0sxmTcdy0lcyonXMfN_3yiDGhtzT1eHvpDacmfycv37MU1w-qtGl-4vrwHwR_s&svctype=5&tempid=h5_group_info"
            target="_blank"
            prepend-icon="mdi-account-group"
          >
            加入审核组
          </v-btn>
          <v-btn variant="text" size="large" to="/faq" prepend-icon="mdi-help-circle">
            查看更多问题
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import type { IProcessStep } from '@/interfaces/IProcessStep';

useHead({
  title: '互助流程 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: '了解 DCR 学生互助频道的详细互助流程，从填写委托表到成功加入互助队伍。'
    }
  ]
});

const steps: IProcessStep[] = [
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
      href: 'https://1kxfhpte.jsjform.com/f/TMcGoz'
    }
  },
  {
    title: '审核',
    icon: 'mdi-check-circle',
    color: 'teal',
    description: '我们会对您的申请进行审核，确保信息真实有效。审核通常在 1-3 个工作日内完成。',

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
  padding-bottom: 56px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-shell {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.process-timeline {
  margin-bottom: 16px;
}

.info-card {
  border-radius: 16px;
}

.cta-card {
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.08),
    rgba(var(--v-theme-surface), 0.95)
  );
}

@media (max-width: 960px) {
  .content {
    padding-top: 72px;
    padding-bottom: 42px;
  }
}
</style>
