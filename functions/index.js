const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.nextTurn = functions.database.ref('/moves/{gameKey}/{moveKey}')
  .onWrite(event => {
    const gameKey = event.params.gameKey;
    const moveKey = event.params.moveKey;
    const move = event.data.val();
    console.log('Move', move, 'in game', gameKey);
    return admin.database().ref('/games/' + gameKey + '/turn').set('123456');
  });
