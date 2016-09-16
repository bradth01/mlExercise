'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/moneyLion', {
    omitNull: true,
});

// use to reset database
// db.sync({force: true});

// Model
const User = db.define('user', {
    screenId:  {
        type: Sequelize.STRING,
        defaultValue: 'one',
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    address: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    zipCode: {
        type: Sequelize.INTEGER,
        validate: {
            len: [4,6]
        },
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    getterMethods: {
        form: function() {
            switch (this.screenId) {
                case 'one':
                    return {screenId: this.screenId, details: {firstName: this.firstName, lastName: this.lastName}}
                case 'two':
                    return {screenId: this.screenId, details: {email: this.email}};
                case 'three':
                    let fullAddress = this.address + this.city + ',' + this.state + this.zipCode;
                    return {screenId: this.screenId, details: {address: fullAddress}};
                case 'four':
                    return {screenId: this.screenId, details: {}};
            }
        },
    }
});

module.exports = {
  User: User,
};







// const FormOne = db.define('formOne', {
//     screenId: {
//         type: Sequelize.STRING,
//         defaultValue: 'one',
//         allowNull: false,
//         validate: {
//             is: ['one']
//         }
//     },
//     firstName: {
//         type: Sequelize.STRING
//     },
//     lastName: {
//         type: Sequelize.STRING
//     },
// }, {
//     getterMethods: {
//         object: function() {
//             return {screenId: this.screenId, 
//                     details: {firstName: this.firstName, lastName: this.lastName}};
//         }
//     },
// });

// const FormTwo = db.define('formTwo', {
//     screenId: {
//         type: Sequelize.STRING,
//         defaultValue: 'two',
//         allowNull: false,
//         validate: {
//             is: ['two']
//         }
//     },
//     email: {
//         type: Sequelize.STRING,
//         validate: {
//             isEmail: true
//         }
//     },
// }, {
//     getterMethods: {
//         object: function() {
//             return {screenId: this.screenId, 
//                     details: {email: this.email}};
//         }
//     },
// });

// const FormThree = db.define('formThree', {
//     screenId: {
//         type: Sequelize.STRING,
//         defaultValue: 'three',
//         allowNull: false,
//         validate: {
//             is: ['three']
//         }
//     },
//     address: {
//         type: Sequelize.STRING,
//     },
//     city: {
//         type: Sequelize.STRING,
//     },
//     state: {
//         type: Sequelize.STRING,
//     },
//     zipCode: {
//         type: Sequelize.INTEGER,
//         validate: {
//             len: [4,6]
//         },
//     },
// }, {
//     getterMethods: {
//         object: function() {
//             let fullAddress = this.address + this.city + ',' + this.state + this.zipCode;
//             return {screenId: this.screenId, details: {address: fullAddress}};
//         }
//     },
// });

// // const FormFour = db.define('formFour', {
// //     screenId: {
// //         type: Sequelize.STRING,
// //         defaultValue: 'four',
// //         allowNull: false,
// //         validate: {
// //             is: ['four']
// //         }
// //     },
// // }, {
// //     getterMethods: {
// //         object: function() {
// //             return {screenId: this.screenId, details: {}};
// //         }
// //     },
// // });

// // // Associations
// // User.hasOne(FormOne);
// // User.hasOne(FormTwo);
// // User.hasOne(FormThree);
// // User.hasOne(FormFour);

