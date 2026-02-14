<template>
  <!-- 主要介绍 -->
  <div class="introduction-container">
    <div class="introduction d-flex flex-column margin-x" style="z-index: 1">
      <div class="introduction-col description">
        <div class="brand-home">
          <h1 class="brand-title">DCR 学生互助频道</h1>
        </div>
        <div class="feature-main">
          <span>一个</span>
          <span class="feature-pill">
            <span
              v-for="i in featureTags"
              v-bind:key="i.title"
              :class="`gradient-base feature-pill-item ${i.selected ? 'selected-pill' : ''}`"
              :style="`background-image: linear-gradient(135deg, ${i.gradientStart}, ${i.gradientEnd});`"
              >{{ i.title }}</span
            >
          </span>
          <br />
          <span>的学生互助社区</span>
        </div>
        <div class="d-flex ga-4 flex-wrap mt-8">
          <v-btn to="/form" color="green" prepend-icon="mdi-file-document-edit" size="large"
            >填写委托表</v-btn
          >
          <v-btn
            color="green"
            variant="outlined"
            prepend-icon="mdi-account-group"
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=27wt%2BV3jpF1Sh7iV%2BqrRjjR3M8eK96fKLjw%2BDOfHV0C1n2SVPaEKJOSIRtieebZE&busi_data=eyJncm91cENvZGUiOiI2MDk4MTI2MTMiLCJ0b2tlbiI6Im9PcWFBNEo5QnAyOU9HOG4xL3hFTkVhTS9XYnI5VXF3ZlVsY29RZ3dESWgzVnZNcVVOTkdYbkY4T2gvcVZSdEciLCJ1aW4iOiIxMjgyMTA1Njg1In0=&data=FuH6V8EcXOkJVY-dAHIoXKAFvHE9yyYjgW-wn6_vwNtuz0sxmTcdy0lcyonXMfN_3yiDGhtzT1eHvpDacmfycv37MU1w-qtGl-4vrwHwR_s&svctype=5&tempid=h5_group_info"
            target="_blank"
            size="large"
          >
            加入审核组
          </v-btn>
          <v-btn
            to="/about"
            color="green"
            variant="text"
            prepend-icon="mdi-information"
            size="large"
            >了解更多</v-btn
          >
        </div>
      </div>
    </div>
  </div>

  <v-sheet class="content">
    <h2 class="headline-feature text-center">
      <span
        class="gradient-base"
        style="background-image: linear-gradient(135deg, #e53935, #ef5350)"
        >温暖</span
      >
      <span>的互助平台</span>
    </h2>
    <div class="margin-x ga-4">
      <h3 class="text-h5">平台定位</h3>
      <p class="mt-4">
        DCR，即学生互助频道，自 2023
        年成立以来，频道一直致力于为那些对学校违规补课心存不满、渴望互助，
        却因种种顾虑不便举报的学生们，搭建一个提供无偿帮助的温暖平台。
      </p>
      <p class="mt-2 text-h6 font-weight-bold" style="color: #4caf50">收费不存在</p>
    </div>

    <div class="mt-16 margin-x">
      <h3 class="text-h5 mb-4">平台特色服务</h3>
      <div class="d-flex flex-wrap ga-4">
        <v-card
          v-for="feature in platformFeatures"
          :key="feature.title"
          variant="outlined"
          color="green"
          class="feature-card-divided"
        >
          <v-card-item>
            <v-icon :icon="feature.icon" size="large" />
          </v-card-item>
          <v-card-title>{{ feature.title }}</v-card-title>
          <v-card-text>{{ feature.description }}</v-card-text>
        </v-card>
      </div>
    </div>
  </v-sheet>

  <div class="content">
    <h2 class="headline-feature text-center">
      <span
        class="gradient-base"
        style="background-image: linear-gradient(135deg, #1976d2, #42a5f5)"
        >专业</span
      >
      <span>的互助流程</span>
    </h2>
    <div class="d-flex flex-1-1 align-content-center margin-x flex-wrap ga-8">
      <div class="d-flex flex-column ga-4 flex-grow-1 flex-wrap" style="flex-basis: 375px">
        <h3 class="text-h5">简单四步，加入互助</h3>
        <p>我们为您提供清晰的互助流程，让您轻松参与到学生互助中来。</p>
        <div class="d-flex flex-column ga-4">
          <v-card
            v-for="(step, index) in processSteps"
            :key="step.title"
            variant="flat"
            :prepend-icon="step.icon"
            class="flex-grow-1"
          >
            <v-card-title>步骤 {{ index + 1 }}: {{ step.title }}</v-card-title>
            <v-card-text>{{ step.description }}</v-card-text>
          </v-card>
        </div>
      </div>
      <div class="flex-grow-1 align-self-center d-flex flex-column ga-4" style="flex-basis: 375px">
        <v-alert type="info" variant="tonal">
          <v-alert-title>互助承诺</v-alert-title>
          我们承诺为每一位学生提供无偿、专业的互助服务，保护您的隐私安全。
        </v-alert>
        <v-btn color="green" size="large" to="/process" prepend-icon="mdi-arrow-right">
          查看详细流程
        </v-btn>
      </div>
    </div>
  </div>

  <v-sheet class="content">
    <h2 class="headline-feature text-center">
      <span
        class="gradient-base"
        style="background-image: linear-gradient(135deg, #26a69a, #4db6ac)"
        >易用</span
      >
      <span>的工具支持</span>
    </h2>

    <div class="d-flex flex-1-1 align-content-center margin-x flex-wrap ga-8">
      <div class="flex-grow-1" style="flex-basis: 375px">
        <h3 class="text-h5 mb-4">委托表生成器</h3>
        <p class="mb-4">在线填写委托表，快速生成规范的互助申请表格，简化您的操作流程。</p>
        <v-btn color="green" to="/form" prepend-icon="mdi-file-document-edit"> 立即填写 </v-btn>
      </div>
      <div class="flex-grow-1" style="flex-basis: 375px">
        <h3 class="text-h5 mb-4">AI 智能助手</h3>
        <p class="mb-4">智能 AI bot 协助您完成互助材料的准备工作，提供专业建议和指导。</p>
        <v-chip color="green" variant="outlined">即将上线</v-chip>
      </div>
    </div>

    <div class="d-flex flex-1-1 align-content-center margin-x flex-wrap ga-8 mt-12">
      <div class="flex-grow-1" style="flex-basis: 375px">
        <h3 class="text-h5 mb-4">文档下载站</h3>
        <p class="mb-4">
          由智教联盟支持的 DCR 公开文件下载站，提供详细的互助教程、途径说明和成功案例。
        </p>
        <v-btn
          color="green"
          href="https://cloud.dcr.smart-teach.cn"
          target="_blank"
          prepend-icon="mdi-download"
        >
          访问下载站
        </v-btn>
      </div>
      <div class="flex-grow-1" style="flex-basis: 375px">
        <h3 class="text-h5 mb-4">心灵加油站</h3>
        <p class="mb-4">为大家提供一个安全、温暖、私密的倾诉空间，促进心理健康。</p>
        <v-btn color="green" to="/support" prepend-icon="mdi-heart"> 了解详情 </v-btn>
      </div>
    </div>
  </v-sheet>

  <div class="content">
    <h2 class="headline-feature text-center">
      <span
        class="gradient-base"
        style="background-image: linear-gradient(135deg, #ffa726, #ffb74d)"
        >未来</span
      >
      <span>的功能规划</span>
    </h2>

    <div class="margin-x">
      <p class="text-center mb-8">我们正在努力开发更多功能，为您提供更好的服务体验</p>
      <div class="d-flex flex-wrap ga-4 justify-center">
        <v-card
          v-for="future in futureFeatures"
          :key="future.title"
          variant="outlined"
          class="feature-card-small"
        >
          <v-card-item>
            <v-icon :icon="future.icon" />
          </v-card-item>
          <v-card-title>{{ future.title }}</v-card-title>
          <v-card-text>{{ future.description }}</v-card-text>
        </v-card>
      </div>
    </div>
  </div>

  <v-sheet class="content">
    <h2 class="headline-feature text-center">
      <span
        class="gradient-base"
        style="background-image: linear-gradient(135deg, #2e7d32, #388e3c)"
        >真实</span
      >
      <span>的用户反馈</span>
    </h2>

    <div class="margin-x">
      <p class="text-center mb-8">来自使用过我们服务的学生的真实评价</p>
      <div class="d-flex flex-wrap ga-4">
        <v-card
          v-for="review in userReviews"
          :key="review.content"
          variant="tonal"
          class="flex-grow-1"
          style="flex-basis: 300px"
        >
          <v-card-text>
            <v-icon icon="mdi-format-quote-open" class="mb-2" />
            <p>{{ review.content }}</p>
            <v-icon icon="mdi-format-quote-close" class="mt-2" />
          </v-card-text>
          <v-card-actions>
            <v-rating
              :model-value="review.rating"
              readonly
              density="compact"
              color="yellow-darken-2"
            />
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-sheet>

  <div class="content">
    <h2 class="headline-feature text-center">
      <span
        class="gradient-base"
        style="background-image: linear-gradient(135deg, #2e7d32, #43a047)"
        >友情</span
      >
      <span>链接</span>
    </h2>

    <div class="margin-x">


      <!-- 友情链接 -->
      <div>

        <div class="d-flex flex-wrap ga-4 justify-center">
          <v-card
            v-for="link in friendlyLinks"
            :key="link.name"
            variant="outlined"
            class="friendly-link-card"
            :href="link.url"
            target="_blank"
          >
            <v-card-item>
              <div class="d-flex align-center ga-3">
                <v-avatar size="48" rounded="lg" color="grey-lighten-3" v-if="link.icon">
                  <span class="text-h6">{{ link.icon }}</span>
                </v-avatar>
                <div>
                  <v-card-title class="text-body-1">{{ link.name }}</v-card-title>
                  <v-card-subtitle class="text-caption">{{ link.category }}</v-card-subtitle>
                </div>
              </div>
            </v-card-item>
            <v-card-text class="text-body-2">
              {{ link.description }}
            </v-card-text>
          </v-card>
        </div>
        <p class="text-center mt-6 text-caption text-grey">
          上述项目与 DCR 无直接关系。
        </p>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="margin-x d-flex flex-column ga-8 align-center">
      <span class="text-h5">准备好开始互助了吗？</span>
      <div class="d-flex flex-row ga-2 flex-wrap justify-center">
        <v-btn flat color="green" prepend-icon="mdi-file-document-edit" to="/form" size="large">
          填写委托表
        </v-btn>
        <v-btn
          flat
          color="green"
          variant="outlined"
          prepend-icon="mdi-account-group"
          href="https://qun.qq.com/universal-share/share?ac=1&authKey=27wt%2BV3jpF1Sh7iV%2BqrRjjR3M8eK96fKLjw%2BDOfHV0C1n2SVPaEKJOSIRtieebZE&busi_data=eyJncm91cENvZGUiOiI2MDk4MTI2MTMiLCJ0b2tlbiI6Im9PcWFBNEo5QnAyOU9HOG4xL3hFTkVhTS9XYnI5VXF3ZlVsY29RZ3dESWgzVnZNcVVOTkdYbkY4T2gvcVZSdEciLCJ1aW4iOiIxMjgyMTA1Njg1In0=&data=FuH6V8EcXOkJVY-dAHIoXKAFvHE9yyYjgW-wn6_vwNtuz0sxmTcdy0lcyonXMfN_3yiDGhtzT1eHvpDacmfycv37MU1w-qtGl-4vrwHwR_s&svctype=5&tempid=h5_group_info"
          target="_blank"
          size="large"
        >
          加入审核组
        </v-btn>
        <v-btn flat prepend-icon="mdi-help-circle" to="/faq" size="large"> 查看常见问题 </v-btn>
      </div>
      <v-alert type="warning" variant="tonal" class="mt-4">
        <v-alert-title>免责声明</v-alert-title>
        <p class="mb-2">DCR 是该频道的代号，其内容并不代表任何法人实体。</p>
        <p class="mb-2"><strong>本平台不组织、不指挥、不实施任何举报或投诉行为。</strong></p>
        <p>所有用户行为均为个人自主决定，平台不承担任何责任。</p>
        <v-btn variant="text" color="green" size="small" to="/disclaimer" class="mt-2">
          查看完整免责声明
        </v-btn>
      </v-alert>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 64px;
  font-weight: 500;
}

