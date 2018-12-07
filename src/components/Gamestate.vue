<template>
    <div class='container'>
        <div class='row'>
            <div class='player card col-6' v-for="(player, index) in players" :key="'player' + index">
                <input class='name-input' type='text' v-model="player.name" autocomplete="off"/>
                <hr class='condensed'>
                <Lifestate :defaultLife='defaultLife' :player='player' :index='index'/>
            </div>
        </div>
        <div class='pt-2 pb-2 ml-0 d-flex justify-content-center footer flex-row w-100'>
            <font-awesome-icon class='clickable' icon="users" v-b-modal.playersModal/>
            <font-awesome-icon class='ml-2 clickable' icon="coins" v-b-modal.flipsModal/>
            <font-awesome-icon class='ml-2 clickable' icon="sync" @click='resetState'/>
            <font-awesome-icon class='ml-2 clickable' icon="cog" v-b-modal.settingsModal/>
        </div>
        <PlayerCount :playerCount='players.length' @update='playersUpdate'/>
        <Settings :defaultLife='defaultLife' @update='settingsUpdate'/>
        <Flips/>
    </div>
</template>

<script>
import Settings from "./Settings.vue";
import PlayerCount from "./PlayerCount.vue";
import Lifestate from "./Lifestate.vue";
import Flips from "./Flips.vue";

export default {
    components: {
        Settings,
        PlayerCount,
        Lifestate,
        Flips
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
    }
}
</script>

<style scoped>
.player {
    box-shadow: 2px 2px lightgray;
    text-align: center;
    padding: 0px !important;
    margin: 0px !important;
}

.name-input {
    text-align: center;
    font-size: 32px;
    border: none !important;
}

.footer {
  font-size: 24px;
  background-color: #f1f1f1 !important;
}

.condensed {
    margin-bottom: 0px !important;
}
</style>