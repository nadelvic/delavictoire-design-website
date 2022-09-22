<!-- LangNavigation.vue -->
<script setup > 

 function switchLang(lang){
        if(lang == 'fr') navigateTo('/fr');
        console.log('switch');
        //refreshNuxtData('articles');
        return null;
    }

   
    
  
</script>

<template>
    <div>
        <nuxt-link class="lang-switch"  :to="switchLocalePath('en')">en</nuxt-link>
        /
        <nuxt-link class="lang-switch"  :to="switchLocalePath('fr')">fr</nuxt-link>
    </div>
</template>
<style lang="scss">
    a.lang-switch{
        font-weight:bold;
        border:none;
        box-shadow:0;
        text-decoration:none;
        background-color:transparent;
        padding:.5rem;
        background-image:none;
        cursor:pointer;
        &:hover{
            background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
            background-repeat: repeat-x; 
            background-position: 0% 100%; 
            background-size: 100% .2rem;  
        }
        &.router-link-active{
            background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
            background-repeat: repeat-x; 
            background-position: 0% 70%; 
            background-size: 100% .6rem;  

        }
    }
</style>


<!--
        <button id="en" class='lang-switch' :class="{active: (locale == 'en')}" @click="setLanguage('en')">en</button>
        /
        <button id="fr" class="lang-switch" :class="{active: (locale == 'fr')}" @click="setLanguage('fr')">fr</button> 
        -->