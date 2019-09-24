const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// code = [up, up, down, down, left, right, left, right, b, a]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.body;
  let index = 0;

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("You cracked the code!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
