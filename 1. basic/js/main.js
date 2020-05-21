new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0,
    name: 'Positko',
    attachRed: false,
    color: 'green',
    width: 100
  },

  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
  // computed: {
  //   output: function() {
  //     return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
  //   }
  // },
  watch: {
    counter: function (value) {
      let vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000);
    }
  },

  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    increase: function (step) {
      this.counter += step;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function (event) {
      event.stopPropagation();
    },
    alertMe: function () {
      alert('Alert!');
    },
    result: function () {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
});