const worker = new Worker('worker.js');
worker.addEventListener('message', e => {
  console.log(e);
});

worker.addEventListener('error', e => {
  console.log(e);
});
worker.addEventListener('messageerror', e => {
  console.log(e);
});

document.getElementById('block').addEventListener('click', () => {
  worker.postMessage('block');
});

document.getElementById('click').addEventListener('click', () => {
  worker.terminate();
  if (document.body.style.backgroundColor === 'violet') {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'violet';
  }
});
