export const TodoDeleteButton = {
  template: '#todo-delete-button',

  props: {
    index: {
      type: Number,
      required: true
    }
  },

  emits: ['delete-item'],

  methods: {
    deleteItem () {
      this.$emit('delete-item', this.index)
    }
  }
}
