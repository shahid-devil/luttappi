/* codded by shahid-devil
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// SHAZZ Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 OB_NAME: process.env.Z_BOT_NAME === undefined ? 'luttappi' : process.env.Z_BOT_NAME,
 OA_NAME: process.env.Z_DEP_NAME === undefined ? 'shazz' : process.env.Z_DEP_NAME,
 REMOVE2: process.env.THERI_KICK_PM === undefined ? 'false' : process.env.THERI_KICK_PM,
 SHAZZAFN: process.env.THERI_LIST_PM === undefined ? false : process.env.THERI_LIST_PM,
 OA_REPLY: process.env.Z_DEP_REPLY === undefined ? 'you typed shazz , he is my creator' : process.env.Z_DEP_REPLY,
 PHONE: process.env.NUMBER === undefined ? '+918301985859' : process.env.NUMBER,   
    

};
