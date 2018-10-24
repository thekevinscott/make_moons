const makeSineFn = (phase = 0, A = 1, freq = Math.PI * 3 / 2) => x => A * Math.sin((freq * x) + phase);

const getRandom = max => (Math.random() * max);

const getRandomPosition = (min, max) => min + (Math.random() * (max - min));

const getDot = ({
  fn,
  noise,
  range,
}) => {
  const x = getRandomPosition(range[0], range[1]);
  const radius = getRandom(noise);
  const theta = getRandom(Math.PI * 2);

  return {
    x: x + (Math.sin(theta) * radius),
    y: fn(x) + (Math.cos(theta) * radius),
  };
}

const fns = {
  pos: makeSineFn(0),
  neg: makeSineFn(Math.PI / 2),
}

const getDotType = {
  pos: (noise, range = [0, 2 / 3]) => getDot({
    fn: fns.pos,
    noise,
    range,
  }),
  neg: (noise, range = [1 / 3, 1]) => getDot({
    fn: fns.neg,
    noise,
    range,
  }),
}

const getData = ({
  type,
  noise = 1,
  n_samples = 200,
  range,
}) => {
  const dots = [];
  if (!type) {
    type = Math.random() > 0.5 ? 'pos' : 'neg';
  }

  for (let i = 0; i < n_samples; i++) {
    dots.push(getDotType[type](noise, range));
  }
  return dots;
};

const make_moons = (props) => getData({ ...props });

export default make_moons;
