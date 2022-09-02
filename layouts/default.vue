<template>
    <div class="row container_12 fluid">
        <div class="ear left grid_1">
        </div>
        <div class="grid_10">
            <slot />   
        </div>
        <div class="ear right grid_1">

        </div>

    </div>
    
</template>

<style lang="scss">

.row {
    display:flex;
    justify-content: space-between;
    align-items:stretch;
}

.ear {
    display:block;
}


.ear.left{

    //border-right:1px solid #1D1D1D;
}
.ear.right{
    //border-left:1px solid #1D1D1D;
}


</style>