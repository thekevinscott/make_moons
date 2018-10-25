# Make Moons

A small function to generate data similar to [sklearn's `make_moons`](http://scikit-learn.org/stable/modules/generated/sklearn.datasets.make_moons.html),
 for a presentation on Tensorflow.js and machine learning in Javascript at LibertyJS.

Behind the scenes its generating a sine wave and randomly sampling points between a given range of that sine wave.

<img src="https://raw.githubusercontent.com/thekevinscott/make_moons/master/make_moons.png" alt="A screenshot of make_moons in action" />

## Installation

```
yarn add make_moons
```

or use npm:

```
npm install make_moons
```

## Quick Start

```
> import make_moons from 'make_moons';
> make_moons({ type: 'pos' });
[
  {
    x: 0.5,
    y: 0.5,
  },
  ...
]

```

## Options

### `type`

Accepts a `type` of either `pos` or `neg`. `neg` is phase shifted by pi / 2.

If not provided, a random value for type will be provided.

```
> import make_moons from 'make_moons';
> make_moons({ type: 'neg' });

[
  // a "negative" point
  {
    x: 0.5,
    y: -0.5,
  },
]
```

For samples from both types, call them separately.

```
> import make_moons from 'make_moons';
> make_moons({ type: 'pos' });

[
  // a "positive" point
  {
    x: 0.5,
    y: 0.5,
  },
]

> make_moons({ type: 'neg' });
[
  // a "negative" point
  {
    x: 0.5,
    y: -0.5,
  },
]

```

### `n_samples`

The number of samples per type to return. Defaults to 200.

```
> import make_moons from 'make_moons';
> make_moons({ n_samples: 2 });

[
  {
    x: 0.5,
    y: 0.5,
  },
  {
    x: 1.0,
    y: 0.5,
  },
]
```

### `noise`

The amount of noise to add to each sample. Noise is added in both the x and y coordinates.

```
> make_moons({ noise: 0.1 });

[
  {
    x: 0.52,
    y: 0.49,
  },
]
```

### `range`

An optional parameter to denote a different range than the default. Use this if you'd like the moon to extend beyond `[0, 2/3]` for `pos`, or `[1/3,1]` for `neg`.

```
> make_moons({ range: [-1/3, 2/3] });

[
  {
    x: -0.2,
    y: -0.1,
  },
]
```
