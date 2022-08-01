export const TodoUpdateForm = {
  template: '#todo-update-form',

  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      require: true
    }
  },

  emits: ['update-item'],

  methods: {
    updateItem () {
      const updatedItem = {
        index: this.index,
        item: this.item
      }
      this.$emit('update-item', updatedItem)
    }
  }
}
