<script>
    export default {
        metaInfo () {
            imageName: this.imageUrl
        }
    }
</script>

<template>
    <div class="separator" style="background-image:url(imageName)"></div>
</template>
<style>
    .separator{
        display:block;
        width:100%;
        height:.5rem;
        overflow:visible;
    }
</style>