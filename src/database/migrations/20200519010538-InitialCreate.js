'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable(
        'ServiceType', {
          Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
          },
          Name: {
            type: Sequelize.STRING(30),
            allowNull: false
          }
        }
      ),

      queryInterface.createTable(
        'Location', {
          Id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
          },
          City: {
            type: Sequelize.STRING(30),
            allowNull: false
          },
          State: {
            type: Sequelize.STRING(30),
            allowNull: false
          }
        }
      ),

      queryInterface.createTable(
        'PhoneType', {
          Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
          },
          Name: {
            type: Sequelize.STRING(20),
            allowNull: false
          }
        }
      ),

      queryInterface.createTable(
        'Phone', {
          Id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
          },
          TypeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'PhoneType',
              key: 'Id'
            }
          },
          DDD: {
            type: Sequelize.STRING(3),
            allowNull: false
          },
          Number: {
            type: Sequelize.STRING(9),
            allowNull: false
          }
        }
      ),

      queryInterface.createTable(
        'Address', {
          Id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
          },
          ZipCode: {
            type: Sequelize.BIGINT(10),
            allowNull: false,
          },
          LocationId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Location',
              key: 'Id'
            }
          },
          Address: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          Number: {
            type: Sequelize.INTEGER(4),
            allowNull: true
          },
          Neighborhood: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          Complement: {
            type: Sequelize.STRING(30),
            allowNull: true
          }
        }
      ),

      queryInterface.createTable(
        'Client', {
          Id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
          },
          Name: {
            type: Sequelize.STRING(30),
            allowNull: false
          },
          Cpf: {
            type: Sequelize.STRING(11),
            allowNull: false
          },
          BirthDate: {
            type: Sequelize.DATE,
            allowNull: false
          },
          Sex: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
          AddressId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Address',
              key: 'Id'
            }
          },
          PhoneId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Phone',
              key: 'Id'
            }
          },
          Email: {
            type: Sequelize.STRING(100),
            allowNull: true
          },
          Job: {
            type: Sequelize.STRING(30),
            allowNull: false
          },
          IsActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
          CreatedOn: {
            type: Sequelize.DATE,
            allowNull: false
          },
          UpdatedOn: {
            type: Sequelize.DATE,
            allowNull: false
          }
        }
      ),

      queryInterface.createTable(
        'Scheduling', {
          Id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
          },
          ClientId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Client',
              key: 'Id'
            }
          },
          Date: {
            type: Sequelize.DATE,
            allowNull: false
          },
          StartTime: {
            type: Sequelize.DATE,
            allowNull: false
          },
          FinishTime: {
            type: Sequelize.DATE,
            allowNull: false
          },
          ServiceTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'ServiceType',
              key: 'Id'
            }
          },
          CreatedOn: {
            type: Sequelize.DATE,
            allowNull: false
          },
          UpdatedOn: {
            type: Sequelize.DATE,
            allowNull: false
          }
        }
      )

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('Scheduling'),
      queryInterface.dropTable('Client'),
      queryInterface.dropTable('Address'),
      queryInterface.dropTable('Phone'),
      queryInterface.dropTable('PhoneType'),
      queryInterface.dropTable('Location'),
      queryInterface.dropTable('ServiceType')
    ])
  }

};