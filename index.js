const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0;

  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[i] === key) {
      i++;

      if (i === code.length) {
        alert('Hurray!');

        i = 0;
      }
    } else {
      i = 0;
    }
  });
}

init();
