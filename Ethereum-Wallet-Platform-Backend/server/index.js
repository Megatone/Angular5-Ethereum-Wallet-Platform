'use strict'

var mongoose = require('mongoose');
var c = require('./app/utils/console/console');
const psList = require('ps-list');
var app = require('./app/app');
var spawn = require('child-process-promise').spawn;
var settings = require('./config/settings');
var cronJobs = require('./app/jobs/cron');
var socketsService = require('./app/sockets/service');

psList().then(data => {
    //Init Geth to Update BlockChain and Up JSONRPC Service on port 8001
    if (data.filter(p => p.name == 'geth.exe').length === 0) {
        spawn('powershell.exe', [settings.getGethCommand(settings.geth)]);
    }

    //Init Mongo Db and Up Backend
    if (data.filter(p => p.name == 'mongod.exe').length === 0) {
        var childProcess = spawn('powershell.exe', [settings.getMongoCommand(settings.mongo)]).childProcess;
        //on proccess call out 
        childProcess.stdout.on('data', (data) => {
            if (!settings.mongo.status) {
                settings.mongo.status = true;
                //Connect to Mongo DB
                mongoose.Promise = global.Promise;
                mongoose.connect('mongodb://' + settings.mongo.server + ':' + settings.mongo.port + '/' + settings.mongo.database, { useMongoClient: true }).then(() => {
                    c.success('Application database connection with Mongo are be success');
                    app.listen(settings.express.port, () => {
                        c.success('The express server of node js started successfully');
                        c.info('MongoDb Server "' + settings.mongo.server + '"');
                        c.info('MongoDb Port "' + settings.mongo.port + '"');
                        c.info('MongoDb Database "' + settings.mongo.database + '"');
                        c.info('Express Listen Port "' + settings.express.port + '"');
                        socketsService.initSocketService();
                        cronJobs.initJob();
                    });
                }).catch(err => {
                    c.danger(err)
                });
            }
        });
    }
});