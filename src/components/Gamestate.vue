<template>
    <div>
        <div class='row'>
            <div class='player card col-6' v-for="(player, index) in players" :key="'player' + index">
                <input class='name-input' type='text' v-model="player.name" autocomplete="off"/>
                <hr>
                <div class='row point-area'>
                    <div class='col-4 btn point-alteration' @click='decriment(index)'>
                        -
                    </div>
                    <div class='col-4'>
                        <input class='life-input mw-100' type='text' v-model="player.life" :style='{color: player.lifeColor}' autocomplete="off"/>
                    </div>
                    <div class='col-4 btn point-alteration' @click='incriment(index)'>
                        +
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            players: [
                {
                    name: "Player 1",
                    life: 40,
                    lifeColor: "black"
                },
                {
                    name: "Player 2",
                    life: 40,
                    lifeColor: "black"
                },
                {
                    name: "Player 3",
                    life: 40,
                    lifeColor: "black"
                },
                {
                    name: "Player 4",
                    life: 40,
                    lifeColor: "black"
                }
            ]
        }
    },
    methods: {
        decriment(index) {
            this.players[index].life--
        },
        incriment(index) {
            this.players[index].life++
        }
    },
    watch: {
        players: {
            handler: function(val) {
                for(var i = 0; i < this.players.length; i++) {
                    var life = val[i].life;
                    if(life > 40) {
                        this.players[i].lifeColor = "green";
                    } else if (life == 40) {
                        this.players[i].lifeColor = "black";
                    } else {
                        this.players[i].lifeColor = "#BA2020";
                    }

                    if(life == 1337) {
                      var src = new Audio("../../static/nicememe.wav");
                      src.play();
                    }
                }
            },
            deep: true
        }
    }
}
</script>

<style scoped>
.player {
    box-shadow: 2px 2px lightgray;
    text-align: center;
    padding-right: 0px !important;
}

.life-input {
    text-align: center;
    font-size: 32px;
    border: none !important;
    background-color: #f8f8f8;
    box-sizing: border-box;
}

.name-input {
    text-align: center;
    font-size: 32px;
    border: none !important;
}

.point-alteration {
    font-size: 24px;
    background-color: #f1f1f1 !important;
}

.point-area {
    background-color: #f8f8f8;
}
</style>