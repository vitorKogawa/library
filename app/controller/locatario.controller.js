const db = require("../model/index");

const Locatario = db.Locatario;
const op = db.sequelize.Op;

/**
 * Insere um novo registro na tabela locatário
 * @param {*} request
 * @param {*} response
 * @returns
 */
const create = (request, response) => {
  const { nome, cpf, status } = request.body;
  if (!nome)
    return response
      .status(400)
      .json({ message: "Nome do locatário não pode ser vazio!" });

  const locatario = {
    nome,
    cpf,
    status: status ? status : false,
  };
  Locatario.create(locatario)
    .then((data) => response.status(200).json(data))
    .catch((error) =>
      response
        .status(500)
        .json({ message: error.message || "Erro interno ao criar locatário." })
    );
};

/**
 * Lista todos os registros da tabela locatário da base de dados
 * @param {} request
 * @param {*} response
 */
const findAll = (request, response) => {
  Locatario.findAll()
    .then((data) =>
      data.lenght == 0
        ? response
            .status(200)
            .json({ message: "Nenhum locatário ainda foi cadastrado." })
        : response.json(data)
    )
    .catch((error) =>
      response.status(500).json({
        message: error.message || "Erro interno na busca de registros.",
      })
    );
};

/**
 * Lista todos os tutoriais publicados
 * @param {*} request
 * @param {*} response
 */
const findAllEnable = (request, response) => {
  Locatario.findAll({ where: { status: true } })
    .then((data) => response.status(200).json(data))
    .catch((error) =>
      response.status(500).json({
        message:
          error.message || "Erro interno na busca dos locatários publicados.",
      })
    );
};

/**
 * Retorna um locatário com base no id informado
 * @param {*} request
 * @param {*} response
 */
const findOne = (request, response) => {
  const { id } = request.params; //ou const id = request.params.id

  Locatario.findByPk(id)
    .then((data) =>
      data === null
        ? response.json({ message: `Locatário de id ${id} não encontrado.` })
        : response.status(200).json(data)
    )
    .catch((error) =>
      response.status(500).json({
        message:
          error.message || `Erro interno ao busca este locatário de id ${id}`,
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

  Locatario.update(request.body, { where: { id } })
    .then((data) =>
      data == 1
        ? response
            .status(200)
            .json({ message: `Locatário de id ${id} atualizado com sucesso.` })
        : response
            .status(500)
            .json({ message: `Erro ao atualizar locatário de id ${id}.` })
    )
    .catch((error) =>
      response.status(500).json({
        message: error.message || `Erro ao atualizar locatário de id ${id}`,
      })
    );
};

/**
 * Remove todos os locatários
 * @param {*} request
 * @param {*} response
 */
const deleteAll = (request, response) => {
  Locatario.destroy({ where: {}, truncate: true })
    .then(() => response.status(200).json({ message: "Registros eliminados." }))
    .catch((error) =>
      response.status(500).json({
        message: error.message || "Erro ao deletar os locatários.",
      })
    );
};

/**
 * Deleta um locatário com base no id informado
 * @param {*} request
 * @param {*} response
 */
const deleteById = (request, response) => {
  const { id } = request.params;

  Locatario.destroy({ where: { id } })
    .then((data) => response.status(200).json(data))
    .catch((error) =>
      response.status(500).json({
        message: error.message || `Erro ao deletar locatário de id ${id}`,
      })
    );
};

module.exports = {
  create,
  findAll,
  findAllEnable,
  findOne,
  update,
  deleteAll,
  deleteById,
};
