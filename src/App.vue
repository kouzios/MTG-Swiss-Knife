<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  padding-right: 0px !important;
}

.clickable {
  cursor: pointer;
}

.point-alteration {
  font-size: 24px;
  background-color: #f1f1f1 !important;
  padding: 0px !important;
}

.major-point-alteration {
  font-size: 24px;
  background-color: rgb(231, 231, 231) !important;
  padding: 0px !important;
}

.modal-close {
  color: white !important;
}

.centered {
  text-align: center !important;
}

.input-variant {
    text-align: center;
    font-size: 32px;
    border: none !important;
    background-color: #f8f8f8;
    box-sizing: border-box;
}
</style>
