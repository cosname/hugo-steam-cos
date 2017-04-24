var apiURLLeft = 'https://api.github.com/search/code?q='
var apiURLRight = '+in:file+language:md+repo:cosname/cosx.org'

var app = new Vue({

  el: '#app',

  data: {
    user: null,
    response: null,
    index:null
  },

  watch: {
    user: 'fetchData'
  },

  methods: {
    fetchData: function () {
      console.log(123)
      let self = this;

      console.log(apiURLLeft + encodeURI(self.user) + apiURLRight)
      fetch(apiURLLeft + encodeURI(self.user) + apiURLRight)
        .then(response => response.json())
          .then(data => {
            console.log(data)
            self.response = data
          });


    },
    judge: function(e){
        if(e.slice(0,12)!='content/post') return(false)
        return(true)
    }
  },
  filters: {
     finder: function (value) {
       var len = value.length
       output = value.slice(13,len)
       if(value.slice(0,12)!='content/post') return(null)
       for(var i=0;i<Filelist.posts.length;i++){
         if(output == Filelist.posts[i].path) return(i)
       }
     },
     getTitle: function (value) {
       return(Filelist.posts[value].title)
     },
     getAuthor: function (value) {
       return(Filelist.posts[value].author)
     },
     getLink: function (value) {
       console.log(value)
       return(Filelist.posts[value].link)
     },
     getDes: function (value) {
       return(Filelist.posts[value].description)
     },
     getDate: function (value) {
       return(Filelist.posts[value].date)
     }
   }
});
