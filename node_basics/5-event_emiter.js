const EventEmitter = require('events');
const emitter = new EventEmitter();
//handler or listener...
emitter.on('event', function () {
    console.log('listener working')
})
//Raise an event..
emitter.emit('event');