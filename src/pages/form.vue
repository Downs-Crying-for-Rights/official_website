<template>
  <div class="content margin-x">
    <h1 class="text-h3 mb-8">委托表自助生成</h1>

    <v-alert type="warning" variant="tonal" class="mb-8">
      <v-alert-title>重要提示</v-alert-title>
      <p class="mb-2"><strong>本工具不会保存任何信息。</strong>填写完成后，请复制生成的内容。</p>
      <p class="mb-2"><strong>关闭页面后信息将丢失，需要重新填写。</strong></p>
      <p><strong>本平台不组织、不指挥、不实施任何举报或投诉行为。</strong></p>
    </v-alert>

    <v-alert type="info" variant="tonal" class="mb-8">
      <v-alert-title>隐私保护提醒</v-alert-title>
      <p class="mb-2">为保护您的隐私安全，请注意：</p>
      <ul class="ml-6">
        <li>不要在生成的内容中包含您的真实姓名</li>
        <li>不要包含手机号、身份证号等个人信息</li>
        <li>不要包含具体的班级、学号等可识别信息</li>
        <li>不要包含家庭住址等敏感信息</li>
      </ul>
      <p class="mt-2"><strong>建议使用脱敏信息，保护自身安全。</strong></p>
    </v-alert>

    <v-form ref="formRef" v-model="valid">
      <!-- 内容类型 -->
      <v-card class="mb-4">
        <v-card-title>你使用本生成器的内容</v-card-title>
        <v-card-text>
          <v-radio-group v-model="formData.contentType" :rules="[rules.required]">
            <v-radio label="学校补课类" value="补课" />
            <v-radio label="学校提前开学类" value="提前开学" />
            <v-radio label="学校不双休类" value="不双休" />
            <v-radio label="校外培训机构类" value="校外培训" />
            <v-radio label="其他" value="其他" />
          </v-radio-group>
        </v-card-text>
      </v-card>

      <!-- 学校信息 -->
      <v-card class="mb-4">
        <v-card-title>学校信息</v-card-title>
        <v-card-text>
          <v-alert type="info" variant="tonal" class="mb-4">
            <v-alert-title>法人信息查询</v-alert-title>
            <p class="mb-2">建议使用以下平台查询学校标准全称、性质和地址：</p>
            <v-btn
              color="green"
              variant="outlined"
              href="https://qiye.qizhidao.com/"
              target="_blank"
              prepend-icon="mdi-open-in-new"
              size="small"
            >
              企知道 - 企业信息查询
            </v-btn>
          </v-alert>

          <v-text-field
            v-model="formData.schoolName"
            label="学校名称"
            :rules="[rules.required]"
            prepend-icon="mdi-school"
            variant="outlined"
            hint="请使用全称，不得使用缩写、非中文。建议使用法人信息查询平台查询标准全称后填写。"
            persistent-hint
            class="mb-4"
          />

          <v-select
            v-model="formData.schoolCategory"
            :items="schoolCategories"
            label="学校性质"
            :rules="[rules.required]"
            prepend-icon="mdi-domain"
            variant="outlined"
            hint="请先选择学校性质类别"
            persistent-hint
            class="mb-4"
          />

          <v-select
            v-if="formData.schoolCategory"
            v-model="formData.schoolType"
            :items="getSchoolTypes(formData.schoolCategory)"
            label="学校类型"
            :rules="[rules.required]"
            prepend-icon="mdi-school-outline"
            variant="outlined"
            hint="请选择具体的学校类型"
            persistent-hint
            class="mb-4"
          />

          <v-text-field
            v-model="formData.schoolAddress"
            label="学校地址"
            :rules="[rules.required]"
            prepend-icon="mdi-map-marker"
            variant="outlined"
            hint="务必精确到门牌号，建议使用法人信息查询平台查询"
            persistent-hint
            class="mb-4"
          />
        </v-card-text>
      </v-card>

      <!-- 举报途径 -->
      <v-card class="mb-4">
        <v-card-title>举报途径</v-card-title>
        <v-card-text>
          <v-alert type="info" variant="tonal" class="mb-4">
            <v-alert-title>填写示例</v-alert-title>
            <p class="mb-1">例：成都市教育局：028-61881688</p>
            <p>例：成都市教育局局长信箱：email.cdedu.com</p>
          </v-alert>

          <v-textarea
            v-model="formData.reportChannels"
            label="举报途径"
            :rules="[rules.required]"
            prepend-icon="mdi-phone"
            variant="outlined"
            rows="4"
            hint="可填写多行，请注意必须添加区号"
            persistent-hint
            placeholder="例：成都市教育局：028-61881688&#10;成都市教育局局长信箱：email.cdedu.com"
          />
        </v-card-text>
      </v-card>

      <!-- 详细描述 -->
      <v-card class="mb-4">
        <v-card-title>详细描述</v-card-title>
        <v-card-subtitle class="text-warning"
          >务必使用本模板用词填写，否则将无法提交</v-card-subtitle
        >
        <v-card-text>
          <v-alert type="info" variant="tonal" class="mb-4">
            <v-alert-title>模板说明</v-alert-title>
            <p class="mb-2">可以在本模板的基础上额外补充</p>
          </v-alert>

          <v-expansion-panels class="mb-4">
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-icon icon="mdi-book-open-variant" class="mr-2" />
                查看模板示例
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="template-examples">
                  <p class="mb-2"><strong>补课：</strong></p>
                  <p class="mb-4 template-text">
                    某某学校xx年级在xx时间xx:xx-xx:xx以 讲新课/其他变相强制行为 变相强制学生到校补课
                  </p>

                  <p class="mb-2"><strong>提前开学：</strong></p>
                  <p class="mb-4 template-text">
                    某某学校xx年级在x月x日提前开学，违反了xx教育局规定的校历的x月x日开学
                  </p>

                  <p class="mb-2"><strong>政策允许补课但违规提前开学：</strong></p>
                  <p class="mb-4 template-text">
                    某某学校xx年级在x月x日提前开学，虽然xx教育局允许在xx时间进行补课，但该校以补课的名义提前开学，违反了xx教育局规定的校历的x月x日开学
                  </p>

                  <p class="mb-2"><strong>校外培训机构：</strong></p>
                  <p class="mb-4 template-text">
                    某某学校接收xx年级的义务教育阶段学生在xx时间xx:xx-xx:xx（必须是非工作日）补课
                  </p>

                  <p class="mb-2"><strong>不双休：</strong></p>
                  <p class="template-text">
                    某某学校xx年级不执行双休政策，在星期x仍然在学校上课，并且xx（描述放假情况）
                  </p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-textarea
            v-model="formData.description"
            label="详细描述"
            :rules="[rules.required, rules.minLength]"
            prepend-icon="mdi-text"
            variant="outlined"
            rows="6"
            hint="请根据上方模板填写"
            persistent-hint
          />
        </v-card-text>
      </v-card>

      <!-- 补课收费情况 -->
      <v-card class="mb-4">
        <v-card-title>补课收费情况</v-card-title>
        <v-card-text>
          <v-radio-group v-model="formData.feeStatus" :rules="[rules.required]">
            <v-radio label="不收费" value="不收费" />
            <v-radio label="收费" value="收费" />
            <v-radio label="不清楚" value="不清楚" />
          </v-radio-group>

          <v-textarea
            v-if="formData.feeStatus === '收费'"
            v-model="formData.feeDetails"
            label="收费情况"
            :rules="formData.feeStatus === '收费' ? [rules.required] : []"
            variant="outlined"
            rows="3"
            hint="请在下方填写收费情况"
            persistent-hint
            class="mt-4"
          />
        </v-card-text>
      </v-card>

      <!-- 诉求 -->
      <v-card class="mb-4">
        <v-card-title>诉求</v-card-title>
        <v-card-subtitle class="text-warning">请注意诉求的合理性</v-card-subtitle>
        <v-card-text>
          <v-checkbox v-model="formData.demands" label="停止补课" value="停止补课" color="green" />
          <v-checkbox v-model="formData.demands" label="退还费用" value="退还费用" color="green" />
          <v-checkbox
            v-model="formData.demands"
            label="要求教育局暗访"
            value="要求教育局暗访"
            color="green"
          />
          <v-checkbox
            v-model="formData.demands"
            label="按照正常时间开学"
            value="按照正常时间开学"
            color="green"
          />
          <v-checkbox
            v-model="formData.demands"
            label="对相关人员作出处理"
            value="对相关人员作出处理"
            color="green"
          />
          <v-checkbox v-model="formData.demands" label="其他" value="其他" color="green" />

          <v-textarea
            v-if="formData.demands.includes('其他')"
            v-model="formData.otherDemands"
            label="其他诉求"
            variant="outlined"
            rows="2"
            class="mt-2"
          />
        </v-card-text>
      </v-card>

      <!-- 确认信息 -->
      <v-card class="mb-4" variant="outlined" color="green">
        <v-card-title class="text-h6">提交前确认</v-card-title>
        <v-card-subtitle class="text-error font-weight-bold"
          >点击提交后会出现生成的委托表，请复制！</v-card-subtitle
        >
        <v-card-text>
          <v-alert type="warning" variant="tonal" class="mb-4">
            <v-alert-title class="font-weight-bold">请勾选所有选项</v-alert-title>
            <p class="mt-2 text-body-2">勾选即表示您已知晓并同意相关规则</p>
          </v-alert>

          <v-checkbox
            v-model="formData.confirmations"
            label="我承诺我填写的信息真实有效"
            value="真实有效"
            :rules="[rules.mustCheckAll]"
            color="green"
            class="confirmation-checkbox"
          />
          <v-checkbox
            v-model="formData.confirmations"
            label="我知道本工具不会保存任何信息，关闭页面后需要重新填写"
            value="不保存信息"
            :rules="[rules.mustCheckAll]"
            color="green"
            class="confirmation-checkbox"
          />
          <v-checkbox
            v-model="formData.confirmations"
            label="我已阅读并同意平台免责声明，理解所有行为由本人自主决定"
            value="同意免责"
            :rules="[rules.mustCheckAll]"
            color="green"
            class="confirmation-checkbox"
          />

          <v-btn variant="text" color="green" size="small" to="/disclaimer" class="mt-2">
            查看完整免责声明和平台规则
          </v-btn>
        </v-card-text>
      </v-card>

      <!-- 提交按钮 -->
      <v-alert v-if="!canSubmit" type="warning" variant="tonal" class="mb-4">
        <v-alert-title>提交前检查</v-alert-title>
        <p class="mb-2">请确保完成以下所有项目：</p>
        <ul class="ml-6">
          <li v-if="!formData.schoolName">✗ 填写学校名称</li>
          <li v-if="!formData.schoolCategory">✗ 选择学校性质</li>
          <li v-if="!formData.schoolType">✗ 选择学校类型</li>
          <li v-if="!formData.schoolAddress">✗ 填写学校地址</li>
          <li v-if="!formData.reportChannels">✗ 填写举报途径</li>
          <li v-if="!formData.description || formData.description.length < 20">
            ✗ 填写详细描述（至少20字）
          </li>
          <li v-if="!formData.feeStatus">✗ 选择收费情况</li>
          <li v-if="formData.feeStatus === '收费' && !formData.feeDetails">✗ 填写收费详情</li>
          <li v-if="formData.demands.length < 1">
            ✗ 选择至少1项诉求（当前已选 {{ formData.demands.length }} 项）
          </li>
          <li v-if="formData.confirmations.length < 3">
            ✗ 勾选所有确认项（当前已勾选 {{ formData.confirmations.length }} 项）
          </li>
        </ul>
      </v-alert>

      <div class="d-flex ga-4 justify-center mb-8">
        <v-btn
          color="green"
          size="large"
          :disabled="!canSubmit"
          @click="generateForm"
          prepend-icon="mdi-file-document-check"
        >
          生成委托表
        </v-btn>
        <v-btn variant="outlined" size="large" @click="resetForm" prepend-icon="mdi-refresh">
          重置表单
        </v-btn>
      </div>
    </v-form>

    <!-- 生成结果对话框 -->
    <v-dialog v-model="showResult" max-width="900" persistent>
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-check-circle" color="green" size="large" class="mr-2" />
          委托表生成成功
        </v-card-title>
        <v-card-text>
          <v-alert type="success" variant="tonal" class="mb-4">
            <v-alert-title>请立即复制以下内容</v-alert-title>
            <p class="mb-2"><strong>本工具不会保存任何信息</strong></p>
            <p>关闭此对话框后，内容将无法找回，需要重新填写</p>
          </v-alert>

          <v-alert type="warning" variant="tonal" class="mb-4">
            <v-alert-title>风险提示</v-alert-title>
            <p class="mb-2">请注意：</p>
            <ul class="ml-6">
              <li>公开发布或传播此内容存在风险</li>
              <li>建议通过正规渠道反映问题</li>
              <li>所有行为后果由您自行承担</li>
              <li>平台不对您的任何行为负责</li>
            </ul>
          </v-alert>

          <v-card variant="outlined" class="mb-4">
            <v-card-text>
              <pre class="generated-content">{{ generatedContent }}</pre>
            </v-card-text>
          </v-card>

          <div class="d-flex ga-2 mb-4">
            <v-btn color="green" @click="copyToClipboard" prepend-icon="mdi-content-copy">
              复制委托表
            </v-btn>
            <v-btn variant="outlined" @click="downloadAsText" prepend-icon="mdi-download">
              下载为文本
            </v-btn>
          </div>

          <v-card variant="outlined" color="green" class="mb-4">
            <v-card-title class="text-h6">
              <v-icon icon="mdi-account-group" class="mr-2" />
              下一步：加入审核组
            </v-card-title>
            <v-card-text>
              <p class="mb-4">复制完成后，您可以加入我们的审核组获取更多帮助和指导。</p>
              <v-btn
                color="green"
                href="https://qun.qq.com/universal-share/share?ac=1&authKey=27wt%2BV3jpF1Sh7iV%2BqrRjjR3M8eK96fKLjw%2BDOfHV0C1n2SVPaEKJOSIRtieebZE&busi_data=eyJncm91cENvZGUiOiI2MDk4MTI2MTMiLCJ0b2tlbiI6Im9PcWFBNEo5QnAyOU9HOG4xL3hFTkVhTS9XYnI5VXF3ZlVsY29RZ3dESWgzVnZNcVVOTkdYbkY4T2gvcVZSdEciLCJ1aW4iOiIxMjgyMTA1Njg1In0=&data=FuH6V8EcXOkJVY-dAHIoXKAFvHE9yyYjgW-wn6_vwNtuz0sxmTcdy0lcyonXMfN_3yiDGhtzT1eHvpDacmfycv37MU1w-qtGl-4vrwHwR_s&svctype=5&tempid=h5_group_info"
                target="_blank"
                prepend-icon="mdi-account-group"
                size="large"
                block
              >
                加入审核组（QQ群）
              </v-btn>
            </v-card-text>
          </v-card>

          <v-divider class="my-4" />

          <!-- 评分和反馈 -->
          <div class="feedback-section" v-if="false">
            <h3 class="text-h6 mb-4">请为我们的生成器评分（非必填）</h3>

            <div class="mb-4">
              <p class="mb-2">使用是否便捷</p>
              <v-rating v-model="feedback.easeOfUse" color="yellow-darken-2" hover />
            </div>

            <div class="mb-4">
              <p class="mb-2">内容是否全面</p>
              <v-rating v-model="feedback.completeness" color="yellow-darken-2" hover />
            </div>

            <div class="mb-4">
              <p class="mb-2">对你是否有用</p>
              <v-rating v-model="feedback.usefulness" color="yellow-darken-2" hover />
            </div>

            <v-textarea
              v-model="feedback.suggestions"
              label="请为我们的生成器提出您宝贵的建议（非必填）"
              variant="outlined"
              rows="3"
              class="mb-4"
            />

            <v-btn color="green" variant="outlined" @click="submitFeedback"> 提交反馈 </v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green" @click="closeResult">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 复制成功提示 -->
    <v-snackbar v-model="showCopySuccess" color="green" timeout="2000">
      <v-icon icon="mdi-check" class="mr-2" />
      复制成功！
    </v-snackbar>

    <!-- 反馈提交成功提示 -->
    <v-snackbar v-model="showFeedbackSuccess" color="green" timeout="2000">
      <v-icon icon="mdi-check" class="mr-2" />
      感谢您的反馈！
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHead } from '@unhead/vue';

