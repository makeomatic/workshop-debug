// Contains an error that happens after a while
//

function dot() {
  console.info('I work!')
}

setTimeout(() => {
  dot()
  throw new Error('not really')
}, 50)
