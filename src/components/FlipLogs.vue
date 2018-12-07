<template>
  <b-modal ref='logModal' id="logModal" hide-footer title="Flip logs">
    <div class='d-flex flex-column justify-content-center'>
        <div class='w-100 mt-3 d-flex flex-column' id='log-container'>
            <b-table small :items="logs"/>
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
    hideModal() {
        this.$refs.logModal.hide()
    },
    back () {
      this.$emit("back")
    }
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

.result {
    text-decoration: underline dotted;
}
</style>
