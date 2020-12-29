const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bobby extends Model{}

Bobby.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },

        url: {
            type: DataTypes.STRING,
            allowNull: false
        },  

        team: {
            type: DataTypes.STRING,
            allowNull: false
        },

        is_goal: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },

        is_meg: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        is_celebration: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bobby'  
    }
);

module.exports = Bobby;