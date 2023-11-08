import { type Request, type Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR : product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  logger.info('Success post product data')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add prodcut success', data: req.body })
}

export const getProduct = (req: Request, res: Response) => {
  const products = [
    { name: 'Cat', price: 13 },
    { name: 'Rain', price: 13 }
  ]
  const {
    params: { name }
  } = req

  if (name) {
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product
      }
    })
    if (filterProduct.length === 0) {
      logger.info('Data found')
      return res.status(404).send({ status: false, statusCode: 404, data: {} })
    }
    logger.info('Success get product data')
    return res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] })
  }

  logger.info('Success get product data')
  return res.status(200).send({ status: true, statusCode: 200, data: products })
}
