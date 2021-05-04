#!/usr/bin/env node

require('dotenv').config()

const http = require('http');
const {Command} = require('commander');
program =new Command();

program.version('0.0.1');

var url = 'http://localhost:8765/evcharge/api';

var bearer = "Bearer "

const simpleOptions = {
  headers:{
  'X-OBSERVATORY-AUTH' : bearer.concat(process.env.TOKEN),
  'Content-Type': 'application/json'
}
};

program
  .requiredOption('--format <form>', 'Format to return data')
  .requiredOption('--apikey <key>', 'User apikey')

program
  .command('healthcheck')
  .description('Healthcheck of system')
  .action((options) => {
    http.get(url.concat("/healthcheck"), simpleOptions , (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      console.log(res.statusCode);
      let error;

      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('resetsessions')
  .description('Resets all sessions')
  .action((options) => {
    http.get(url.concat("/resetsessions"), simpleOptions , (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      console.log(res.statusCode);
      let error;

      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('login')
  .description('User login')
  .option('--username <name>', 'User\'s username')
  .option('--password <pass>', 'User\'s password')
  .action((options) => {
    const opts= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    
    http.get(url.concat("/login/username=",options.username,"&password=",options.password), opts , (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      console.log(res.statusCode);
      let error;

      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('logout')
  .description('User logout')
  .action((options) => {
    http.get(url.concat("/logout") , (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      console.log(res.statusCode);
      let error;

      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('SessionsPerPoint')
  .description('Displays all sessions per point')
  .option('--point <pnt>', 'Point to display')
  .option('--datefrom <from>', 'From Date')
  .option('--dateto <to>', 'To Date')
  .action((options) => {
    http.get(url.concat("/SessionsPerPoint/:", options.point ,"/:",options.datefrom,"/:",options.dateto), simpleOptions , (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      console.log(res.statusCode);
      let error;

      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('SessionsPerStation')
  .description('Displays all sessions per station')
  .option('--station <stat>', 'Station to display')
  .option('--datefrom <from>', 'From Date')
  .option('--dateto <to>', 'To Date')
  .action((options) => {
    http.get(url.concat("/SessionsPerStation/:", options.station ,"/:",options.datefrom,"/:",options.dateto), simpleOptions , (res) => {
      const { statusCode } = res;
      let error;
      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('SessionsPerEV')
  .description('Displays all sessions per EV')
  .option('--vehicleid <vehicle>', 'Vehicle to display')
  .option('--datefrom <from>', 'From Date')
  .option('--dateto <to>', 'To Date')
  .action((options) => {
    http.get(url.concat("/SessionsPerEV/:", options.vehicleid ,"/:",options.datefrom,"/:",options.dateto), simpleOptions , (res) => {
      const { statusCode } = res;
      console.log(res.statusCode);
      let error;
      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('SessionsPerProvider')
  .description('Displays all sessions per provider')
  .option('--provider <prov>', 'Provider to display')
  .option('--datefrom <from>', 'From Date')
  .option('--dateto <to>', 'To Date')
  .action((options) => {
    http.get(url.concat("/SessionsPerProvider/:", options.provider ,"/:",options.datefrom,"/:",options.dateto), simpleOptions , (res) => {
      const { statusCode } = res;
      console.log(res.statusCode);
      let error;
      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);

    });
  });

program
  .command('Admin')
  .description('Admin functions')
  .option('--usermod', 'Creates a user or changes a registered user\'s password')
  .option('--username <name>', 'User\'s username')
  .option('--passw <password>', 'User\'s password')
  .option('--users <uname>', 'Displays user\'s state')
  .option('--sessionsupd', 'Adds new sessions from a CSV file')
  .option('--source <filename>', 'CSV file\'s name to add sessions from')
  .option('--healthcheck', 'Healthcheck of system')
  .option('--resetsessions', 'Resets all sessions')
  .action();

program.parse(process.argv);