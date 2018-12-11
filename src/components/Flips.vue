<template>
<div>
    <b-modal ref='flipsModal' id="flipsModal" hide-footer title="Coin Flipper">
        <div>
            <div class='d-flex flex-row'>
                <span class='med-font'>
                        Coins
                </span>
            </div>
            <div class='w-100 row point-area'>
                <div class='col-2 btn major-point-alteration' @click='decriment(5)'>
                    -5
                </div>
                <div class='col-2 btn point-alteration' @click='decriment(1)'>
                    -1
                </div>
                <div class='col-4'>
                    <input class='input-variant mw-100' type='text' v-model="flips" @keyup.enter="flipSingle" autocomplete="off"/>
                </div>
                <div class='col-2 btn point-alteration' @click='flips++'>
                    +1
                </div>
                <div class='col-2 btn major-point-alteration' @click='flips+=5'>
                    +5
                </div>
            </div>
        </div>
        <div class='mt-3'>
            <div class='d-flex flex-row'>
                <span class='med-font'>
                    Krark's Thumbs
                </span>
            </div>
            <div class='w-100 row point-area'>
                <div class='col-3 btn point-alteration' @click='decrimentThumbs(1)'>
                    -1
                </div>
                <div class='col-6'>
                    <input class='input-variant mw-100' type='text' v-model="numThumbs" autocomplete="off"/>
                </div>
                <div class='col-3 btn point-alteration' @click='numThumbs++'>
                    +1
                </div>
            </div>
        </div>
        <div class='w-100 mt-3 d-flex flex-row justify-content-around large-font'>
            <span>
                Heads:
                <span> 
                    {{ flipData.heads }} 
                </span>
            </span>
            <span class='tinted-icon' v-b-tooltip.hover.bottom="'Flip Normal'">
                <font-awesome-icon class='clickable' icon="adjust" @click='flipSingle'/>
            </span>
            <span class='tinted-icon' v-b-tooltip.hover.bottom="'View Logs'" v-b-modal.logModal>
                <font-awesome-icon class='clickable' icon="book"/>
            </span>
            <span class='tinted-icon' v-b-tooltip.hover.bottom="'Flip Until Tails'">
                <font-awesome-icon class='clickable' icon='infinity' @click='flipUntilTails'/>
            </span>
            <span>
                Tails:
                <span>
                    {{ flipData.tails }} 
                </span>
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
            numThumbs: 0,
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
        decrimentThumbs(count) {
            for(var i = 0; i < count; i++) {
                if(this.numThumbs > 0) {
                    this.numThumbs--;
                }
            }        },
        flipSingle() {
            this.resetData()
            var flipData = {
                heads: 0,
                tails: 0
            }
            for(var i = 0; i < this.flips; i++) {
                if(this.flip()) {
                    flipData.heads++
                    this.updateLogs(i+1, "Heads", flipData)
                } else {
                    flipData.tails++
                    var data = this.flipData
                    this.updateLogs(i+1, "Tails", flipData)
                }
            }
            this.flipData = flipData
        },
        flipUntilTails() {
            this.resetData()
            var tails = false
            var count = 0
            var flipData = {
                heads: 0,
                tails: 0
            }

            while(!tails) {
                if(this.flip()) {
                    flipData.heads++
                    this.updateLogs(count+1, "Heads", flipData)
                } else {
                    flipData.tails++
                    this.updateLogs(count+1, "Tails", flipData)
                    tails = true
                }
                count++
            }
            this.flipData = flipData
        },
        updateLogs(count, result, flipData) {
            var cellColor = 'success'
            if(result == "Tails") {
                cellColor = 'danger'
            }
            this.logs.push({
                flip: count,
                result: result,
                state: "Heads: " + flipData.heads + "\tTails: " + flipData.tails,
                //This is some bootstrap vue table styling to change cell color
                _cellVariants: {
                    result: cellColor
                }
            })
        },
        /**
         * Flips a single coin
         * 
         * @return Boolean True if heads, else tail
         */
        flip() {
            var heads = false
            //Flip this many coins and return if there was a heads (+1 due to normal flip)
            for(var i = 0; i < this.numThumbs + 1; i++) {
                //Flip a coin
                if(Math.floor(Math.random() * 2) == 0) {
                    heads = true
                }
            }
            return heads
        },
        resetData() {
            this.flipData = {
                heads: 0,
                tails: 0
            }
            this.logs = []
        },
        back() {
            this.$refs.flipsModal.show()
        }
    }
}
</script>

<style scoped>
</style>