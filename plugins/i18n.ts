import { createI18n } from 'vue-i18n'
import en from '../locales/en-US.json'
import fr from '../locales/fr-FR.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      fr
    }
  })

  vueApp.use(i18n)
})