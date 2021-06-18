import { Request, response, Response } from 'express';
import { ResponsaveisServices } from '../services/ResponsaveisServices';

class ResponsaveisController {
  async create(request: Request, response: Response) {
    const { nome, telefone } = request.body;
    const responsaveisServices = new ResponsaveisServices();

    try {
      const responsaveis = await responsaveisServices.create({
        nome,
        telefone,
      });
      return response.json(responsaveis);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async index(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices();

    try {
      const responsaveis = await responsaveisServices.index();
      return response.json(responsaveis);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices();
    const { id } = request.params;

    try {
      const responsaveis = await responsaveisServices.show({ id });
      return response.json(responsaveis);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices();
    const { id } = request.params;

    try {
      const responsaveis = await responsaveisServices.delete({ id });
      return response.json({ Message: 'Deletado com sucesso' });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request: Request, response: Response) {
    const { nome, telefone } = request.body;
    const { id } = request.params;

    const responsaveisServices = new ResponsaveisServices();

    try {
      const responsaveis = await responsaveisServices.update({
        id,
        nome,
        telefone,
      });
      return response.json(responsaveis);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
export { ResponsaveisController };
