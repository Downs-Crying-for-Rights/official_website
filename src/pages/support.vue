<template>
  <div class="content margin-x">
    <h1 class="text-h3 mb-8">心灵加油站</h1>

    <v-alert type="info" variant="tonal" class="mb-8">
      <v-alert-title>欢迎来到心灵加油站</v-alert-title>
      这里是一个安全、温暖、私密的倾诉空间。我们理解您在面对学业压力和各种困扰时的心情，
      希望能为您提供一些心理支持和情感慰藉。
    </v-alert>

    <v-card class="mb-8" variant="outlined">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-heart" class="mr-2" />
        我们能为您做什么
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4 h-100">
              <v-icon icon="mdi-account-voice" size="large" color="green" class="mb-2" />
              <h3 class="text-h6 mb-2">倾听与陪伴</h3>
              <p>提供一个安全的空间，让您可以自由表达内心的想法和感受</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4 h-100">
              <v-icon icon="mdi-lightbulb-on" size="large" color="teal" class="mb-2" />
              <h3 class="text-h6 mb-2">建议与引导</h3>
              <p>根据您的情况，提供一些应对压力和困扰的建议</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4 h-100">
              <v-icon icon="mdi-account-group" size="large" color="green-darken-1" class="mb-2" />
              <h3 class="text-h6 mb-2">同伴支持</h3>
              <p>连接有相似经历的同学，让您知道您并不孤单</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="flat" class="pa-4 h-100">
              <v-icon icon="mdi-book-open-variant" size="large" color="orange" class="mb-2" />
              <h3 class="text-h6 mb-2">资源推荐</h3>
              <p>推荐一些心理健康相关的文章、书籍和资源</p>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mb-8" variant="tonal" color="green">
      <v-card-title class="text-h5">常见心理困扰</v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(issue, index) in commonIssues" :key="index">
            <v-expansion-panel-title>
              <v-icon :icon="issue.icon" class="mr-2" />
              {{ issue.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="mb-4">{{ issue.description }}</p>
              <div class="mb-2"><strong>应对建议：</strong></div>
              <ul class="ml-6">
                <li v-for="(tip, i) in issue.tips" :key="i" class="mb-2">{{ tip }}</li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card class="mb-8" variant="outlined">
      <v-card-title class="text-h5">心理健康小贴士</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(tip, index) in healthTips" :key="index" :prepend-icon="tip.icon">
            <v-list-item-title>{{ tip.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ tip.description }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-alert type="warning" variant="tonal" class="mb-8">
      <v-alert-title>重要提示</v-alert-title>
      <p class="mb-2">我们提供的是同伴支持和情感陪伴，<strong>不是专业的心理咨询服务</strong>。</p>
      <p class="mb-2">
        如果您遇到严重的心理问题，如持续的抑郁、焦虑、自伤倾向等，
        请务必寻求专业心理咨询师或医生的帮助。
      </p>
      <p>
        <strong>紧急情况请拨打：</strong>
      </p>
      <ul class="ml-6">
        <li>心理援助热线：12355（青少年服务热线）</li>
        <li>心理危机干预热线：010-82951332</li>
        <li>紧急情况：110 或 120</li>
      </ul>
    </v-alert>

    <v-card variant="tonal" color="green">
      <v-card-title class="text-h5">推荐资源</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(resource, index) in resources"
            :key="index"
            :prepend-icon="resource.icon"
            :href="resource.link"
            target="_blank"
          >
            <v-list-item-title>{{ resource.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ resource.description }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <div class="text-center mt-8">
      <p class="text-h6 mb-4">需要倾诉或寻求支持？</p>
      <v-btn color="green" size="large" href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank" prepend-icon="mdi-message-text"> 联系我们 </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: '心灵加油站 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: '为学生提供心理支持和情感陪伴的温暖空间。'
    }
  ]
});

const commonIssues = [
  {
    title: '学业压力',
    icon: 'mdi-book-open-variant',
    description: '面对繁重的学业任务和考试压力，感到焦虑和疲惫。',
    tips: [
      '制定合理的学习计划，避免过度劳累',
      '学会适当放松，保证充足的睡眠',
      '与老师或家长沟通，寻求帮助',
      '记住：成绩不是衡量价值的唯一标准'
    ]
  },
  {
    title: '人际关系困扰',
    icon: 'mdi-account-group',
    description: '与同学、老师或家人的关系出现问题，感到孤独或被误解。',
    tips: [
      '尝试主动沟通，表达自己的真实想法',
      '学会换位思考，理解他人的立场',
      '寻找志同道合的朋友，建立支持网络',
      '必要时寻求老师或心理咨询师的帮助'
    ]
  },
  {
    title: '情绪困扰',
    icon: 'mdi-emoticon-sad',
    description: '经常感到焦虑、抑郁、愤怒或其他负面情绪。',
    tips: [
      '允许自己有情绪，不要压抑',
      '找到适合自己的情绪宣泄方式（运动、写日记等）',
      '与信任的人分享感受',
      '如果情绪持续影响生活，请寻求专业帮助'
    ]
  },
  {
    title: '自我认同困惑',
    icon: 'mdi-account-question',
    description: '对自己的价值、能力或未来方向感到迷茫。',
    tips: [
      '探索自己的兴趣和特长',
      '接纳不完美的自己',
      '设定小目标，逐步建立自信',
      '记住：每个人都有自己的节奏和道路'
    ]
  }
];

const healthTips = [
  {
    title: '保持规律作息',
    icon: 'mdi-clock-outline',
    description: '充足的睡眠对心理健康至关重要'
  },
  {
    title: '适度运动',
    icon: 'mdi-run',
    description: '运动可以释放压力，改善情绪'
  },
  {
    title: '培养兴趣爱好',
    icon: 'mdi-palette',
    description: '做自己喜欢的事情，找到生活的乐趣'
  },
  {
    title: '保持社交联系',
    icon: 'mdi-account-multiple',
    description: '与朋友和家人保持良好的关系'
  },
  {
    title: '学会放松',
    icon: 'mdi-meditation',
    description: '尝试冥想、深呼吸等放松技巧'
  },
  {
    title: '寻求帮助',
    icon: 'mdi-hand-heart',
    description: '遇到困难时，不要独自承受'
  }
];

const resources = [
  {
    title: '青少年心理健康知识',
    icon: 'mdi-book-open-variant',
    description: '了解青少年常见的心理问题和应对方法',
    link: '#'
  },
  {
    title: '压力管理技巧',
    icon: 'mdi-brain',
    description: '学习有效的压力管理和情绪调节方法',
    link: '#'
  },
  {
    title: '正念冥想指南',
    icon: 'mdi-meditation',
    description: '通过正念练习改善心理状态',
    link: '#'
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
