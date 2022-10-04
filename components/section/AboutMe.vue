<template>
    <div>
        <div class="aboutme-container offset_3 grid_6 m_8 fs-22">
            <h1>{{$t("aboutme.title")}}</h1>
            <p>{{$t("aboutme.paragraph1", {age: 31})}}</p>
          
            <p>{{$t("aboutme.strategicDesign.beginning")}}&nbsp;
                <span class="yellow-underline">{{$t("aboutme.strategicDesign.skill")}}</span>
                {{$t("aboutme.strategicDesign.description")}}

            </p>
            <p>{{$t("aboutme.interactionDesign.beginning")}}
                <span class="yellow-underline">{{$t("aboutme.interactionDesign.skill")}}</span>
                {{$t("aboutme.interactionDesign.description")}}
            </p>

        </div>
       
    </div>
</template>
<style lang="scss">
    .aboutme-container{
        margin-top:4rem;
    }
</style>