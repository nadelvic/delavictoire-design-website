<script setup>
  import { createError } from 'h3';
  const lang = useI18n().locale.value;
  const route = useRoute();
  let path = route.fullPath;
  if(!path.includes('/fr/')) path = '/en'+route.fullPath;

  const { data: posts, error } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
  });
  if (error.value) {
    throwError(
      createError({
        statusCode: 404,
        statusMessage: 'Not Found',
      })
    );
    
  }
  const custom = 'article-layout';
</script>

<template>
      <NuxtLayout :name="custom">
        <div class="article-container offset_3 grid_6">
          <ContentRenderer class="content-md " :v-if="posts" :value="posts" >
        </ContentRenderer>

        </div>
       
      </NuxtLayout>
</template>
<style lang="scss">
  .article-container {
    margin-top:4rem;
  }

   h2{
    text-decoration:none;
   }



</style>




<!--
<script>
    export default {
        name: 'WorkSlug',
        async asyncData({$content,params,app,error}){
            const path = `${$content}/${app.i18n.locale}/work/${params.slug}`;
            console.log(path)
            const post = await useFetch(path)
                .catch(() => {
                    console.log("Catched")
                    error({statusCode: 404, message: t('error.message404')})
                })
            return { post };      
        }
    }
</script>
-->


<!--
<script setup>
    // This compiler macro works in both <script> and <script setup>
    definePageMeta({
      // you can also pass a string or a computed property
      key: route => route.slug,
      transition: {
        name: 'page',
      },
      keepalive: {
        exclude: ['modal']
      },
    })
    </script>
-->