.content {
  padding-top: 42px;
  padding-bottom: 42px;
}

.introduction {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  .description {
    margin-top: 10vh;
  }
}

.brand-home {
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 60px;
  }
}

.introduction-col {
  min-width: 400px;
  flex-basis: 480px;

  @media (max-width: 600px) {
    min-width: 100%;
    flex-basis: 100%;
  }
}

.brand-title {
  font-size: 52px;

  @media (max-width: 675px) {
    font-size: 42px;
  }
}

.feature-pill-item {
  -webkit-animation-delay: 0s, 2s;
  animation-delay: 0s, 2s;
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  display: none;
  white-space: nowrap;
  align-self: center;
}

.selected-pill {
  -webkit-animation-name: labelSlideIn, labelSlideOut;
  animation-name: labelSlideIn, labelSlideOut;
  display: -ms-inline-flexbox;
  display: inline-flex;
  align-self: center;
}

.headline-feature {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
}

@keyframes labelSlideOut {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 100%;
  }

  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes labelSlideIn {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 100%;
  }
}

.feature-pill {
  font-size: 42px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 28px;
  }
}

.feature-main {
  font-size: 42px;
  line-height: 54px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
  }
}

.introduction-container {
  background: linear-gradient(135deg, #c8e6c9, #dcedc8);
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.gradient-base {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-card-divided {
  flex-basis: 300px;
  flex-grow: 1;
}

.feature-card-small {
  flex-basis: 250px;
  max-width: 300px;
}

.partner-card-large {
  max-width: 1000px;
}

.partners-full-image {
  width: 100%;
  border-radius: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.friendly-link-card {
  flex-basis: 300px;
  max-width: 350px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.friendly-link-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'DCR 学生互助频道 - 温暖、免费、专业的学生互助社区',
  meta: [
    {
      name: 'description',
      content:
        'DCR 学生互助频道是一个面向学生的互助平台，提供违规补课举报互助、委托表生成、AI 辅助等服务。'
    }
  ]
});

const featureTags = ref([
  {
    selected: true,
    title: '温暖',
    gradientStart: '#2E7D32',
    gradientEnd: '#43A047'
  },
  {
    selected: false,
    title: '免费',
    gradientStart: '#388E3C',
    gradientEnd: '#4CAF50'
  },
  {
    selected: false,
    title: '专业',
    gradientStart: '#00796B',
    gradientEnd: '#26A69A'
  },
  {
    selected: false,
    title: '易用',
    gradientStart: '#F57C00',
    gradientEnd: '#FB8C00'
  },
  {
    selected: false,
    title: '轻松上手',
    gradientStart: '#2E7D32',
    gradientEnd: '#388E3C'
  }
]);

const platformFeatures = [
  {
    title: '委托表生成器',
    icon: 'mdi-file-document-edit',
    description: '在线填写委托表，快速生成规范的互助表'
  },
  {
    title: 'AI bot',
    icon: 'mdi-robot',
    description: '智能AI bot协助您完成互助材料的准备工作'
  },
  {
    title: '互助教程',
    icon: 'mdi-book-open-variant',
    description: '详细的互助教程、途径说明和成功案例'
  },
  {
    title: '文档下载',
    icon: 'mdi-download',
    description: '由智教联盟支持的DCR公开文件下载站'
  },
  {
    title: '心灵加油站',
    icon: 'mdi-heart',
    description: '为大家提供一个安全、温暖、私密的倾诉空间'
  }
];

const processSteps = [
  {
    title: '填写委托表',
    icon: 'mdi-file-document-edit',
    description: '在线填写委托表，提供必要的信息'
  },
  {
    title: '审核',
    icon: 'mdi-check-circle',
    description: '我们会对您的申请进行审核'
  },
  {
    title: '考核',
    icon: 'mdi-school',
    description: '通过简单的考核，确保您了解互助流程'
  },
  {
    title: '加入互助',
    icon: 'mdi-account-group',
    description: '成功加入互助队伍，开始互助之旅'
  }
];

const futureFeatures = [
  {
    title: '各类小游戏',
    icon: 'mdi-gamepad-variant',
    description: '更贴合实际场景的互助小游戏'
  },
  {
    title: 'AI守护群聊',
    icon: 'mdi-shield-check',
    description: 'AI自动检测违规消息并做出处理'
  },
  {
    title: '线上互助网站',
    icon: 'mdi-web',
    description: 'DCR专属论坛，不再受限于平台'
  }
];

const userReviews = [
  {
    content: '非常感谢DCR提供的帮助，让我能够勇敢地反映问题。',
    rating: 5
  },
  {
    content: '平台很专业，流程清晰，工作人员态度很好。',
    rating: 5
  },
  {
    content: '终于找到了一个可以信赖的互助平台，真的很温暖。',
    rating: 5
  }
];

const friendlyLinks = [
  {
    name: '智教联盟',
    category: 'SmartTeachCN',
    description: '天津静海汇智单创文化发展有限公司下属的独立公益性组织，致力于为教学辅助类应用提供全方面扶持与帮助，为全国最大的电教委在线交流平台。',
    url: 'https://forum.smart-teach.cn/'
  },
  {
    name: 'ClassIsland',
    icon: 'CI',
    category: '课表显示工具',
    description: '适用于班级多媒体屏幕的课表信息显示工具，可在 Windows PC、Mac 及 Linux 设备上显示各种信息',
    url: 'https://www.classisland.tech/'
  },
  {
    name: 'Class Widgets 2',
    icon: 'CW',
    category: '电子化课程表',
    description: '新一代的电子化课程表展示工具，基于比前代更新的架构与设计语言重写',
    url: 'https://github.com/RinLit-233-shiroko/Class-Widgets-2?tab=readme-ov-file'
  },
  {
    name: 'Awesome IWB',
    icon: 'AI',
    category: '教学打造工具',
    description: '专为广大中小学电教打造的班级素养打/数字白板/班牌通一站式软件推荐单和实用知识手册',
    url: 'https://github.com/awesome-iwb/awesome-iwb'
  }
];

onMounted(() => {
  setInterval(() => {
    let ft = featureTags.value;
    let b = false;
    for (let i in ft) {
      if (b == true) {
        b = false;
        ft[i].selected = true;
        break;
      }

      if (ft[i].selected) {
        b = true;
        ft[i].selected = false;
      }
    }
    if (b) {
      ft[0].selected = true;
    }
    featureTags.value = ft;
  }, 2250);
});
</script>
