export const TodoEditButton = {
  template: '#todo-edit-button',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  emits: ['edit-item'],

  methods: {
    editItem () {
      this.$emit('edit-item', this.item)
    }
  }
}
