<template>
    <div class="footer row container_12 fluid">
        <div class="footer__text">
            {{$t('footer.message1')}} <a href="https://v3.nuxtjs.org">Nuxt 3</a> {{$t('footer.message2')}} <a href="https://p5js.org">P5.js</a>.
        </div>
       
    </div>
</template>
<style lang="scss">
    $footerColor : $g75;
    .footer {
        display:flex;
        position:relative;
        justify-content:center;
        color:$footerColor ;
        align-items:flex-end;
        height:240px;
        background-image:url('~/assets/images/trame-gradient.png');
        background-repeat: repeat-x ;
        background-position:50% 12%;
        background-size:700px;
        &:before{
            content:"";
            position:absolute;
            top:0; left:0;
            width:100%;
            height:100%;
         
            //background: linear-gradient(0deg, rgba(0,0,0,0.16) 0%, rgba(255,255,255,0) 60%);


        }
       
        .footer__text{
         
            background-color:white;
            text-align:center;
            max-width:70%;
            margin-bottom:45px;
            padding:.8rem 2rem .7rem 2rem ;
           
        
           
            a {
            overflow:visible; 
            &:after{
                content:'';
                display:block;
                position:absolute;
                bottom:-2px;
                width:100%;
                border-bottom:1px solid $footerColor ;
            }
            color:$footerColor ;  
            }
        }
       
    }

</style>