import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
  locale: 'en',
  // 临时解决 [allowComposition模式首次调用会先返回en-US异常](https://github.com/intlify/vue-i18n-next/issues/1170)
  legacy: false,
  // allowComposition: true,
  fallbackLocale: 'en',
  messages
})
