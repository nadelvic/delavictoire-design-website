<script setup>
    const { t  } = useI18n()
</script>
<template>
    <div>
        <div class="home row container_12 fluid white">
            <div class="landing-content grid_5 offset_1">
                <div class="home__hat">
                    <div class="landing-intro">
                        <span class="first-line">{{$t("landing.hello")}},</span><br/>
                        {{$t("landing.Iam")}}
                    </div>
                </div>
            </div> 
            <div class="offset_2 grid_3">
                <div class="illustration-container">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                </div>
            </div>
        </div>
        <div class="landing-bottom row container_12 fluid white"> 
        </div> 
    </div> 
</template>



<style lang="scss">

    .home{
        height:calc(64vh - 6rem);
        display:block;
      
        top:0;
        //background-color:$g850;
    }

   
    .home__hat {
        margin-top:10vh;
        .first-line {
        font-size:$p36;
        font-weight:$bold;
        margin-bottom:.4rem;
        }
    }

    .landing-bottom {
        display:block;
        width:100%;
        height:40vh;
        background-image:url('~/assets/images/trame-mountain.png');
        background-repeat: no-repeat ;
        background-position:right;
        background-size:100% 100%;
        overflow:visible;
    }

  
    .skills-container{
        display:flex;
        align-items: flex-start;
    }
    .findme-container {
        font-size: $normal;
        margin-top:4rem;
    }
    // Illustration
    .illustration-container{
        //background-color:lightGrey;
        position:relative;
        width:78%;
        margin:4rem auto;
        height:0;
        padding-bottom:78%;
        .circle1 {
            position:absolute;
            right:0;
            width:80%;
            height:0;
            padding-bottom:80%;
            border:1px solid $g75;
            border-radius:80%;  
        }
        .circle2 {
            position:absolute;
            left:0;
            bottom:0;
            width:50%;
            height:0;
            padding-bottom:50%;
            border: 1px solid $g75;
            border-radius:50%;
        }

    }
 

</style>

