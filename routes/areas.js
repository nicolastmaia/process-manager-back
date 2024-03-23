var express = require('express');
var router = express.Router();

const areaService = require('../services/areaService');

/* GET processes listing. */
router.get('/', async function (req, res, next) {
  try {
    allAreas = await areaService.findMany();
    res.json(allAreas);
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});

router.get('/findOne/:id', async function (req, res, next) {
  try {
    area = await areaService.findOne(req.params.id);
    res.json(area);
  } catch (error) {
    res.status(404);
    res.semd(error);
  }
});

router.post('/create/', async function (req, res, next) {
  try {
    area = await areaService.create(req.body);
    res.status(201);
    res.json(area);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

router.put('/update/:id', async function (req, res, next) {
  try {
    area = await areaService.update(req.params.id, req.body);
    res.status(201);
    res.json(area);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

router.delete('/delete/:id', async function (req, res, next) {
  try {
    area = await areaService.delete(req.params.id);
    res.json(area);
  } catch (error) {
    res.status(404);
    res.semd(error);
  }
});

module.exports = router;
