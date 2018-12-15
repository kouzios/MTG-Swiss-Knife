<template>
    <div class='container'>
        <div class='row large-font'>
            <div class='player card col-6'  :class="{flipped: player.isFlipped}" v-for="(player, index) in players" :key="'player' + index">
                <div class='d-flex flex-row'>
                    <font-awesome-icon class='clickable flip' icon="level-up-alt" v-b-tooltip.hover.bottom="'Flip View'" @click="player.isFlipped = !player.isFlipped"/>
                    <input class="name-input w-100" type='text' v-model="player.name" autocomplete="off"/>
                </div>
                <Lifestate :defaultLife='defaultLife' :player='player' :index='index'/>
            </div>
        </div>
        <div class='pt-2 pb-2 ml-0 d-flex justify-content-center footer flex-row w-100 large-font'>
            <span class='clickable' v-b-tooltip.hover.bottom="'Set Players'" v-b-modal.playersModal>
                <font-awesome-icon icon="users"/>
            </span>
            <span class='ml-2 clickable' v-b-tooltip.hover.bottom="'Flip Coins'" v-b-modal.flipsModal>
                <font-awesome-icon icon="coins"/>
            </span>
            <span  class='ml-2 clickable' v-b-tooltip.hover.bottom="'Reset'" @click='resetState'>
                <font-awesome-icon icon="sync"/>
            </span>
            <span class='ml-2 clickable' v-b-tooltip.hover.bottom="'Settings'" v-b-modal.settingsModal>
                <font-awesome-icon  icon="cog"/>
            </span>
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
                    lifeColor: "black",
                    isFlipped: false
                },
                {
                    name: "Player 2",
                    life: 40,
                    lifeColor: "black",
                    isFlipped: false
                },
                {
                    name: "Player 3",
                    life: 40,
                    lifeColor: "black",
                    isFlipped: false
                },
                {
                    name: "Player 4",
                    life: 40,
                    lifeColor: "black",
                    isFlipped: false
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
        flip(index) {

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
    border: none !important;
}

.footer {
  background-color: #f1f1f1 !important;
}

.condensed {
    margin-bottom: 0px !important;
}

.flipped {
    -webkit-transform:rotate(-180deg);
    -moz-transform:rotate(-180deg);
    -o-transform:rotate(-180deg);
    transform:rotate(-180deg);
    filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
}

.flip {
    padding: 2px 2px 0px 2px;
}
</style>