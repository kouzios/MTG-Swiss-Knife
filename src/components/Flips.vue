<template>
<div>
    <b-modal ref='flipsModal' id="flipsModal" hide-footer title="Coin Flipper">
        <div class='w-100 row point-area'>
            <div class='col-2 btn major-point-alteration' @click='decriment(5)'>
                -5
            </div>
            <div class='col-2 btn point-alteration' @click='decriment(1)'>
                -1
            </div>
            <div class='col-4'>
                <input class='input-variant mw-100' type='text' v-model="flips" autocomplete="off"/>
            </div>
            <div class='col-2 btn point-alteration' @click='flips++'>
                +1
            </div>
            <div class='col-2 btn major-point-alteration' @click='flips+=5'>
                +5
            </div>
        </div>
        <div class='w-100 mt-3 d-flex flex-row justify-content-around'>
            <span class='results'>
                Heads:
                <span> 
                    {{ flipData.heads }} 
                </span>
            </span>
            <span v-b-tooltip.hover.right="'Flip Logs'" class='results mr-3'>
                <font-awesome-icon class='clickable' icon="book" v-b-modal.logModal/>
            </span>
            <span class='results'>
                Tails:
                <span>
                    {{ flipData.tails }} 
                </span>
            </span>
        </div>
        <div class='btn btn-primary w-100 mt-3' @click='flip'>
            <span>
                FLIP
            </span>
        </div>
    </b-modal>
    <FlipLogs :logs="logs" @back='back'/>
</div>
</template>

<script>
import FlipLogs from "./FlipLogs.vue";

export default {
    components: {
        FlipLogs
    },
    data: function() {
        return {
            flipData: {
                heads: 0,
                tails: 0
            },
            flips: 0,
            logs: []
        }
    },
    methods: {
        hideModal() {
            this.$refs.flipsModal.hide()
        },
        decriment(count) {
            for(var i = 0; i < count; i++) {
                if(this.flips > 0) {
                    this.flips--;
                }
            }
        },
        flip() {
            this.resetData();
            var heads = 0
            var tails = 0
            for(var i = 0; i < this.flips; i++) {
                if(Math.floor(Math.random() * 2) == 0) {
                    this.flipData.heads++
                    heads++
                    this.logs.push({
                        flip: i+1,
                        result: "Heads",
                        state: "Heads: " + heads + "\tTails: " + tails,
                        //This is some bootstrap vue table styling schenanigans
                        _cellVariants: {
                            result: 'success'
                        }
                    });
                } else {
                    this.flipData.tails++
                    var data = this.flipData
                    tails++
                    this.logs.push({
                        flip: i+1,
                        result: "Tails",
                        state: "Heads: " + heads + "\tTails: " + tails,
                        _cellVariants: {
                            result: 'danger'
                        }
                    });
                }
            }
        },
        resetData() {
            this.logs = []
            this.flipData.heads = 0
            this.flipData.tails = 0
        },
        back() {
            this.$refs.flipsModal.show()
        }
    }
}
</script>

<style scoped>
.results {
    font-size: 18pt
}
</style>