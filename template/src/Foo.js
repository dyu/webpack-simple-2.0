import Vue from 'vue'

export default Vue.extend({
  props: ['foo'],
  data() {
    return {
      greet: 'foo!'
    }
  },
  render(h) {
    return (
      <div style={{color:'green'}}>
        {this.foo} {this.greet}
      </div>
    )
  }
})
