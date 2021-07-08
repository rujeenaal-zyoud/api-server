

// know i want to do the connection 


const pg = require('pg');

require('dotenv').config();

//so here for deployment part add rejection key 
console.log('jh');
pg.defaults.ssl = process.env.NODE_ENV === 'production' &&  { rejectUnauthorized: false };

module.exports =new pg.Pool({
      connectionString: process.env.DATABASE_URL,

})