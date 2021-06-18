import { getCustomRepository } from 'typeorm';
import { DespesaRepository } from '../repositories/DespesasRepository';
import { ResponsaveisRepository } from '../repositories/ResponsaveisRepository';

interface IDespesasCreate {
  data_compra: string;
  local_compra: string;
  valor: number;
  responsavel_id: string;
}

interface IDespesasShow {
  id: string;
}

interface IDespesasUpdate {
  id: string;
  data_compra: string;
  local_compra: string;
  valor: number;
  responsavel_id: string;
}

class DespesaServices {
  async create({
    data_compra,
    local_compra,
    valor,
    responsavel_id,
  }: IDespesasCreate) {
    const despesaRepository = getCustomRepository(DespesaRepository);
    const despesa = despesaRepository.create({
      data_compra,
      local_compra,
      valor,
      responsavel_id,
    });

    await despesaRepository.save(despesa);

    return despesa;
  }

  async index() {
    const despesaRepository = getCustomRepository(DespesaRepository);

    const despesas = await despesaRepository.find({
      relations: ['responsavel'],
    });

    return despesas;
  }

  async show({ id }: IDespesasShow) {
    const despesaRepository = getCustomRepository(DespesaRepository);

    const despesa = await despesaRepository.findOne({ id });

    if (!despesa) {
      throw new Error(' ID não encontrado');
    }

    const despesas = await despesaRepository.findOne(id, {
      relations: ['responsavel'],
    });

    return despesas;
  }

  async delete({ id }: IDespesasShow) {
    const despesaRepository = getCustomRepository(DespesaRepository);

    const despesa = await despesaRepository.findOne({ id });

    if (!despesa) {
      throw new Error('ID não encontrado');
    }

    return await despesaRepository.delete({ id });
  }

  async update({
    id,
    data_compra,
    local_compra,
    valor,
    responsavel_id,
  }: IDespesasUpdate) {
    const despesaRepository = getCustomRepository(DespesaRepository);

    let despesa = await despesaRepository.findOne({ id });

    if (!despesa) {
      throw new Error('Despesa não encontrado');
    }

    await despesaRepository.update(id, {
      data_compra,
      local_compra,
      valor,
      responsavel_id,
    });

    despesa = await despesaRepository.findOne({ id });

    return despesa;
  }
}

export { DespesaServices };
