const db = require("../model/index");

const Livro = db.Livro;
const op = db.sequelize.Op;

/**
 * Insere um novo registro na tabela livro
 * @param {*} request
 * @param {*} response
 * @returns
 */
const create = (request, response) => {
  const { nome, autor, sinopse, dataLancamento, dataAluguel, status } = request.body;
  if (!nome)
    return response.status(400).json({ message: "Nome do livro não pode estar vazio!" });

  const livro = {
    nome,
    autor,
    sinopse,
    dataLancamento,
    dataAluguel,
    status: status ? status : false
  };
  Livro
    .create(livro)
    .then((data) => response.status(200).json(data))
    .catch((error) =>
      response
        .status(500)
        .json({ message: error.message || "Erro interno ao cadastrar Livro." })
    );
};

/**
 * Lista todos os registros da tabela livro da base de dados
 * @param {} request
 * @param {*} response
 */
const findAll = (request, response) => {
  Livro
    .findAll()
    .then((data) => data.lenght == 0 ? response.status(200).json({ message: "Nenhum livro ainda foi cadastrado." }) : response.json(data))
    .catch((error) =>
      response.status(500).json({
        message: error.message || "Erro interno na busca de registros.",
      })
    );
};

/**
 * Lista todos os livros publicados
 * @param {*} request
 * @param {*} response
 */
const findByAuthor = (request, response) => {
  if (!request.body.autor) {
      return response.status(400).json({ message: "Author não pode etar vazio!!" })
  } else {
    Livro
      .findAll({ where: { autor: request.body.autor } })
      .then((data) => response.status(200).json(data))
      .catch((error) =>
        response.status(500).json({
          message:
            error.message || "Erro interno na busca dos livros publicados.",
        })
      );
  }

};

/**
 * Retorna um livro com base no id informado
 * @param {*} request
 * @param {*} response
 */
const findOne = (request, response) => {
  const { id } = request.params; 

  Livro
    .findByPk(id)
    .then((data) =>
      data === null
        ? response.json({ message: `Livro de id ${id} não encontrado.` })
        : response.status(200).json(data)
    )
    .catch((error) =>
      response.status(500).json({
        message:
          error.message || `Erro interno ao busca este livro de id ${id}`,
      })
    );
};

/**
 * Atualiza um registro com base no id informado
 * @param {*} request
 * @param {*} response
 */
const update = (request, response) => {
  const { id } = request.params;

  Livro
    .update(request.body, { where: { id } })
    .then((data) =>
      data == 1
        ? response
            .status(200)
            .json({ message: `Livro de id ${id} atualizado com sucesso.` })
        : response
            .status(500)
            .json({ message: `Erro ao atualizar livro de id ${id}.` })
    )
    .catch((error) =>
      response.status(500).json({
        message: error.message || `Erro ao atualizar livro de id ${id}`,
      })
    );
};

/**
 * Remove todos os registros da tabela livro
 * @param {*} request
 * @param {*} response
 */
const deleteAll = (request, response) => {
  Livro
    .destroy({ where: {}, truncate: true })
    .then(() => response.status(200).json({ message: "Registros eliminados." }))
    .catch((error) =>
      response
        .status(500)
        .json({
          message:
            error.message || "Erro ao deletar os livros da base de dados.",
        })
    );
};

/**
 * Deleta um livro com base no id informado
 * @param {*} request
 * @param {*} response
 */
const deleteById = (request, response) => {
  const { id } = request.params;

  Livro
    .destroy({ where: { id } })
    .then((data) => response.status(200).json(data))
    .catch((error) =>
      response
        .status(500)
        .json({
          message: error.message || `Erro ao deletar livro de id ${id}`,
        })
    );
};

module.exports = {
  create,
  findAll,
  findByAuthor,
  findOne,
  update,
  deleteAll,
  deleteById,
};
