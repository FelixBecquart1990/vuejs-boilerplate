new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    number: 0
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
});
