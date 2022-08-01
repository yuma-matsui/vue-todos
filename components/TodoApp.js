import { TodoEditButton } from './TodoEditButton.js'
import { TodoDeleteButton } from './TodoDeleteButton.js'
import { TodoForm } from './TodoForm.js'
import { TodoUpdateForm } from './TodoUpdateForm.js'

export const TodoApp = {
  template: '#todo-app',

  components: {
    TodoEditButton,
    TodoDeleteButton,
    TodoForm,
    TodoUpdateForm,
  },

  data () {
    return {
      todoItems: []
    }
  },

  created () {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'))
    this.todoItems = todoItems ?? []
  },

  computed: {
    existTodoItems () {
      return this.todoItems.length > 0
    },

    mainTitle () {
      return this.todoItems.length > 0
        ? 'Your todo lists.'
        : 'Add your tasks.'
    },
  },

  methods: {
    itemStatus (item) {
      return {
        'high-priority': item.highPriority,
        done: item.done
      }
    },

    addTodoItem (item) {
      this.todoItems.push(item)
      this.saveTodoItems()
    },

    saveTodoItems () {
      localStorage.clear()
      const todoItemsJson = JSON.stringify(this.todoItems)
      localStorage.setItem('todoItems', todoItemsJson)
    },

    editItem (item) {
      item.editable = true
    },

    updateItem ({ index, item }) {
      item.editable = false
      this.todoItems[index] = item
      this.saveTodoItems()
    },

    deleteItem (index) {
      this.todoItems.splice(index, 1)
      this.saveTodoItems()
    }
  }
}
