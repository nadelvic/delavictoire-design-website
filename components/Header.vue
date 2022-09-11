<template>
    <div class="header row container_12 fluid">
        <div class="logo-container">
            <Logo />
        </div>
        <div class="menu">
            <!---<div class="menu-item">Offer</div>
            <div class="menu-item">Work</div>
            <div class="menu-item">Blog</div>-->
            <LangNavigation class="menu-item lang" />
        </div>
    </div>
</template>
<style lang="scss">
    .header {
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:6rem;
        //border-bottom:1px solid $g850;
        box-sizing:border-box;
        .logo-container {
            margin-left:4rem;
            margin-right:2rem;
        }
        .menu {
            margin-right:4rem;
            display:flex;
            flex-direction:row;
            justify-content: flex-end;
            font-weight:$bold;
            > .menu-item.lang {
                margin-left:4rem;
            }
            > .menu-item {
                margin-left:2rem;
            } 
        }
        
    }
</style>