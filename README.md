Docker-Stats
===

> Promise based node wrapper for `docker stats --no-stream`

## Usage

```js
var DockerStats = require('docker-stats');

const dockerStats = new DockerStats();
dockerStats.execute().then(data => {
  console.log(data);
});
```
