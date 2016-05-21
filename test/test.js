const DockerStats = require('../docker-stats');
const dockerStats = new DockerStats();

dockerStats.execute().then(data => {
  console.log(data);
})
