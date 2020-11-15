var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      new_todo: '',
      seen: false,
      seen_box_modifica: false,
      seen_box_index: -1,
      todos: [
        {
            text: "Compra il latte"
        },
        {
            text: "Compra il pane"
        },
        {
            text: "Compra il vino"
        }
      ] 
    },
    methods: {
        toggleAccordion() {
            this.seen = !this.seen;
        },
        deleteTodo (elm){
            this.todos.splice(elm, 1);
        },
        addTodo (){
            this.todos.push({'text': this.new_todo});
            this.new_todo = "";
        },
        toggleBoxModifica(elm) {
            // if (this.seen_box_index === elm) {
                this.seen_box_modifica = true;
            // }
            this.seen_box_index = elm;
        },

        hideBoxModifica() {
                this.seen_box_modifica = false;
                this.seen_box_index = -1;

        },


    }
  })