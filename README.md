# Make Moons

A quick function to generate moons data, similar to [sklearn's `make_moons`](http://scikit-learn.org/stable/modules/generated/sklearn.datasets.make_moons.html),
 for a presentation on Tensorflow.js and machine learning in Javascript at LibertyJS.

```
> import make_moons from 'make_moons';
> make_moons({ noise: 0.1, n_samples: 1 });

[
  // a "positive" point
  {
    x: 0.5,
    y: 0.5,
  },
  // a "negative" point
  {
    x: 0.5,
    y: -0.5,
  },
]

> make_moons({ noise: 0.1, n_samples: 1, type: 'pos' });

[
  // a single "positive" point
  {
    x: 0.5,
    y: 0.5,
  },
]
```

Types can be `pos` or `neg`.
