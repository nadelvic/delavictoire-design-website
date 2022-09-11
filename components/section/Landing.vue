<script setup>
    const { t  } = useI18n()
</script>
<template>
    <div>
        <div class="landing-content grid_7 offset_1">
            <div class="home__hat">
            <h2>{{$t('landing.welcome.part1')}} <strong>Nathan Delavictoire</strong>, <br/>
            {{$t('landing.welcome.part2')}} <span class="yellow-underline"> {{$t('landing.welcome.skill1')}}</span>   {{$t('landing.welcome.part3')}} <span class="yellow-underline"> {{$t('landing.welcome.skill2')}}</span>.
            </h2>
            </div>

            <div class="skills-container">
                <SkillCover 
                    :title="t('landing.skills.strategicDesign.hat')" 
                    :description="t('landing.skills.strategicDesign.description')" />
                <SkillCover 
                    :title="t('landing.skills.interactionDesign.hat')" 
                    :description="t('landing.skills.interactionDesign.description')" />
            </div> 
            <div class="findme-container">
                <FindMeInformation />
            </div> 
        </div> 
        <div class="grid_3">
            <div class="illustration-container">
                <div class="circle1"></div>
                <div class="circle2"></div>
            </div>
        </div>   
    </div> 
</template>



<style lang="scss">

    .home{
        height:90%;
        display:block;
        position:absolute;
        top:0;
        //background-color:$g850;
    }
    .home__hat {
        margin-top:10vh;
        h2 {
            font-weight:$regular;
        }
    }

    .yellow-underline {
        font-weight:$bold;
        position:relative;
        background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
        background-repeat: repeat-x; 
        background-position: 0 100%; 
        background-size: 100% 1rem;   
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
        width:100%;
        margin:10rem auto;
        height:0;
        padding-bottom:100%;
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

