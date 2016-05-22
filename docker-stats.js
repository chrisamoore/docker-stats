const exec = require('child_process').exec;
const Formatter = require('./formatter');

class DockerStats {

  execute(container = null) {
    return new Promise((resolve, reject) => {
      const containers = [];

      const command = (container) ?
        `docker stats --no-stream ${container}` :
        `docker stats --no-stream`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          return reject(error);
        }

        const lines     = stdout.split(/\n/);
        const formatter = new Formatter();

        lines.forEach((line, key) => {
          if ( key !== 0 && key !== lines.length -1) {
            containers.push(formatter.format(line));
          }
        });

        return resolve((container) ? containers[0] : containers);
      });
    });
  }

}

module.exports = DockerStats;
