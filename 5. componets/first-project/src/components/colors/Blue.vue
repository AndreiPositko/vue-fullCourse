<template>
  <div>
    <h3>Blue Line</h3>  
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div> 
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log('Destroyed');
  },
  deactivated(){
    console.log('Deactivated');
  },
  activated(){
    console.log('Activated');
  },
};
</script>

<style scoped>
  div {
    background-color: blue;
    color: white;
  }
  button {
    color: black;
  }
</style>