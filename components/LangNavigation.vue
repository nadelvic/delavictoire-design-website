<!-- LangNavigation.vue -->
<script setup>  
    const { locale, setLocale } = useI18n();
    function setLanguage(langCode) {   
        setLocale(langCode)
        enActive = (langCode == 'en') ? true : false;   
    }
  
</script>

<template>
    <div>
   
        <button id="en" class='lang-switch' :class="{active: (locale == 'en')}" @click="setLanguage('en')">en</button>
        /
        <button id="fr" class="lang-switch" :class="{active: (locale == 'fr')}" @click="setLanguage('fr')">fr</button>            
    </div>
</template>
<style lang="scss">
    .lang-switch{
        font-weight:bold;
        border:none;
        box-shadow:0;
        background-color:transparent;
        cursor:pointer;
        &:hover{
            background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
            background-repeat: repeat-x; 
            background-position: 0% 100%; 
            background-size: 100% .2rem;  

        }
        &.active{
            background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
            background-repeat: repeat-x; 
            background-position: 0% 70%; 
            background-size: 100% .6rem;  

        }
    }
</style>
