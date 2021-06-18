import { getCustomRepository } from 'typeorm';

import { ResponsaveisRepository } from '../repositories/ResponsaveisRepository';

interface IResponsaveisCreate {
  nome: string;
  telefone: string;
}

interface IResponsaveisShow {
  id: string;
}

interface IResponsaveisUpdate {
  id: string;
  nome: string;
  telefone: string;
}

class ResponsaveisServices {
  async create({ nome, telefone }: IResponsaveisCreate) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);

    const nomeAlreadyExists = await responsaveisRepository.findOne({
      nome,
    });

    if (nomeAlreadyExists) {
      throw new Error('Nome já cadastrado!');
    }

    const responsaveis = responsaveisRepository.create({
      nome,
      telefone,
    });

    await responsaveisRepository.save(responsaveis);

    return responsaveis;
  }

  async index() {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);

    const responsaveis = await responsaveisRepository.find();

    return responsaveis;
  }

  async show({ id }: IResponsaveisShow) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);

    const responsaveis = await responsaveisRepository.findOne({ id });

    if (!responsaveis) {
      throw new Error(' ID não encontrado');
    }

    return responsaveis;
  }

  async delete({ id }: IResponsaveisShow) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);

    const responsaveis = await responsaveisRepository.findOne({ id });

    if (!responsaveis) {
      throw new Error(' ID não encontrado');
    }

    return await responsaveisRepository.delete(id);
  }

  async update({ id, nome, telefone }: IResponsaveisUpdate) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);
    let responsaveis = await responsaveisRepository.findOne({ id });
    if (!responsaveis) {
      throw new Error('ID não encontrado');
    }
    await responsaveisRepository.update(id, {
      nome,
      telefone,
    });

    responsaveis = await responsaveisRepository.findOne({ id });

    return responsaveis;
  }
}

export { ResponsaveisServices };
