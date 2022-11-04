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
     
     
       ]


      
    }
  }



}).mount('#app')