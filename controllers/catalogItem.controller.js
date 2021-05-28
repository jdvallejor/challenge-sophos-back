import express from 'express';
import { catalogItemService } from '../services/catalogItem.service'
const router = express.Router();

router.get('/', async (req, res, next) => {
  const catalogItems = await catalogItemService.all();
  if (catalogItems.length === 0) {
    res.status(404).send(catalogItems)
  } else {
    res.status(200).send(catalogItems);
  }
});

router.get('/:type', async (req, res, next) => {
  const type = req.params.type;
  const catalogItems = await catalogItemService.byType(type);
  if (catalogItems.length === 0) {
    res.status(404).send(catalogItems)
  } else {
    res.status(200).send(catalogItems);
  }
});

export default router;
