Docker-Stats
===

> Promise based node wrapper for `docker stats --no-stream`

## Usage

### All
```js
var DockerStats = require('docker-stats');

const dockerStats = new DockerStats();
dockerStats.execute().then(data => {
  console.log(data);
});
```

### By Container Hash
```js
var DockerStats = require('docker-stats');

const dockerStats = new DockerStats();
dockerStats.execute('a277c79d23e3').then(data => {
  console.log(data);
});
```

### By Container Name
```js
var DockerStats = require('docker-stats');

const dockerStats = new DockerStats();
dockerStats.execute('mango').then(data => {
  console.log(data);
});
```

## Output

```js
[ { name: 'mango',
    cpu: 0.62,
    memory: { usage: '64.94 MB', total: '1.044 GB', percentage: 6.22 },
    network: { usage: '1.296 kB', total: '648 B' },
    block: { usage: ' 8.192 kB', total: '5.075 MB' } } ]
[ { name: 'a277c79d23e3',
    cpu: 0.62,
    memory: { usage: '64.94 MB', total: '1.044 GB', percentage: 6.22 },
    network: { usage: '1.296 kB', total: '648 B' },
    block: { usage: ' 8.192 kB', total: '5.075 MB' } } ]
[ { name: 'a277c79d23e3',
    cpu: 0.62,
    memory: { usage: '64.94 MB', total: '1.044 GB', percentage: 6.22 },
    network: { usage: '1.296 kB', total: '648 B' },
    block: { usage: ' 8.192 kB', total: '5.075 MB' } },
  { name: 'bcecc2495f96',
    cpu: 0.63,
    memory: { usage: '68.4 MB', total: '1.044 GB', percentage: 6.55 },
    network: { usage: '648 B', total: '648 B' },
    block: { usage: ' 12.29 kB', total: '2.224 MB' } } ]
```
