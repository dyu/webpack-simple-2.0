import Vue from 'vue'
import Foo from './Foo'

export default Vue.extend({
  props: ['baz'],
  data() {
    return {
      greet: 'baz!'
    }
  },
  render(h) {
    return (
      <div>
        <foo></foo>
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
      </div>
    )
  }
})

