import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
        /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'static',
    //ssr: false,
    nitro: {
        prerender: {
          routes: ['/', '/fr']
        }
    },
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: process.env.npm_package_name || 'Delavictoire Design',
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
        }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },

    typescript: {
        shim: false
    },
    
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/global.scss";',
                },
            },
        },
        plugins: [ ]
    },
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        legacy: false,
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en-US.json'
            },
            {
                code: 'fr',
                iso: 'fr-FR',
                file: 'fr-FR.json'
            }
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en'
        }
    }
})
