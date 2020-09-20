this.addEventListener('message', e => {
  this.postMessage('Heavy logic is started!');
  const start = Date.now();
  while (Date.now() < start + 5000) {
    console.log('Heavy logic is running!');
  }
});
