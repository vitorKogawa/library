module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define('Livro', {
        nome: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        sinopse: {
            type: Sequelize.STRING
        },
        dataLancamento: {
            type: Sequelize.DATE
        },
        dataAluguel: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return Livro;
}