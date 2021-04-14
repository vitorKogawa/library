module.exports = (sequelize, Sequelize) => {
    const Locatario = sequelize.define('Locatario', {
        nome: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return Locatario;
}