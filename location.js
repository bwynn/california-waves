var wave = {
  name: 'Steamer Lane',
  location: 'Santa Cruz, CA.',
  wavetype: ['pointbreak', 'reefbreak'],
  swellDir: 235,
  size: 10,
  bestBet: function() {
    return this.swellDir + this.size;
  }
};

console.log(wave.bestBet);
