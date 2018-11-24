<template>
    <div>
        <div class='row-fluid'>
            <div class='player card col-6' v-for="(player, index) in players" :key="'player' + index">
                <input class='name-input' type='text' :value="player.name" autocomplete="off"/>
                <hr>
                <input class='life-input' type='text' :value="player.life" autocomplete="off"/>
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
                    life: 40
                },
                {
                    name: "Player 2",
                    life: 40
                },
                {
                    name: "Player 3",
                    life: 40
                },
                {
                    name: "Player 4",
                    life: 40
                }
            ]
        }
    }
}
</script>

<style scoped>
.player {
    box-shadow: 2px 2px lightgray;
    text-align: center;
    margin: 1rem 1rem 1rem 1rem;
}

.life-input {
    text-align: center;
    font-size: 32px;
    color: green;
    border: none !important;
}

.name-input {
    text-align: center;
    font-size: 32px;
    border: none !important;
}
</style>