import React, { useState, useEffect } from 'react';
// Use this syntax if you don't want configure webpack!
// /* eslint-disable import/no-webpack-loader-syntax */
// import Worker from 'worker-loader!./workers/apple.worker.js';
// otherwise use this in webpack:
/**
 * rules: [
        {
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' },
        },
 */

import Worker from './workers/apple.worker.js';

const appleWorker = new Worker();

const App = () => {
  const [countTomato, setCountTomato] = useState(0);
  const [countApple, setCountApple] = useState(0);

  useEffect(() => {
    appleWorker.onmessage = e => {
      if (e && e.data) {
        setCountApple(e.data);
      }
    };
  }, []);

  function incApple() {
    appleWorker.postMessage({ msg: 'incApple', countApple: countApple });
  }

  return (
    <div>
      <div>
        Tomato: {countTomato} | Apple: {countApple}
      </div>

      <div>
        <button onClick={() => setCountTomato(countTomato + 1)}>Tomato</button>

        <button onClick={() => incApple()}>Apple</button>
      </div>
    </div>
  );
};

export default App;
