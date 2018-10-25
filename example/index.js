/* globals Chart */
import make_moons from '../src/index';
const color = Chart.helpers.color;
const NOISE = 0.08;
const SAMPLES = 400;
const data = {
  datasets: [
    {
      label: 'Red',
      borderColor: 'red',
      backgroundColor: color('red').alpha(0.2).rgbString(),
      data: make_moons({ type: 'pos', n_samples: SAMPLES, noise: NOISE }),
    },
    {
      label: 'Blue',
      borderColor: 'blue',
      backgroundColor: color('blue').alpha(0.2).rgbString(),
      data: make_moons({ type: 'neg', n_samples: SAMPLES, noise: NOISE }),
    },
  ],
};

const ctx = document.getElementById('chart').getContext('2d');
Chart.Scatter(ctx, {
  data,
  options: {
    legend: {
      display: false,
    },
  },
});
