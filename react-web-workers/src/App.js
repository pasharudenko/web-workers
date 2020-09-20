import React, { useState, useEffect } from 'react';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./workers/apple.worker.js';

const App = () => {
  const [countTomato, setCountTomato] = useState(0);
  const [countApple, setCountApple] = useState(0);

  const appleWorker = new Worker();
  console.log(appleWorker);

  useEffect(() => {}, []);

  function incApple() {}

  return (
    <div>
      <div>
        Tomato: {countTomato} | Apple: {countApple}
      </div>

      <div className='ion-padding-top'>
        <button onClick={() => setCountTomato(countTomato + 1)}>Tomato</button>

        <button onClick={() => incApple()}>Apple</button>
      </div>
    </div>
  );
};

export default App;
