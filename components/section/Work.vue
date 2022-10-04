<script setup lang="ts">
    //import { onMounted, ref} from 'vue';
    const lang = useI18n().locale.value;
    const { data } =  useAsyncData('posts', () => 
            queryContent().where({section: 'work',locale: lang}).find()
    );

    
</script>

<template>
    <div>
        <div class="work-content offset_3 grid_6">
            <h1>{{$t('work.title')}}</h1>   
            <div v-for="article in data" :key="article._path" class="workcase-item"> 
                <NuxtLink  :to="article._path.replace('/en/','/')" class="workcase-link">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.short }}</p>
                </NuxtLink>     
            </div>         
        </div>
    </div>
</template>

<style lang="scss">
    .invisible-item{
        display:none;
    }
    .work-content {
        margin: 6rem 0 6rem;
        width:100%;
        display: flex;
        width:100%;
    
        h1 {
            margin-bottom:2rem;
        }
        .workcase-item{
            display:flex;
            margin: 0;
            border-image:none; 
           
            a.workcase-link {    
                display:flex;
                flex-direction:column;
                transition:background-color .2s;
                text-decoration:none;
                background-image:none;
                background-size:100% 100%;
                padding:2rem 0;
                border-bottom:1px solid $g850;
                width:100%;
                &:hover {
                    background-color:$g950;
                } 
                h3 {
                    padding-top:.5rem;
                    margin-bottom:.5rem;
                }
                p {
                    margin-bottom:0;
                }
                &:after{
                    display:none;
                }
            }
        }  
    }
    .workcase-item{
        //background-color:yellow;
        &:first-of-type a.workcase-link {
            //background-color:red;
   
            border-top:1px solid $g850;
        }      
    }   
</style>