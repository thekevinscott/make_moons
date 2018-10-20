const makeSineFn = (phase = 0, A = 1, freq = Math.PI * 3 / 2) => x => A * Math.sin((freq * x) + phase);

const getRandom = noise => (Math.random() * noise) - (noise / 2);

const getRandomX = (min, max) => min + (Math.random() * (max - min));

const getDot = ({
  fn,
  noise,
  range,
}) => {
  const x = getRandomX(range[0], range[1]);
  return {
    x: x + getRandom(noise),
    y: fn(x) + getRandom(noise),
  };
}

const fns = {
  pos: makeSineFn(0),
  neg: makeSineFn(Math.PI / 2),
}

const getDotType = {
  pos: (noise) => getDot({
    fn: fns.pos,
    noise,
    range: [0, 1 / 3 * 2],
  }),
  neg: (noise) => getDot({
    fn: fns.neg,
    noise,
    range: [1 / 3, 1],
  }),
}

const getData = ({
  type,
  noise = 1,
  n_samples = 200,
}) => {
  const dots = [];
  for (let i = 0; i < n_samples; i++) {
    dots.push(getDotType[type](noise));
  }
  return dots;
};

const make_moons = (props) => ([
  getData({ type: 'pos', ...props }),
  getData({ type: 'neg', ...props }),
]);

export default make_moons;
