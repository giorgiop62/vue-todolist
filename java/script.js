const { createApp } = Vue;

createApp({
  data() {
    return {
      logo: 'img/logo.png',
      tasks: [
        {
          text: 'studiare',
          done: false
        },

        {
          text: 'mangiare',
          done: false
        },

        {
          text: 'dormire',
          done: false
        },


      ],
      newString: '',
      erroreStringa: '',
    }
  },

  methods: {
    createTask() {
      if (this.newString.length < 5) {
        this.erroreStringa = "Inserisci una task di almeno 5 caratteri";
      } else {
        this.erroreStringa = "";

        this.tasks.push({
          text: this.newString,
          done: false
        });
      }
    },
    setTask(task) {
      //
      newDone = !task.done;
      this.tasks.$set(task, "done", newDone);

    },
    deleteTask(index, task) {
      if (task.done) {
        this.erroreStringa = "";
        this.tasks.splice(index, 1);
        } else {
        this.erroreStringa = "Devi completare la task prima di poterla eliminare";
      }
    }
  }
}).mount('#app')