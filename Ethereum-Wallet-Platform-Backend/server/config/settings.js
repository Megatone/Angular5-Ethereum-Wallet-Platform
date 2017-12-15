'use strict'
module.exports = {
    mongo: {
        server: 'localhost',
        port: 27017,
        database: 'ethereum_platform',
        status: false,
        command: 'mongod --dbpath',
        path: 'c:/mongo'
    },
    express: {
        port: process.env.PORT || 8000
    },
    geth: {
        path: __dirname + '/../geth/geth.exe',
        rpc: true,
        address: '127.0.0.1',
        port: '8001',
        cache: '2048',
        syncmode: 'full',
        datadir: 'Y:/GETH/data/full',
        nousb: true
    },
    sockets: {
        port: 8002
    },
    www: {
        port: 80
    },
    getMongoCommand: (mongo) => {
        return mongo.command + ' "' + mongo.path + '"';
    },
    getGethCommand: (geth) => {
        var command = geth.path;
        command += (geth.rpc ? ' --rpc ' : '');
        command += (geth.rpc && geth.address != '' ? ' --rpcaddr ' + geth.address : '');
        command += (geth.rpc && geth.port != '' ? ' --rpcport ' + geth.port : '');
        command += (geth.cache != '' ? ' --cache ' + geth.cache : '');
        command += (geth.syncmode != '' ? ' --syncmode "' + geth.syncmode + '" ' : '');
        command += (geth.datadir != '' ? ' --datadir "' + geth.datadir + '" ' : '');
        command += (geth.nousb ? ' --nousb ' : '');
        return command;
    }
}