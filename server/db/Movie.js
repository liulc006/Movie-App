const conn = require('./conn');
const { STRING, INTEGER, VIRTUAL, DATEONLY, DECIMAL, ARRAY, TEXT } = conn.Sequelize;

const Movie = conn.define('movie', {
    id:{
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    title:{
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    original_language:{
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    original_title:{
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    release_date:{
        type: DATEONLY,
    },
    poster_URL: {
        type: TEXT,
        get: function() {
            const image = this.getDataValue('poster_URL')||'';
            if(image.endsWith('.jpg')){
                const url_path = 'https://image.tmdb.org/t/p/original';
                return `${url_path}${image}`;
            };
            return null;
        }
    },
    overview: {
        type: TEXT,
    },
    popularity: {
        type: DECIMAL,
        defaultValue: 0,
    },
    vote_average: {
        type: DECIMAL,
        defaultValue: 0
    },
    vote_count: {
        type: INTEGER,
        defaultValue: 0
    },
    genre_ids: {
        type: ARRAY(INTEGER)
    }
});

module.exports = Movie;

