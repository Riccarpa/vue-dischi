console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albumList:[],
  },
  computed: {
  albumListSorted(){
    const albumSorted = this.albumList.sort(function(a, b){
      return a.year - b.year;
    })
    return albumSorted;
  }
  },
  methods: {
    maggiore(a,b) {
      if (a.year < b.year){
        return -1;
      }
      else if (a.year > b.year){
        return 1;
      }
      return 0;
    }
  },
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
