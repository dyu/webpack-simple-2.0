import Vue from 'vue'
import Foo from './Foo'

export default Vue.extend({
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  render(h) {
    return (
      <div>
        <h1>{ this.msg }</h1>
        <Foo />
      </div>
    )
  }
})

