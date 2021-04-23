const express = require('express')
const validate = require('../../middleware/validate')
const bookValidation = require('../../validations/book.validation')
const bookController = require('../../controllers/book.controller')

const router = express.Router()

router.get('/', validate(bookValidation.getBooks), bookController.getBooks)
router.post('/', validate(bookValidation.createBook), bookController.createBook)
router.get('/:bookId', validate(bookValidation.getBook), bookController.getBook)
router.patch('/:bookId', validate(bookValidation.updateBook), bookController.updateBook)
router.delete('/:bookId', validate(bookValidation.deleteBook), bookController.deleteBook)

module.exports = router

/**
 * @swagger
 * tags:
 *   name: Verses
 *   description: Verse retrieval
 */

/**
 * @swagger
 * path:
 *  /verses/{bookId}/{chapter}:
 *    get:
 *      summary: Get all verses from a chapter
 *      description: Users can retrieve all verses from a chapter.
 *      tags: [Verses]
 *      parameters:
 *        - in: query
 *          name: title
 *          schema:
 *            type: string
 *          description: Book title
 *        - in: query
 *          name: chapter
 *          schema:
 *            type: integer
 *          description: Chapter number
 *        - in: query
 *          name: verses
 *          schema:
 *            type: string
 *          description: Number of verses in the book
 *        - in: query
 *          name: sortBy
 *          schema:
 *            type: string
 *          description: sort by query in the form of field:desc/asc (ex. name:asc)
 *        - in: query
 *          name: limit
 *          schema:
 *            type: integer
 *            minimum: 1
 *          default: 10
 *          description: Maximum number of chapters
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *          description: Page number
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  results:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Chapter'
 *                  page:
 *                    type: integer
 *                    example: 1
 *                  limit:
 *                    type: integer
 *                    example: 10
 *                  totalPages:
 *                    type: integer
 *                    example: 1
 *                  totalResults:
 *                    type: integer
 *                    example: 1
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * path:
 *  /verses/{bookId}/{chapterId}/{id}:
 *    get:
 *      summary: Get a verse
 *      description: Users can retrieve any verse
 *      tags: [Verses]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Verse id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Book'
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */
