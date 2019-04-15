var vm1 = new Vue({
  el: '#app',
  data: {
    event: {
      eventDate: '15/04/2019',
      eventTitle: 'Residencia Demo',
      eventTitle2: 'v-text output',
      signUpText: 'Añade el nombre del invitado',
      eventDescription: "web app registro manual",
    },
    newNameText: '',
    guestName: [],
    eventCapacity: 100,
    eventCapacityPercentage: 0,
    effect1: "scale"
  },
  methods: {
    formSubmitted: function() {
      if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);
        // clear input field after enter
        this.newNameText = '';
        this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
      }
    },
    keyPressed: function() {
      console.log('keypressed');
    }
  },
  computed: {
    sortNames: function() {
      return this.guestName.sort();
    }
  },
  watch: {
    guestName: function(data) {
      console.log('Watch triggered');
    }
  },
  filters: {
    formatName: function(value) {
      // console.log(value);
      return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
    }
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  }
});
//
var vm2 = new Vue({
  el: '#navigation',
  data: {
    appName: 'Guest List',
    navLinks: [
      {name: "Home", id: 1, url: "https://http://garitapp.com.mx"},
      {name: "Bitacora", id: 2, url: "https://www.amazon.com"},
      {name: "Chat", id: 3, url: "https://http://secundus.com.mx"},
      {name: "Ingresar Clave", id: 4, url: "https://garitapp.com.mx/funciones/"}
    ],
    object: {}
  },
  methods: {
    changeTitle: function() {
      this.$refs.name.innerText = "Title Changed!";
      console.log(this.$refs);
    }
  }
});
