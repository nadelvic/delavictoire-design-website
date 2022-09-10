<!-- LangNavigation.vue -->


<script>
    
    export default {
        data() {
            return {
                enActive: true
            }
        },
        methods: {
            async setLanguage(langCode){   
                this.$i18n.locale = langCode;
                this.enActive = (langCode == 'en') ? true : false; 
                console.log(this.enActive);
            },
        }
    }
       
</script>

<template>
    <div>
        <button id="en" class='lang-switch' :class="{active :this.enActive}" @click="setLanguage('en')">en</button>
        /
        <button id="fr" class="lang-switch" :class="{active: !this.enActive}" @click="setLanguage('fr')">fr</button>            
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
