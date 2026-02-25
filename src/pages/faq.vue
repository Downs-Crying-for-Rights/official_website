<template>
  <div class="content margin-x">
    <h1 class="text-h3 mb-8">常见问题</h1>

    <v-alert type="info" variant="tonal" class="mb-8">
      <v-alert-title>找不到答案？</v-alert-title>
      如果以下内容没有解答您的疑问，欢迎在群里问我们。
    </v-alert>

    <v-card class="mb-8">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-information-outline" class="mr-2" />
        平台相关
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in platformFaqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="faq.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card class="mb-8">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-book-open-variant" class="mr-2" />
        举报基础知识
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in reportBasicsFaqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="faq.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card class="mb-8">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-map-marker-path" class="mr-2" />
        举报途径
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in reportChannelsFaqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="faq.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card class="mb-8">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-file-document-edit" class="mr-2" />
        委托表相关
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in formFaqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="faq.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card class="mb-8">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-shield-check" class="mr-2" />
        隐私与安全
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in privacyFaqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="faq.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card class="mb-8">
      <v-card-title class="text-h5">
        <v-icon icon="mdi-help-circle" class="mr-2" />
        其他问题
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in otherFaqs" :key="index">
            <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="faq.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card variant="tonal" color="green-lighten-5">
      <v-card-title class="text-high-emphasis">还有其他问题？</v-card-title>
      <v-card-text>
        <p class="mb-4 text-high-emphasis">如果以上内容没有解答您的疑问，您可以：</p>
        <div class="d-flex flex-wrap ga-4">
          <v-btn color="green" href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank" prepend-icon="mdi-message-text">
            填写反馈表
          </v-btn>
          <v-btn
            color="green"
            variant="outlined"
            href="https://cloud.dcr.smart-teach.cn"
            target="_blank"
            prepend-icon="mdi-download"
          >
            查看文档
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: '常见问题 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: '查看 DCR 学生互助频道的常见问题解答，包括平台使用、举报流程等。'
    }
  ]
});

const platformFaqs = [
  {
    question: 'DCR 是什么？',
    answer:
      'DCR 是学生互助频道的代号，是一个面向学生的互助平台。自 2023 年成立以来，我们致力于为那些对学校违规补课心存不满、渴望互助，却因种种顾虑不便举报的学生们，搭建一个提供无偿帮助的温暖平台。'
  },
  {
    question: '平台收费吗？',
    answer:
      '<strong>不收费！</strong>我们承诺永久免费提供所有服务。任何以 DCR 名义收费的行为都是欺诈，请立即<a href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank">填写反馈表</a>举报。'
  },
  {
    question: 'DCR 是一个组织吗？',
    answer:
      'DCR 是该频道的代号，其内容并不代表任何法人实体。我们是一个由学生自发组织的互助社区，不隶属于任何组织或机构。'
  },
  {
    question: '如何加入 DCR？',
    answer:
      '加入流程很简单：<ol class="ml-6 mt-2"><li>填写委托表</li><li>等待审核（1-3个工作日）</li><li>通过考核</li><li>成功加入互助队伍</li></ol>'
  },
  {
    question: '平台提供哪些服务？',
    answer:
      '我们提供：<ul class="ml-6 mt-2"><li>委托表生成器</li><li>互助教程与文档下载</li><li>心理支持服务</li><li>经验分享与交流</li></ul>'
  }
];

const reportBasicsFaqs = [
  {
    question: '什么样的补课属于违规？',
    answer:
      '根据教育部相关规定，以下情况属于违规补课：<ul class="ml-6 mt-2"><li>利用节假日、双休日、寒暑假组织学生集体补课</li><li>强制或变相强制学生参加有偿补课</li><li>与校外培训机构合作进行有偿补课</li><li>在职教师组织或参与有偿补课</li></ul>'
  },
  {
    question: '举报需要准备什么材料？',
    answer:
      '建议准备以下材料：<ul class="ml-6 mt-2"><li>补课通知或要求的截图/照片</li><li>补课时间、地点的记录</li><li>收费凭证（如有）</li><li>其他相关证据</li></ul>原则上材料越详细，举报成功率越高。'
  },
  {
    question: '举报会被发现吗？',
    answer:
      '正规的举报渠道都会保护举报人的隐私。通过我们的互助平台，可以进一步降低被发现的风险。我们会指导您如何安全地收集证据和提交举报。'
  },
  {
    question: '举报后会有什么结果？',
    answer:
      '举报后，相关部门会进行调查核实。如果情况属实，学校可能会受到：<ul class="ml-6 mt-2"><li>责令停止违规行为</li><li>通报批评</li><li>取消评优资格</li><li>退还违规收费</li><li>对相关责任人进行处理</li></ul>'
  }
];

