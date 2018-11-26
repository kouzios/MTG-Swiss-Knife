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
                        <input class='input-variant mw-100' type='text' v-model="player.life" :style='{color: player.lifeColor}' autocomplete="off"/>
                    </div>
                    <div class='col-4 btn point-alteration' @click='incriment(index)'>
                        +
                    </div>
                </div>
            </div>
        </div>
        <div class='pt-2 pb-2 d-flex justify-content-center flex-row point-alteration'>
            <font-awesome-icon class='clickable' icon="users" v-b-modal.playersModal/>
            <font-awesome-icon class='ml-2 clickable' icon="sync" @click='resetState'/>
            <font-awesome-icon class='ml-2 clickable' icon="cog" v-b-modal.settingsModal/>
        </div>
        <PlayerCount :playerCount='players.length' @update='playersUpdate'/>
        <Settings :defaultLife='defaultLife' @update='settingsUpdate'/>
    </div>
</template>

<script>
import Settings from "./Settings.vue";
import PlayerCount from "./PlayerCount.vue";

export default {
    components: {
        Settings,
        PlayerCount
    },
    data: function() {
        return {
            defaultLife: 40,
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
        },
        resetState() {
            for(var i = 0; i < this.players.length; i++) {
                this.players[i].life = this.defaultLife
            }
        },
        settingsUpdate(val) {
            this.defaultLife = val
        },
        playersUpdate(val) {
            var difference = val - this.players.length;
            if(difference == 0) {
            } else if (difference > 0) {
                for(var i = 0; i < difference; i++) {
                    this.players.push({
                        name: "Player " + (this.players.length + 1),
                        life: this.defaultLife,
                        lifeColor: "black"
                    });
                }
            } else {
                for(var i = difference; i < 0; i++) {
                    this.players.pop();
                }
            }
        }
    },
    watch: {
        players: {
            handler: function(val) {
                for(var i = 0; i < this.players.length; i++) {
                    var life = val[i].life;
                    if(life > this.defaultLife) {
                        this.players[i].lifeColor = "green";
                    } else if (life == this.defaultLife) {
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

.name-input {
    text-align: center;
    font-size: 32px;
    border: none !important;
}

.point-area {
    background-color: #f8f8f8;
}
</style>