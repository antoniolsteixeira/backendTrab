import { Request, Response } from 'express';
import { DespesaServices } from '../services/DespesaServices';

class DespesasController {
  async create(request: Request, response: Response) {
    const { data_compra, local_compra, valor, responsavel_id } = request.body;
    const despesaServices = new DespesaServices();

    const despesaServico = await despesaServices.create({
      data_compra,
      local_compra,
      valor,
      responsavel_id,
    });

    return response.json(despesaServico);
  }

  async index(request: Request, response: Response) {
    const despesaServices = new DespesaServices();

    try {
      const despesasServices = await despesaServices.index();
      return response.json(despesasServices);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request: Request, response: Response) {
    const despesaServices = new DespesaServices();
    const { id } = request.params;

    try {
      const despesasServices = await despesaServices.show({ id });
      return response.json(despesasServices);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    const despesaServices = new DespesaServices();
    const { id } = request.params;

    try {
      await despesaServices.delete({ id });
      return response.json({ Message: 'Deletado com sucesso' });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request: Request, response: Response) {
    const despesaServices = new DespesaServices();
    const { id } = request.params;
    const { data_compra, local_compra, valor, responsavel_id } = request.body;

    try {
      const ordemServico = await despesaServices.update({
        id,
        data_compra,
        local_compra,
        valor,
        responsavel_id,
      });
      return response.json(ordemServico);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { DespesasController };
