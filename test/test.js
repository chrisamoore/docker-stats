const DockerStats = require('../docker-stats');
const dockerStats = new DockerStats();

dockerStats.execute().then(data => {
  console.log(data);
});

dockerStats.execute('a277c79d23e3').then(data => {
  console.log(data);
});

dockerStats.execute('mango').then(data => {
  console.log(data);
});

