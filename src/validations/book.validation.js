const Joi = require('joi')
const { objectId } = require('./custom.validation')

// Temp
const createBook = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    testament: Joi.string().required(),
    chapters: Joi.number().integer().required(),
    verses: Joi.number().integer().required(),
  }),
}

const getBooks = {
  query: Joi.object().keys({
    title: Joi.string(),
    testament: Joi.string(),
    chapters: Joi.number().integer(),
    verses: Joi.number().integer(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
}

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
}

const updateBook = {
  params: Joi.object().keys({
    bookId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      testament: Joi.string(),
      chapters: Joi.number().integer(),
      verses: Joi.number().integer(),
    })
    .min(1),
}

const deleteBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
}
