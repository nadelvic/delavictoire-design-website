<script>
</script>
<template>
    <Header/>
    <div class="page-content row container_12 fluid">
        <slot />
    </div>
    <Footer />
</template>
<style lang="scss">
    a.logo-container{
        background-image:none;
    }
    .page-content {
        width:100%;
        min-height: calc(100vh - 6rem - 240px);
        margin-bottom:0;
    }
</style>