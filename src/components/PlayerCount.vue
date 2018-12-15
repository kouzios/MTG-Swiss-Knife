<template>
  <b-modal ref='playersModal' id="playersModal" hide-footer title="Number of Players">
    <div class='d-flex flex-column justify-content-center'>
      <span class='centered medium-font'>
        <b>
          Players
        </b>
      </span>
      <div class='row'>
        <div class='col-4 btn point-alteration' @click='pCount--'>
          -
        </div>
        <input class='col-4 input-variant' type='text' v-model='pCount'>
        <div class='col-4 btn point-alteration' @click='pCount++'>
          +
        </div>
      </div>
      <div class='mt-2 d-flex flex-row justify-content-end modal-close'>
        <div class='btn bg-secondary mr-1' @click="hideModal">Cancel</div>
        <div class='btn bg-primary ml-1' @click="saveChanges">Save</div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: [
    'playerCount'
  ],
  data: function() {
    return {
      pCount: this.playerCount
    }
  },
  methods: {
    hideModal () {
      this.$refs.playersModal.hide()
    },
    saveChanges() {
      this.$emit('update', this.pCount)
      this.hideModal()
    }
  }
}
</script>

<style scoped>

</style>
