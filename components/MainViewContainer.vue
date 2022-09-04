<script setup>
    const layoutName = 'default';
    const skill1 = {
        title: 'As a strategic designer',
        description: '\u2192  I help organisations and companies communicate new ideas to solve problems often through facilitation and visual communication.'        
    }
    const skill2 = {
        title: 'As an interaction designer',
        description: '\u2192 I define and prototype new digital products : Business applications, Website, Digital Services …'        
    }
</script>

<template>
    <NuxtLayout :name="layoutName" >
        <div class="home">

            <div class="home__hat grid-8">
                <h2>Hello, I'm <strong>Nathan Delavictoire</strong>, <br/>
                I'm an <span class="yellow-underline">interaction designer</span>  and a <span class="yellow-underline">strategic designer</span>.
            </h2>
            </div>

            <div class="skills-container grid-8">
                <SkillCover :title="skill1.title" :description="skill1.description" />
                <SkillCover :title="skill2.title" :description="skill2.description" />
            </div>
            <div class="findme-container">
                <FindMeInformation />
            </div> 
        </div>
    </NuxtLayout>  
</template>



<style lang="scss">

    .home{
        height:100%;
        //background-color:$g850;
    }
    .home__hat {
        margin-top:300px;
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
</style>

