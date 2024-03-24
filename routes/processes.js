var express = require('express');
var router = express.Router();

const processService = require('../services/processService');

router.get('/', async function (req, res, next) {
  let includeArea = undefined;
  let includeChildProcess = undefined;

  if (req.query.includeArea)
    includeArea =
      req.query.includeArea.toLocaleLowerCase() === 'true'.toLowerCase();

  if (req.query.includeChildProcess)
    includeChildProcess =
      req.query.includeChildProcess.toLocaleLowerCase() ===
      'true'.toLowerCase();

  try {
    const result = await processService.findMany(
      includeArea,
      includeChildProcess
    );
    res.json(result);
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});

router.get('/findOne/:id', async function (req, res, next) {
  try {
    const result = await processService.findOne(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.semd(error);
  }
});

router.post('/create/', async function (req, res, next) {
  try {
    const result = await processService.create(req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

router.put('/update/:id', async function (req, res, next) {
  try {
    const result = await processService.update(req.params.id, req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

router.delete('/delete/:id', async function (req, res, next) {
  try {
    const result = await processService.delete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.semd(error);
  }
});

module.exports = router;
