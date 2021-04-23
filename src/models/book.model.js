const mongoose = require('mongoose')
const { toJSON, paginate } = require('./plugins')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    testament: {
      type: String,
      required: true,
      trim: true,
    },
    chapters: {
      type: Number,
      required: true,
      trim: true,
    },
    verses: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

bookSchema.plugin(toJSON)
bookSchema.plugin(paginate)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
