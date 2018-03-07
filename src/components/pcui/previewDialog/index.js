import PreviewDialog from './src/previewDialog.vue'
PreviewDialog.install = function (Vue, options) {
  Vue.component(PreviewDialog.name, PreviewDialog)
}
export default PreviewDialog
