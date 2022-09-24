<script setup >
    const lang = useI18n().locale.value;
    const { data } = await useAsyncData('posts', () => {  
        return queryContent().where({section: 'work'}).find();
    });
    //console.log(...data.value);
 
    
    /*const getArticles = (theData) => {
        let list = [];
        theData.value.reduce((item) =>{
            if(item.locale == lang) list.push(item);
        });
        return list; 
    };
    const articles = getArticles(data);*/

    
</script>

<template>
    <div>
        <div class="work-content grid_7 offset_1">
            <h1>{{$t('work.title')}}</h1>   
            <div v-for="article in data" :key="article._path" class="workcase-container"> 
                <div v-if="(article.locale == lang)" class="workcase-item" >
                    <NuxtLink  :to="article._path.replace('/en/','/')" class="workcase-link fs-22">
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.short }}</p>
                    </NuxtLink>     
                </div>
                <div v-else class="invisible-item"></div>      
                </div>         
        </div>
    </div>
</template>

<style lang="scss">
    .invisible-item{
        display:none;
    }
    .work-content {
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
    .workcase-container{
        &:first-of-type a.workcase-link {
            border-top:1px solid $g850;
        }      
    }   
</style>