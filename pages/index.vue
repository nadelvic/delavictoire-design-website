<script setup>
    useHead({
        title: 'Delavictoire Design',
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    })
    //const translated = ref(t(translateMe));
    
</script>

<template>
  <div>
    <Header />
    <SectionLanding id="Landing" class="section row container_12 fluid white" />
    <SectionWork />
   
    <Footer />
  </div>
</template>

<style lang="scss">
    .section{
        //padding-bottom:2rem;
        min-height:40vh;
        

    }
    
    .white{
        background-color:white;
    
        box-sizing:border-box;
        margin-bottom:1px;
    }
    .lightGrey{
        background-color:$g850;
    }
    .darkGrey {
        background-color:$g75;
    }

   
</style>