const reportChannelsFaqs = [
  {
    question: '可以向哪些部门举报？',
    answer:
      '主要举报渠道包括：<ul class="ml-6 mt-2"><li>当地教育局</li><li>教育部门举报电话</li><li>12345 政务服务热线</li><li>教育部官网举报平台</li><li>省级教育厅官网</li></ul>具体联系方式可在我们的文档站查询。'
  },
  {
    question: '网络举报和电话举报哪个更好？',
    answer:
      '各有优势：<ul class="ml-6 mt-2"><li><strong>网络举报</strong>：可以上传证据材料，有记录可查，更正式</li><li><strong>电话举报</strong>：更快捷，可以直接沟通，但需要做好记录</li></ul>建议优先选择网络举报，并保留好举报记录。'
  }
];

const formFaqs = [
  {
    question: '填写委托表需要多长时间？',
    answer: '通常只需要 5-10 分钟即可完成。我们的在线工具会引导您逐步填写所需信息。'
  },
  {
    question: '委托表可以修改吗？',
    answer: '提交前可以随时修改。提交后如需修改，使用<a href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank">委托表生成器</a>重新生成后交给 bot 审核即可。'
  },
  {
    question: '必须使用真实姓名吗？',
    answer: '为了保护您的隐私，可以使用昵称。但联系方式必须真实有效，以便我们与您沟通。'
  },
  {
    question: '提交后多久会有回复？',
    answer: '我们会在 1-3 个工作日内完成审核，并通过您提供的联系方式通知审核结果。'
  }
];

const privacyFaqs = [
  {
    question: '我的信息会被泄露吗？',
    answer:
      '不会。我们承诺：<ul class="ml-6 mt-2"><li>严格保护用户隐私</li><li>不会泄露给任何第三方</li><li>采用加密技术保护数据</li><li>仅用于提供互助服务</li></ul>'
  },
  {
    question: '如何确保举报不被发现？',
    answer:
      '我们会提供详细的安全指导：<ul class="ml-6 mt-2"><li>如何安全收集证据</li><li>如何选择合适的举报时机</li><li>如何避免暴露身份</li><li>如何应对可能的调查</li></ul>详细内容请查看我们的教程文档。'
  },
  {
    question: '可以删除我的信息吗？',
    answer: '可以。您有权随时要求查看、修改或删除您的个人信息。请通过<a href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank">反馈表</a>联系我们提出申请。'
  }
];

const otherFaqs = [
  {
    question: '加入后有什么义务吗？',
    answer: '没有强制义务。我们鼓励大家在获得帮助后，也能帮助其他有需要的学生，但这完全是自愿的。'
  },
  {
    question: '可以退出吗？',
    answer: '可以随时退出。如需退出，请通过<a href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank">反馈表</a>联系我们，我们会删除您的相关信息。'
  },
  {
    question: '如何联系平台？',
    answer:
      '您可以通过以下方式联系我们：<ul class="ml-6 mt-2"><li><a href="https://1kxfhpte.jsjform.com/f/TMcGoz" target="_blank">反馈表</a></li><li>文档站：<a href="https://cloud.dcr.smart-teach.cn" target="_blank">https://cloud.dcr.smart-teach.cn</a></li></ul>'
  },
  {
    question: '平台会一直运营下去吗？',
    answer:
      '我们会尽力维持平台的长期运营。即使未来因各种原因无法继续，我们也会提前通知，并妥善处理用户数据。'
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
