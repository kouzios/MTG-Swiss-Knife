<template>
  <b-modal ref='settingsModal' id="settingsModal" hide-footer title="Number of Players">
    <div class='d-flex flex-column justify-content-center'>
      <div class='centered'>
        <b>
          Default Life
        </b>
      </div>
      <div class='row'>
        <div class='col-2 btn point-alteration' @click='life = life - 5'>
            -5
        </div>  
        <div class='col-2 btn point-alteration' @click='life--'>
          -1
        </div>
        <input class='col-4 input-variant' type='number' v-model='life'>
        <div class='col-2 btn point-alteration' @click='life++'>
          +1
        </div>
        <div class='col-2 btn point-alteration' @click='life = life + 5'>
            +5
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
      this.life = this.defaultLife
    },
    saveChanges() {
      var life = this.life
      this.$emit('update', life)
      this.$refs.settingsModal.hide()
    }
  }
}
</script>