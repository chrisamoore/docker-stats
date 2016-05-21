const exec = require('child_process').exec;
const Formatter = require('./formatter');

class DockerStats {

  execute() {
    return new Promise((resolve, reject) => {
      const containers = [];

      exec('docker stats --no-stream', (error, stdout, stderr) => {
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

        return resolve(containers);
      });
    });
  }

}

module.exports = DockerStats;
