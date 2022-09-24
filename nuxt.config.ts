import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
        /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'static',
    //ssr: false,
    nitro: {
        preset: 'service-worker',
        /*prerender: {
          routes: ['/', '/fr']
        }*/
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
   
    i18n: {
        //legacy: false,
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
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/content'
    ],
    content: {
        base: '/content',
        //locales: ['en','fr'],
        //defaultLocale: 'en'
    

    }
})

/* 
Important when you want to render with queryContent
https://github.com/nuxt/content/issues/1188
https://content.nuxtjs.org/guide/deploy/static-hosting
*/
