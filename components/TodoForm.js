export const TodoForm = {
  template: '#todo-form',

  data () {
    return {
      newTodoItem: {
        title: '',
        highPriority: false,
        editable: false,
        done: false
      }
    }
  },

  emits: ['add-todo-item'],

  methods: {
    addTodoItem () {
      this.$emit('add-todo-item', { ...this.newTodoItem })
      this.resetItem()
    },

    resetItem () {
      this.newTodoItem.title = ''
      this.newTodoItem.highPriority = false
    }
  }
}
