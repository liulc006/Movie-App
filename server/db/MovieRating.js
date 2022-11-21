const conn = require('./conn');
const { TEXT, INTEGER, UUID, UUIDV4 } = conn.Sequelize;

const MovieRating = conn.define('movie rating', {
    id:{
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    star: {
        type: INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
            notEmpty: true
        }
    },
    comment: {
        type: TEXT,
        allowNull:true
    }
});

module.exports = MovieRating;
