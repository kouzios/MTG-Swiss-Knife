<template>
  <b-modal ref='settingsModal' id="settingsModal" hide-footer title="Number of Players">
    <div class='d-flex flex-column justify-content-center'>
      <div class='centered'>
        <b>
          Default Life
        </b>
      </div>
      <div class='row'>
        <div class='col-4 btn point-alteration' @click='life--'>
          -
        </div>
        <input class='col-4 input-variant' type='number' v-model='life'>
        <div class='col-4 btn point-alteration' @click='life++'>
          +
        </div>
      </div>
      <div class='mt-2 d-flex flex-row justify-content-end modal-close'>
        <div class='btn bg-secondary mr-1' @click="hideModal">
          Cancel
        </div>
        <div class='btn bg-primary ml-1' @click="saveChanges">
          Save
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: [
    'defaultLife'
  ],
  data: function() {
    return {
      life: this.defaultLife
    }
  },
  methods: {
    hideModal() {
      this.$refs.settingsModal.hide()
    },
    saveChanges() {
      this.$emit('update', this.life)
      this.hideModal()
    }
  }
}
</script>

<style scoped>

</style>
