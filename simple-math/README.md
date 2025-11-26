# simple-math-check

Safe demo package that only performs basic arithmetic. Useful for verifying npm install flows without pulling in heavy dependencies.

## Usage

```bash
npm install ./test-packages/simple-math
```

```js
import math from 'simple-math-check';

math.add(2, 3); // 5
math.divide(10, 2); // 5
```

All functions coerce inputs with `Number()` and guard against division by zero.
