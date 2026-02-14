<template>
  <div class="content margin-x">
    <h1 class="text-h3 mb-8">免责声明与平台规则</h1>

    <v-alert type="warning" variant="tonal" class="mb-8">
      <v-alert-title>重要提示</v-alert-title>
      <p><strong>请仔细阅读以下内容，使用本平台即表示您已完全理解并同意以下所有条款。</strong></p>
    </v-alert>

    <!-- 一、平台性质说明 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-green-lighten-5">
        <v-icon icon="mdi-information" class="mr-2" />
        一、平台性质说明
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4">
          本平台为<strong>学生权益信息互助与政策学习平台</strong>，旨在帮助用户了解教育相关政策法规、合规反映渠道与风险提示，
          并为有共同困扰的学生提供信息层面的互助与经验交流。
        </p>
        <p class="mb-4">
          <strong class="text-error"
            >本平台不组织、不指挥、不实施任何举报、投诉、反映、对抗或其他具体行动。</strong
          >
        </p>
        <p>所有用户的行为均为其个人自发决定，与平台无直接或间接隶属、代理或指令关系。</p>
      </v-card-text>
    </v-card>

    <!-- 二、平台不承担的行为边界 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-orange-lighten-5">
        <v-icon icon="mdi-alert-circle" class="mr-2" />
        二、平台不承担的行为边界
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4"><strong>本平台不提供、也不支持以下内容或行为：</strong></p>
        <v-list>
          <v-list-item prepend-icon="mdi-close-circle" class="text-error">
            <v-list-item-title>任何形式的造谣、捏造事实、夸大情节</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-close-circle" class="text-error">
            <v-list-item-title
              >针对个人（包括教师、学生、家长、工作人员等）的辱骂、威胁、骚扰或报复</v-list-item-title
            >
          </v-list-item>
          <v-list-item prepend-icon="mdi-close-circle" class="text-error">
            <v-list-item-title
              >发布或传播他人个人信息（如姓名、手机号、身份证号、住址、班级、学号、账号信息等）</v-list-item-title
            >
          </v-list-item>
          <v-list-item prepend-icon="mdi-close-circle" class="text-error">
            <v-list-item-title
              >教授、引导或暗示任何规避法律责任、逃避调查、对抗监管的方式</v-list-item-title
            >
          </v-list-item>
          <v-list-item prepend-icon="mdi-close-circle" class="text-error">
            <v-list-item-title
              >将平台内容用于与教育权益无关的政治、商业或其他用途</v-list-item-title
            >
          </v-list-item>
        </v-list>
        <p class="mt-4">
          <strong>如用户行为超出上述边界，平台有权采取包括但不限于：</strong>
          内容删除、账号限制、封禁、配合调查等措施。
        </p>
      </v-card-text>
    </v-card>

    <!-- 三、关于"互助"的边界说明 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-blue-lighten-5">
        <v-icon icon="mdi-hand-heart" class="mr-2" />
        三、关于"互助"的边界说明
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4"><strong>平台中提及的"互助"仅指：</strong></p>
        <v-list>
          <v-list-item prepend-icon="mdi-check-circle" color="green">
            <v-list-item-title>信息经验分享</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check-circle" color="green">
            <v-list-item-title>政策条文解读</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check-circle" color="green">
            <v-list-item-title>合规流程说明</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check-circle" color="green">
            <v-list-item-title>风险提示与注意事项</v-list-item-title>
          </v-list-item>
        </v-list>
        <p class="mt-4">
          <strong class="text-warning">平台不保证任何行为结果</strong
          >，不对用户的举报、反映、沟通、申诉等行为的成功与否承担责任。
        </p>
        <p class="mt-2">任何用户基于平台信息所作出的行为，均视为其在充分理解风险后的自主决定。</p>
      </v-card-text>
    </v-card>

    <!-- 四、内容真实性与责任归属 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-purple-lighten-5">
        <v-icon icon="mdi-file-document-check" class="mr-2" />
        四、内容真实性与责任归属
      </v-card-title>
      <v-card-text class="pt-4">
        <v-list>
          <v-list-item prepend-icon="mdi-information">
            <v-list-item-title>平台内容主要来源于用户自行发布</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-information">
            <v-list-item-title>平台无法、也不对用户发布内容的真实性作出保证</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-information">
            <v-list-item-title
              ><strong>用户应对其发布的内容承担全部法律责任</strong></v-list-item-title
            >
          </v-list-item>
        </v-list>
        <p class="mt-4">
          平台在接到合理举报或发现明显违规内容后，将依据平台规则进行处理，
          但该处理不构成对内容真实性的认可或背书。
        </p>
      </v-card-text>
    </v-card>

    <!-- 五、个人信息与隐私保护声明 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-teal-lighten-5">
        <v-icon icon="mdi-shield-lock" class="mr-2" />
        五、个人信息与隐私保护声明
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4"><strong>平台遵循最小必要原则：</strong></p>
        <v-list>
          <v-list-item prepend-icon="mdi-check">
            <v-list-item-title>不强制要求用户提供真实姓名、手机号、身份证等信息</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check">
            <v-list-item-title
              >不鼓励、也不建议用户在公开区域上传含有个人信息的材料</v-list-item-title
            >
          </v-list-item>
          <v-list-item prepend-icon="mdi-check">
            <v-list-item-title>平台将尽合理努力阻止明显的隐私泄露内容发布</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check">
            <v-list-item-title
              ><strong>委托表生成工具不会保存任何用户填写的信息</strong></v-list-item-title
            >
          </v-list-item>
        </v-list>
        <v-alert type="warning" variant="tonal" class="mt-4">
          <v-alert-title>请用户理解</v-alert-title>
          <p>
            任何公开或半公开的网络交流均存在风险，
            <strong>平台无法对用户自行披露的信息后果承担责任</strong>。
          </p>
        </v-alert>
      </v-card-text>
    </v-card>

    <!-- 六、未成年人特别提示 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-pink-lighten-5">
        <v-icon icon="mdi-account-child" class="mr-2" />
        六、未成年人特别提示
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4">
          本平台用户中可能包含未成年人。平台已通过规则提示、内容限制等方式，尽力降低风险。
        </p>
        <p class="mb-4">
          <strong class="text-warning">
            平台不鼓励任何未成年人进行冲动、对抗性或高风险行为。
          </strong>
        </p>
        <p>如遇严重纠纷或压力，建议优先寻求监护人、教师、学校正式渠道或法律援助。</p>
      </v-card-text>
    </v-card>

    <!-- 七、平台管理与处置权说明 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-amber-lighten-5">
        <v-icon icon="mdi-gavel" class="mr-2" />
        七、平台管理与处置权说明
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4"><strong>平台有权基于以下情形进行内容或账号处置：</strong></p>
        <v-list>
          <v-list-item prepend-icon="mdi-alert">
            <v-list-item-title>明显违反平台规则</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-alert">
            <v-list-item-title>涉嫌侵权、造谣、隐私泄露</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-alert">
            <v-list-item-title>被合理投诉或存在重大争议</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-alert">
            <v-list-item-title>影响平台正常运行或其他用户安全</v-list-item-title>
          </v-list-item>
        </v-list>
        <p class="mt-4">平台的管理行为属于社区秩序维护，不构成对任何个人或组织的立场判断。</p>
      </v-card-text>
    </v-card>

    <!-- 八、最终解释与边界确认 -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-h5 bg-green-lighten-5">
        <v-icon icon="mdi-check-decagram" class="mr-2" />
        八、最终解释与边界确认
      </v-card-title>
      <v-card-text class="pt-4">
        <p class="mb-4"><strong>本平台始终坚持：</strong></p>
        <div class="text-center my-6">
          <v-chip color="green" size="large" class="ma-2">合法表达</v-chip>
          <v-chip color="green" size="large" class="ma-2">理性沟通</v-chip>
          <v-chip color="green" size="large" class="ma-2">风险自知</v-chip>
          <v-chip color="green" size="large" class="ma-2">责任自负</v-chip>
        </div>
        <p class="mb-4">
          <strong class="text-error">
            平台不承担"组织者""指挥者""策划者"角色， 也不对用户的任何线下或平台外行为负责。
          </strong>
        </p>
        <p>本声明的最终解释权归平台所有。如有疑问，请通过正规渠道联系平台管理团队。</p>
      </v-card-text>
    </v-card>

    <!-- 底部确认 -->
    <v-card variant="tonal" color="green-lighten-5" class="mb-8">
      <v-card-text class="text-center">
        <v-icon icon="mdi-check-circle" size="large" color="green" class="mb-4" />
        <p class="text-h6 mb-4 text-high-emphasis">使用本平台即表示您已完全理解并同意以上所有条款</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: '免责声明与平台规则 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: 'DCR 学生互助频道的免责声明、平台规则和用户须知。'
    }
  ]
});
</script>

<style scoped>
.content {
  padding-top: 80px;
  padding-bottom: 42px;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
