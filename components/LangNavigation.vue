<!-- LangNavigation.vue -->


<script>
    
    export default {
        data() {
            return {
                stateEN : 'activated',
                stateFR : ''
            }
        },
        methods: {
            async setLanguage(langCode){
                this.$i18n.locale = langCode;
                if(langCode == 'en'){
                    console.log('yes EN')
                    this.stateEN = 'activated';
                    this.stateFR = ''
                } else if (langCode == 'fr'){
                    this.stateEN = '',
                    this.stateFR = 'activated'
                }
            }
        }
    }
       
</script>

<template>
    <div>
        <button id="en" class="lang-switch {{this.stateEN}}" @click="setLanguage('en')">en</button>
        /
        <button id="fr" class="lang-switch {{this.stateFR}}" @click="setLanguage('fr')">fr</button>            
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
        &.activated{
            background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
            background-repeat: repeat-x; 
            background-position: 0% 70%; 
            background-size: 100% .6rem;  

        }
    }
</style>
