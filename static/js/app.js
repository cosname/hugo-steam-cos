var apiURLLeft = 'https://api.github.com/search/code?q='
var apiURLRight = '+in:file+language:md+repo:cosname/cosx.org'

var app = new Vue({

  el: '#app',

  data: {
    user: null,
    response: null
  },

  // watch: {
  //   user: 'fetchData'
  // },

  methods: {
    fetchData: function () {
      let self = this;
      console.log(123)
      console.log(self.user)
      fetch(apiURLLeft + encodeURI(self.user) + apiURLRight)
        .then(response => response.json())
          .then(data => {
            self.response = data
          });
    }
  },
  filters: {
   capitalize: function (value) {
     var len = value.length
     output = "https://cosx.org/" +
        value.slice(13,17) + "/" +
        value.slice(18,20) + "/" +
        value.slice(24,len-3)
     return(output)
   },
   getTitle: function (value) {
     var index = fileList.indexOf(value)
     output = title[index]
     return(output)
   }
   }
});
