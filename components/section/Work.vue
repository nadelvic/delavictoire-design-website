<script setup >
    const lang = useI18n().locale.value;
    const { data } = await useAsyncData('posts', () => {  
        return queryContent().where({section: 'work'}).find();
    })
</script>

<template>
    <div>
        <h1>{{$t('work.title')}}</h1>   
        <div v-for="article in data" :key="article._path">
            <div v-if="(article.locale == lang)">
                <h2>{{ article.title }}</h2>
                <p>{{ article.short }}</p>
                <NuxtLink :to="article._path.replace('/en/','/')">Link</NuxtLink>
            </div> 
      </div>         
    </div>
</template>



<!--
[
  {
    "title": "En",
    "_path": "/en",
    "children": [
      {
        "title": "Hello",
        "_path": "/en/hello"
      },
      {
        "title": "Work",
        "_path": "/en/work",
        "children": [
          {
            "title": "CapQualif",
            "_path": "/en/work/capqualif"
          },
          {
            "title": "L'enquete du siecle",
            "_path": "/en/work/enquete-du-siecle"
          }
        ]
      }
    ]
  },
  {
    "title": "Fr",
    "_path": "/fr",
    "children": [
      {
        "title": "Work",
        "_path": "/fr/work",
        "children": [
          {
            "title": "CapQualif",
            "_path": "/fr/work/capqualif"
          },
          {
            "title": "L'enquete du siecle",
            "_path": "/fr/work/enquete-du-siecle"
          }
        ]
      }
    ]
  },
  {
    "title": "Hello there",
    "_path": "/"
  }
]
-->