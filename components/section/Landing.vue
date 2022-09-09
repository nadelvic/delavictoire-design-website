<script setup>
    const layoutName = 'default';
    const skill1 = {
        title: 'As a strategic designer',
        description: '\u2192  I help organisations frame, position and communicate new ideas to solve problems.'        
    }
    const skill2 = {
        title: 'As an interaction designer',
        description: '\u2192 I define and prototype new digital products : Business applications, Website, Digital Services …'        
    }
</script>

<template>
    <div>
        <div class="landing-content grid_7 offset_1">
            <div class="home__hat">
            <h2>{{$t('landing.welcome.part1')}} <strong>Nathan Delavictoire</strong>, <br/>
            I'm a <span class="yellow-underline">strategic designer</span>  and an <span class="yellow-underline">interaction designer</span>.
            </h2>
            </div>

            <div class="skills-container">
                <SkillCover :title="skill1.title" :description="skill1.description" />
                <SkillCover :title="skill2.title" :description="skill2.description" />
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
        height:100%;
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

