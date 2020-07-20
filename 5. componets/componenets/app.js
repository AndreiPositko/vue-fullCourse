// let data = {status: 'Critical'};

let cmp = {
  data: function() {
    return {
      status: 'Critical'
    }
    
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
};

let cmp2 = {
  data: function() {
    return {
      status: 'Official'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Informal';
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'my-cmp': cmp
  }
})

new Vue({
  el: '#app2',
  components: {
    'his-cmp': cmp2 
  }
})