const EventEmitter = require('events');

const emitter = new EventEmitter();

// register listener
emitter.on('bellRing', ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}`);
});

// raise an event
setTimeout(() => {
  emitter.emit('bellRing', {
    period: 'first',
    text: 'period ended'
  });
}, 2000);