useHead({
  title: '委托表自助生成 - DCR 学生互助频道',
  meta: [
    {
      name: 'description',
      content: '在线生成规范的互助委托表，快速便捷。'
    }
  ]
});

const formRef = ref(null);
const valid = ref(false);
const showResult = ref(false);
const showCopySuccess = ref(false);
const showFeedbackSuccess = ref(false);
const generatedContent = ref('');

const formData = ref({
  contentType: '',
  schoolName: '',
  schoolCategory: '',
  schoolType: '',
  schoolAddress: '',
  reportChannels: '',
  description: '',
  feeStatus: '',
  feeDetails: '',
  demands: [] as string[],
  otherDemands: '',
  confirmations: [] as string[]
});

const feedback = ref({
  easeOfUse: 0,
  completeness: 0,
  usefulness: 0,
  suggestions: ''
});

const schoolCategories = ['公立学历制学校', '私立学历制学校', '校外培训机构'];

const schoolTypesByCategory: Record<string, string[]> = {
  公立学历制学校: [
    '小学',
    '初级中学',
    '高级中学',
    '职业技术学校',
    '技工学校',
    '中等专业学校',
    '普通高校'
  ],
  私立学历制学校: [
    '小学',
    '初级中学',
    '高级中学',
    '职业技术学校',
    '技工学校',
    '中等专业学校',
    '普通高校'
  ],
  校外培训机构: ['校外培训机构']
};

