// listen for keyup event
// push keys to array
// check array with target string
  // slice from (-target length - 1) to (target length)

(function renderKeySequenceDetection() {
  let pressedKeys = [];
  const targetKeys = 'pat';

  window.addEventListener('keyup', (e) => {
    pressedKeys.push(e.key);
    let source = pressedKeys.slice(-targetKeys.length).join('');
    if (source === targetKeys) {
      cornify_add();
    }
  })
})()
