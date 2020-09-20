self.onmessage = e => {
  const start = new Date().getSeconds();
  while (new Date().getSeconds() < start + 2) {
    console.log('Heavy logic is running!');
  }
  self.postMessage(e.data.countApple + 1);
};
