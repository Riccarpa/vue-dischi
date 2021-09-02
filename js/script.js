console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albumList:[],
    selected:'All',
    
  },
  computed: {
  albumListSorted(){
    const albumSorted = this.albumList.sort(function(a, b){
      return a.year - b.year;
    })
    return albumSorted;
  },
  genreCatch(){
    const genres = [];
    this.albumList.forEach((element)=>{
      
     if(!(genres.includes(element.genre))){
      genres.push(element.genre)
     }
    })
    
    return genres;
  }
  
  
  },
  methods: {
    genreFilter(album){
      if(this.selected === album.genre || this.selected === 'All' ){

        return true;
      }

    },
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
