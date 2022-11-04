const {createApp} = Vue;

createApp({
  data(){
    return {
      logo: 'img/logo.png',
      tasks:[
        {
          text: 'studiare',
          done: true
        },

        {
          text: 'mangiare',
          done: true
        },
     
        {
          text: 'dormire',
          done: false
        },
     
     
       ],
       newString: '',
       erroreStringa:'',


      
    }
  },

  methods:{
    createTask(){
      console.log(this.newString);
      this.erroreStringa = '';
      if(this.newString.length < 5){
        this.erroreStringa = "Devi inserire almeno 5 caratteri"
      }else{
        const newTask = {
          text: this.newString,
          done: false
        }
        this.tasks.unshift(newString);
        this.newString = '';
      }

    },

    removeTask(index){
      console.log(index);

    }

  }



}).mount('#app')