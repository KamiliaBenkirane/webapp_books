<template>
  <footer>
    <p>© Copyright something</p>
  </footer>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  position: fixed;
  height : 70px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:lightgray;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>