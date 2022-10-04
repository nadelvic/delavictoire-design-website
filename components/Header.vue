<script setup lang="ts">
import { fallbackWithSimple } from '@intlify/core-base';

    const lang = useI18n().locale.value;
    let langEN: boolean  = false;
    if (lang == 'en') langEN = true; 
    console.log(langEN);
</script>
<template>
    <header class="header row container_12 fluid">
        <NuxtLink :to="{path: '/'}" class="logo-container">
            <Logo />
        </NuxtLink>
        <div class="menu">
            <a v-if="langEN" href='/#aboutme'>{{$t("header.aboutme")}}</a>
            <!--<a v-if="langEN" href="/#work">{{$t("header.work")}}</a>-->
            <a v-if="langEN" href="/#contact">{{$t("header.contact")}}</a>
            <!--<a v-if="langEN" href="/#articles">{{$t("header.articles")}}</a>-->

            <a v-if="!langEN" href='/fr/#aboutme'>{{$t("header.aboutme")}}</a>
           <!-- <a v-if="!langEN" href="/fr/#work">{{$t("header.work")}}</a> -->
            <a v-if="!langEN" href="/fr/#contact">{{$t("header.contact")}}</a>
            <!--<a v-if="!langEN" href="/fr/#articles">{{$t("header.articles")}}</a>-->
          
            <LangNavigation class="menu-item lang" />
        </div>
    </header>
</template>
<style lang="scss">
    .header {
        .router-link-active {
            background-image: none;
        }
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:6rem;
        //border-bottom:1px solid $g850;
        box-sizing:border-box;
        .logo-container {
            background-image:none;
            margin-left:4rem;
            margin-right:2rem;
        }
        .menu {
            margin-right:4rem;
            display:flex;
            flex-direction:row;
            justify-content: flex-end;
            font-weight:$bold;
            > .menu-item.lang {
                margin-left:4rem;
            }
            > *{
                margin-left:2rem;
            }
            a{
                text-decoration: none;
                background-image:none;
                transition:all .2s;
                &:hover {
                    background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
                    background-repeat: repeat-x; 
                    background-position: 0 100%; 
                    background-size: 100% 45%;   
                }
            }
            a.disabled {
                &:hover {
                    cursor:default;

                }        
            }
        }   
    }
</style>