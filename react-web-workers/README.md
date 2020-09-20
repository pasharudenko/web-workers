Use this syntax if you don't want configure webpack!
// /_ eslint-disable import/no-webpack-loader-syntax _/
import Worker from 'worker-loader!./workers/apple.worker.js';
otherwise use this in webpack:

rules: [
{
test: /\.worker\.js\$/,
use: { loader: 'worker-loader' },
},