const getSchoolTypes = (category: string) => {
  return schoolTypesByCategory[category] || [];
};

const rules = {
  required: () => (v: any) => !!v || '此项为必填项',
  minLength: () => (v: string) => (v && v.length >= 20) || '请至少输入20个字符',
  mustCheckAll: () => formData.value.confirmations.length === 3 || '请勾选所有确认项'
};

const canSubmit = computed(() => {
  // 检查所有必填字段
  const hasBasicInfo =
    formData.value.schoolName &&
    formData.value.schoolCategory &&
    formData.value.schoolType &&
    formData.value.schoolAddress;

  const hasReportChannels = formData.value.reportChannels;
  const hasDescription = formData.value.description && formData.value.description.length >= 20;
  const hasFeeStatus = formData.value.feeStatus;

  // 如果选择收费，必须填写收费详情
  const feeDetailsValid = formData.value.feeStatus !== '收费' || formData.value.feeDetails;

  // 至少选择1项诉求
  const hasDemands = formData.value.demands.length >= 1;

  // 必须勾选所有确认项
  const allConfirmed = formData.value.confirmations.length === 3;

  return (
    hasBasicInfo &&
    hasReportChannels &&
    hasDescription &&
    hasFeeStatus &&
    feeDetailsValid &&
    hasDemands &&
    allConfirmed
  );
});

