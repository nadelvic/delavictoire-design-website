<script>
    export default {
        data() {
            return {
                showCopied: false
            }
        },
        methods: {
            copy: function () {
                this.showCopied = true;
                setTimeout(() => {
                   this.showCopied = false;    
                },500);
                navigator.clipboard.writeText("nathan@delavictoire.design");
            }
        }
    }  
</script>
<template>
    <div>
        <div class="contact-container offset_3 grid_6 m_8 fs-22">
            <h1>{{$t("contact.title")}}</h1>
           
            <p>{{$t("contact.message")}}<a class="email-copy" @mouseup="copy">nathan@delavictoire.design</a></p>
            <span v-if="showCopied" class="popup">{{$t("contact.copied")}}</span>
           
        </div>
        
    </div>
</template>
<style lang="scss">
    .contact-container {
        margin-top:5rem;
        position:relative;
    }
    .email-copy {
        cursor:pointer;     
    }
    .popup {
        font-weight:$bold;
        background-color:$focusYellow;
        padding:.5rem .6rem;
        border-radius:5px;
        position:absolute;
        top:10%;
        right:10%;
        transition:all .2s;
    }

</style>