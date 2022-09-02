<template>
    <NuxtLayout :name="layoutName" >
        <div class="home">

            <div class="home__hat">
                <h2>Hello, I'm Nathan Delavictoire, <br/>
            I'm a <span class="yellow-underline">interaction designer</span>  and a <span class="yellow-underline">strategic designer</span>.
            </h2>
            </div>
       
       
    </div>
    </NuxtLayout>  
</template>

<script setup>
    const layoutName = 'default';
  </script>

<style lang="scss">

    .home{
        height:100%;
        //background-color:$g850;
    }
    .home__hat {
        margin-top:300px;
    }

    .yellow-underline {
        position:relative;
        background-image: linear-gradient(to right, $focusYellow 0%, $focusYellow 100%);
        background-repeat: repeat-x; 
        background-position: 0 100%; 
        background-size: 100% 1rem; 
        
    }

</style>

