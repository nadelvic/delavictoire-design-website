<script setup>
  const lang = useI18n().locale.value;
  const route = useRoute();
  let path = route.fullPath;
  if(!path.includes('/fr/')) path = '/en'+route.fullPath;

  //const { data } = await useAsyncData('home', () => queryContent('/fr/work/capqualif').findOne())
</script>

<template>
    <div>
      <h2>Article Work</h2>
      <p>{{path}}</p>
      <ContentDoc :path="path" />
   
    </div>
</template>




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


