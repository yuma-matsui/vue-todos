const app = Vue.createApp({
  data () {
    return {
      newTodoItem: {
        title: '',
        highPriority: false,
        editable: false,
        done: false,
      },
      todoItems: [],
    }
  },
  computed: {
    mainTitle () {
      return this.todoItems.length > 0
        ? 'Your todo lists.'
        : 'Add your tasks.'
    },
    existTodoItems () {
      return this.todoItems.length > 0
    },
    itemStatus () {
      return (item) => {
        return {
          'high-priority': item.highPriority,
          done: item.done
        }
      }
    }
  },
  methods: {
    addTodoItem () {
      this.todoItems.push(this.newTodoItem)
      this.saveTodoItems()
      this.resetItem()
    },

    resetItem () {
      this.newTodoItem = {
        title: '',
        highPriority: false,
        editable: false,
        done: false
      }
    },

    saveTodoItems () {
      localStorage.clear()
      const todoItemJson = JSON.stringify(this.todoItems)
      localStorage.setItem('todoItems', todoItemJson)
    },

    editItem (item) {
      item.editable = true
    },

    updateItem (item) {
      item.editable = false
      this.saveTodoItems()
    },

    deleteItem (index) {
      this.todoItems.splice(index, 1)
      this.saveTodoItems()
    },
  },

  created () {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'))
    this.todoItems = todoItems ?? []
  }
})

app.mount('#todo-app')
