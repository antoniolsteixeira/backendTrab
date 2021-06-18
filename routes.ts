import { Router } from 'express';
import { ResponsaveisController } from './src/controllers/ResponsaveisController';
import { DespesasController } from './src/controllers/DespesasController';

const routes = Router();

const responsaveisController = new ResponsaveisController();

const despesasController = new DespesasController();

routes.post('/responsaveis', responsaveisController.create);
routes.get('/responsaveis', responsaveisController.index);
routes.get('/responsaveis/:id', responsaveisController.show);
routes.delete('/responsaveis/:id', responsaveisController.delete);
routes.put('/responsaveis/:id', responsaveisController.update);

routes.post('/despesa', despesasController.create);
routes.get('/despesa', despesasController.index);
routes.get('/despesa/:id', despesasController.show);
routes.delete('/despesa/:id', despesasController.delete);
routes.put('/despesa/:id', despesasController.update);

export { routes };
