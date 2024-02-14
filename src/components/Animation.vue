<template>
  <div class="animation-container">
    <div class="box-list">
      <div class="box">
        <div class="box-bg"></div>
        <div class="ball">0</div>
      </div>
      <div class="box">
        <div class="box-bg"></div>
      </div>
      <div class="box">
        <div class="box-bg glint"></div>
        <div class="ball">0</div>
      </div>

      <div class="box">
        <div class="box-bg"></div>
      </div>
      <div class="box">
        <div class="box-bg glint"></div>
      </div>
      <div class="box">
        <div class="box-bg"></div>
      </div>
      
      <div class="box">
        <div class="box-bg"></div>
        <div class="ball">0</div>
      </div>
      <div class="box">
        <div class="box-bg"></div>
      </div>
      <div class="box">
        <div class="box-bg glint"></div>
        <div class="ball">0</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.animation-container {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  overflow: hidden;
}
.box-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.box {
  width: calc(33.33% - 5px);
  height: 100px;
  box-sizing: border-box;
  position: relative;
}
.box-bg {
  height: 100px;
  border: black solid 2px;
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
}
.glint {
  animation: bg-glint 0.5s infinite;
}
.ball {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  z-index: 9;
  background-color: #a5f12b;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ball-run-right 2s infinite;
}
@keyframes bg-glint {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
@keyframes ball-run-right {
  0% {
    left: 50%;
  }
  100% {
    left: 280%;
  }
}
</style>
