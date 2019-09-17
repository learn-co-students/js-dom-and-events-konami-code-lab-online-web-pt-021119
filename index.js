const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const init = function() {
  const context = document.body
  let index = 0

  const onKeyDownHandler = function(current_key) {
    const key = parseInt(current_key.detail || current_key.which)
    console.log(`pressed: ${key}`);

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert ("Konami says hi :)")
        index = 0
      }
    } else {
      index = 0
    }
  }

  context.addEventListener('keydown', onKeyDownHandler)
}
