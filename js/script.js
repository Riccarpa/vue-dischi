console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albumList:[],
  },
  methods: {},
  created(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((res)=>{
      const response = res.data.response;
      response.forEach(element => {
        this.albumList.push(element);
      });
    })
  }
});
