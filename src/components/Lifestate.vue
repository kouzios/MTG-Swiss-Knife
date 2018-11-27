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
        },
        handleColoring(life) {
            if(life > this.dLife) {
                this.playerData.lifeColor = "green";
            } else if (life == this.dLife) {
                this.playerData.lifeColor = "black";
            } else {
                this.playerData.lifeColor = "#BA2020";
            }
        }
    },
    watch: {
        playerData: {
            handler: function(val) {
                this.handleColoring(val.life)
            },
            deep: true
        },
        defaultLife: {
            handler: function(val) {
                this.dLife = val
            }
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