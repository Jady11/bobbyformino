const User = require('./User');
const Bobby = require('./Bobby');


User.hasMany(Bobby, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Bobby.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Bobby}