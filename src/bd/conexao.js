const knext = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DATABASE_URL,
        user: 'root',
        password: '1995@Mana',
        database: 'oasis',
        port: '3306'
    }
});


knext.raw('select 1+1 as result').catch(err => {
    console.log(err);
    process.exit(1);
});

module.exports = knext