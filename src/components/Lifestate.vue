<template>
    <div class='w-100 row point-area'>
        <div class='col-4 btn point-alteration' @click='decriment(pIndex)'>
            -
        </div>
        <div class='col-4'>
            <input class='input-variant mw-100' type='text' v-model="playerData.life" :style='{color: playerData.lifeColor}' autocomplete="off"/>
        </div>
        <div class='col-4 btn point-alteration' @click='incriment(pIndex)'>
            +
        </div>     
    </div>
</template>
<script>
export default {
    props: [
        'index',
        'player',
        'defaultLife'
    ],
    data: function() {
        return {
            pIndex: this.index,
            playerData: this.player,
            dLife: this.defaultLife
        }
    },
    methods: {
        incriment(index) {
            this.playerData.life++
        },
        decriment(index) {
            this.playerData.life--
        }
    },
    watch: {
        playerData: {
            handler: function(val) {
                var life = val.life;
                if(life > this.dLife) {
                    this.playerData.lifeColor = "green";
                } else if (life == this.dLife) {
                    this.playerData.lifeColor = "black";
                } else {
                    this.playerData.lifeColor = "#BA2020";
                }

                if(life == 1337) {
                    var src = new Audio("../../static/nicememe.wav");
                    src.play();
                }
            },
            deep: true
        }
    }
}
</script>
<style scoped>
.point-area {
    margin-left: 0px !important;
    margin-right: 0px !important;
    background-color: #f8f8f8;
}
</style>