<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{reverseName}}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    resetFn: Function,
    userAge: Number
  },
  
  methods: {
    resetName() {
      this.$emit("nameWasReset", "Andrey");
    }
  },
    
  created() {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    })
  },

  computed: {
    reverseName() {
      return this.name
  }
}
}
</script>
    
<style scoped>
div {
  background-color: lightcoral;
}
</style>
