<template>
  <el-cascader expand-trigger="hover" :options="calcOptions" v-model="currentValue" @change="handleChange"></el-cascader>
</template>

<script>
export default {
  props: {
    value: {
      require: true
    },
    options: {
      type: Array,
      require: true
    }
  },
  computed: {
    currentValue: {
      get () {
        let that = this
        let realValues = []
        function valuesFromObject (object) {
          let tmpValues = [object.value]
          let parent = object.parent
          while (parent) {
            tmpValues.push(parent.value)
            parent = parent.parent
          }
          realValues = tmpValues.reverse()
        }
        function handleChildrenValue (children) {
          children.forEach((child) => {
            if (child.value === that.value) {
              valuesFromObject(child)
            } else if (child.children) {
              handleChildrenValue(child.children)
            }
          })
        }
        handleChildrenValue(this.calcOptions)
        return realValues
      },
      set (newVal) {
        this.$emit('input', (newVal.length && newVal.pop()) || '')
      }
    },
    calcOptions () {
      function handleChildren (children, parent = null) {
        children.forEach((child) => {
          child.parent = parent
          if (child.children && child.children.length) {
            handleChildren(child.children, child)
          }
        })
      }
      handleChildren(this.options)
      return this.options
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