const autoLocate = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 这里可以调用地图API获取详细地址
        alert(
          `定位成功！纬度: ${position.coords.latitude}, 经度: ${position.coords.longitude}\n请手动填写详细地址`
        );
      },
      () => {
        alert('定位失败，请手动填写地址');
      }
    );
  } else {
    alert('您的浏览器不支持定位功能');
  }
};

const generateForm = () => {
  if (!canSubmit.value) {
    // 详细的错误提示
    const missing = [];

    if (!formData.value.schoolName) missing.push('学校名称');
    if (!formData.value.schoolCategory) missing.push('学校性质');
    if (!formData.value.schoolType) missing.push('学校类型');
    if (!formData.value.schoolAddress) missing.push('学校地址');
    if (!formData.value.reportChannels) missing.push('举报途径');
    if (!formData.value.description || formData.value.description.length < 20)
      missing.push('详细描述（至少20字）');
    if (!formData.value.feeStatus) missing.push('收费情况');
    if (formData.value.feeStatus === '收费' && !formData.value.feeDetails) missing.push('收费详情');
    if (formData.value.demands.length < 1) missing.push('诉求（至少选择1项）');
    if (formData.value.confirmations.length < 3) missing.push('确认项（必须全部勾选）');

    alert('请完整填写以下内容：\n\n' + missing.join('\n'));
    return;
  }

  // 生成委托表内容
  let content = '声明：本人承诺以下信息为本人自愿自主提供，且确保信息真实\n\n';
  content += `学校名称：${formData.value.schoolName}\n`;
  content += `性质：${formData.value.schoolCategory}-${formData.value.schoolType}\n`;
  content += `地址：${formData.value.schoolAddress}\n`;
  content += `举报途径：${formData.value.reportChannels}\n\n`;
  content += `行为：\n${formData.value.description}\n\n`;
  content += `收费情况：${formData.value.feeStatus}`;
  if (formData.value.feeDetails) {
    content += `: ${formData.value.feeDetails}`;
  }
  content += `\n\n诉求：${formData.value.demands.join('，')}`;
  if (formData.value.otherDemands) {
    content += `，${formData.value.otherDemands}`;
  }
  content += `\n\n生成时间：${new Date().toLocaleString('zh-CN')}`;

  generatedContent.value = content;
  showResult.value = true;
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedContent.value);
    showCopySuccess.value = true;
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea');
    textArea.value = generatedContent.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopySuccess.value = true;
  }
};

