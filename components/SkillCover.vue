<!-- 
    Component : SkillCover.<template>
    This coponent describes the display of a short description of skills for the cover page.
-->

<script>
    export default {
        name: 'skill',
        props: {
            title: String,
            description: String,
        }   
    }
</script>

<template>
    <div class="skill-cover">
        <div class="skill-cover__title">{{ title }}</div>
        <div class="skill-cover__description">{{ description }}</div>
    </div>
</template>

<style lang="scss">
    .skill-cover {
        font-size: $p22;
        border-left:1px solid $g100;
        padding-left: 30px;
        margin: 40px 60px 40px 0;
        width:380px;
        .skill-cover__title {
            font-weight:$bold;
            margin-bottom:.5rem;
        }      
    }
</style>

