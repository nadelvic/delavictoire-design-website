<template>
    <div class="logo">
        <div class="rectangle">
            <div class="bigCircle"></div>
            <div class="smallCircle"></div>
        </div>
        <div class="logo-text">
            Delavictoire <br />Design
        </div>
    </div>
</template>
<style lang="scss">
    .logo{
        display:flex;
        align-items:flex-start;

        $logoBorderSize:3.5px;
        $BigCircleSize: 62px;
        $SmallCircleSize:12px;

        .rectangle{
            border:$logoBorderSize solid $g75;
            box-sizing:border-box;
            overflow:hidden;
            position:relative;
            width:44px;
            height:38px;
            margin-right:6px;

            .bigCircle {
                position:absolute;
                border:$logoBorderSize solid $g75;
                width:$BigCircleSize; height: $BigCircleSize;
                border-radius:$BigCircleSize;
                top:10%;
                left:-100%;
            }
            .smallCircle{
                position:absolute;
                border:$logoBorderSize solid $g75;
                width:$SmallCircleSize; height:$SmallCircleSize;
                border-radius:$SmallCircleSize;
                top:18%;
                left:32%;
            }
        }
        .logo-text{
            font-weight:$bold;
            font-size:1.2rem;
            line-height:1.3rem;
        }
    }
</style>