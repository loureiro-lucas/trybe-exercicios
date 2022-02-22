const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();
  return res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Produto não encontrado' })
  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductModel.add(name, brand);
    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.delete('/:id', async (req, res) => {
  try {
    await ProductModel.exclude(req.params.id);
    return res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu ererado' })
  }
});

module.exports = router;
