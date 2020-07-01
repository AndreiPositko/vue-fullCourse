<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
    <button @click="ageEditFn()">Edit Age 2</button>
  </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
  props: {
    userAge: {
      type: Number,
      required: true
    },
    ageEditFn: Function
  },
  methods: {
    editAge() {
      this.userAge = 30;
      // this.$emit('ageWasEdited', 30);
      // eventBus.$emit('ageWasEdited', this.userAge);
      eventBus.changeAge(this.userAge);
    },
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
