<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <button @click="changeAge">Return Old Value of Age</button>
    <p>Name is {{ name }}</p>
    <hr />
    <div class="row">

      <div class="col-xs-12 col-sm-6">
        <app-user-detail 
        :name="name" 
        @nameWasReset="name = $event" 
        :resetFn="resetName"
        :userAge='age'
        ></app-user-detail>
      </div>

      <div class="col-xs-12 col-sm-6">
        <app-user-edit 
        :userAge='age' 
        @ageWasEdited='age = $event'
        :ageEditFn='userEditAge'
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
const INITIAL_AGE = 27;
export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },

  data: function() {
    return {
      name: "Andrey",
      age: INITIAL_AGE
    };
  },
  methods: {
    changeName() {
      this.name = "Vladislav";
    },

    resetName() {
      this.name = "Andrey";
    },

    userEditAge() {
      this.age = '32'
    },

    changeAge() {
      this.age = INITIAL_AGE
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
