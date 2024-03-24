var express = require('express');
var router = express.Router();

const areaService = require('../services/areaService');

router.get('/', async function (req, res, next) {
  let includeProcess = undefined;

  if (req.query.includeProcess)
    includeProcess =
      req.query.includeProcess.toLocaleLowerCase() === 'true'.toLowerCase();

  try {
    const result = await areaService.findMany(includeProcess);
    res.json(result);
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});

router.get('/findOne/:id', async function (req, res, next) {
  try {
    const result = await areaService.findOne(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.semd(error);
  }
});

router.post('/create/', async function (req, res, next) {
  try {
    const result = await areaService.create(req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

router.put('/update/:id', async function (req, res, next) {
  try {
    const result = await areaService.update(req.params.id, req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

router.delete('/delete/:id', async function (req, res, next) {
  try {
    const result = await areaService.delete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.semd(error);
  }
});

module.exports = router;
