var app = new Vue({
  el: '#app',
  data: {
      message: '',
      header: ''
  },
  mounted() {
    axios
      .get('http://localhost:3000/articles/1')
      .then(response => (
        this.message = response.data.ArticleText,
        this.header = response.data.Header
      )).then(console.log("data retrieved from webservice : " + this.header));    
  }
});
