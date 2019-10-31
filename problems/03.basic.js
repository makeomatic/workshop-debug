// Contains an error that happens after a while
//

function dot() {
  console.info('I work!')
}

const error = new Error('oh my stack is so bad')

setTimeout(() => {
  dot()
  throw error
}, 50)
