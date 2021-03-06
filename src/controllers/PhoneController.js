const Phone = require('../models/Phone');
const { v4: uuidv4 } = require('uuid');

class PhoneController {
    create(obj) {
        for (const phone of obj.phones) {
            let phoneInfo = new Phone();

            phoneInfo.id = uuidv4();
            phoneInfo.typeId = phone.phoneType;
            phoneInfo.ddd = phone.ddd;
            phoneInfo.phoneNumber = phone.phoneNumber;
            phoneInfo.customerId = obj.id;

            Phone.create(phoneInfo.dataValues)
                .then(result => {
                    if (result)
                        return result.dataValues;
                    else
                        return null;
                })
        }
    }

    updateByCustomerId(customerId, obj) {
        Phone.destroy({
            where: {
                customerId: customerId
            }
        })
        
        for (const phone of obj.phones) {
            let phoneInfo = new Phone();

            phoneInfo.id = uuidv4();
            phoneInfo.typeId = phone.typeId;
            phoneInfo.ddd = phone.ddd;
            phoneInfo.phoneNumber = phone.phoneNumber;
            phoneInfo.customerId = customerId;

            Phone.create(phoneInfo.dataValues)
                .then(result => {
                    if (result)
                        return result.dataValues;
                    else 
                        return null;
                })
        }
    }
}

module.exports = new PhoneController();