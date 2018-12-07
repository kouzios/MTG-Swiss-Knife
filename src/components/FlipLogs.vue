<template>
  <b-modal ref='logModal' id="logModal" hide-footer title="Flip logs">
    <div class='d-flex flex-column justify-content-center'>
        <div class='w-100 mt-3 d-flex flex-column' id='log-container'>
            <h3 class='log_results'>
                Logs
            </h3>
            <span class='log_results' v-for="(log, index) in logs" :key="index + 'log'">
                <span>
                    Flip {{ index+1 }}:
                </span>
                <span v-b-tooltip.hover :title="'Heads: ' + log.state.heads + ' Tails: ' + log.state.tails">
                    {{log.result}}
                </span>
            </span>
        </div>
        <div class='btn btn-primary w-100 mt-3' @click='back'>
            <span>
                Back
            </span>
        </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: [
    'logs'
  ],
  data: function() {
    return {
    }
  },
  methods: {
    back () {
      this.$emit("back")
    },
  }
}
</script>

<style scoped>
.log_results {
    text-align: center;
    font-size: 18px;
}

#log-container {
    max-height: 400px;
    overflow-y: scroll;
}
</style>