const downloadAsText = () => {
  const blob = new Blob([generatedContent.value], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `DCR委托表_${new Date().getTime()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const submitFeedback = () => {
  // 这里可以调用API提交反馈
  console.log('反馈内容:', feedback.value);
  showFeedbackSuccess.value = true;
};

const closeResult = () => {
  showResult.value = false;
  // 可选：关闭后重置表单
  // resetForm();
};

const resetForm = () => {
  formData.value = {
    contentType: '',
    schoolName: '',
    schoolCategory: '',
    schoolType: '',
    schoolAddress: '',
    reportChannels: '',
    description: '',
    feeStatus: '',
    feeDetails: '',
    demands: [],
    otherDemands: '',
    confirmations: []
  };
  feedback.value = {
    easeOfUse: 0,
    completeness: 0,
    usefulness: 0,
    suggestions: ''
  };
};
</script>

<style scoped>
:root {
  --template-bg: #f5f5f5;
  --template-bg-dark: #2a2a2a;
  --template-text-bg: #ffffff;
  --template-text-bg-dark: #1e1e1e;
  --border-color: #4caf50;
  --border-color-dark: #66bb6a;
  --feedback-bg: #f9f9f9;
  --feedback-bg-dark: #262626;
}

.content {
  padding-top: 80px;
  padding-bottom: 42px;
  max-width: 900px;
  margin: 0 auto;
}

.template-examples {
  background-color: var(--template-bg);
  padding: 16px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

:dark .template-examples {
  background-color: var(--template-bg-dark);
}

.template-text {
  font-family: monospace;
  background-color: var(--template-text-bg);
  padding: 8px;
  border-left: 3px solid var(--border-color);
  margin-left: 16px;
  transition: background-color 0.2s, border-color 0.2s;
}

:dark .template-text {
  background-color: var(--template-text-bg-dark);
  border-left-color: var(--border-color-dark);
}

.generated-content {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.6;
  background-color: var(--template-bg);
  padding: 16px;
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
  transition: background-color 0.2s;
}

:dark .generated-content {
  background-color: var(--template-bg-dark);
}

.feedback-section {
  background-color: var(--feedback-bg);
  padding: 16px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

:dark .feedback-section {
  background-color: var(--feedback-bg-dark);
}

/* 增强确认复选框的可读性 */
.confirmation-checkbox :deep(.v-label) {
  font-weight: 500;
  font-size: 15px;
  transition: color 0.2s;
}

.confirmation-checkbox :deep(.v-selection-control) {
  min-height: 48px;
}
</style>
