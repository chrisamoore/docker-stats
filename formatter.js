class Formatter {
  statsObject(statsArray) {
    const memory  = this.usageSplit(statsArray[2]);
    const network = this.usageSplit(statsArray[4]);
    const block   = this.usageSplit(statsArray[5]);

    return {
      name: statsArray[0],
      cpu: this.percentage(statsArray[1]),
      memory: {
        usage: memory[0],
        total: memory[1],
        percentage: this.percentage(statsArray[3]),
      },
      network: {
        usage: network[0],
        total: network[1]
      },
      block: {
        usage: block[0],
        total: block[1]
      }
    };
  }

  percentage(percent) {
    return Number(percent.replace('%', ''));
  }

  usageSplit(usage) {
    return usage.split(' / ');
  }

  format(line) {
    return this.statsObject(line.split(/\s{2}./gi).filter(e => e));
  }
}

module.exports = Formatter;
