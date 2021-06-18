import { EntityRepository, Repository } from 'typeorm';
import { Despesa } from '../entities/Despesa';

@EntityRepository(Despesa)
class DespesaRepository extends Repository<Despesa> {}

export { DespesaRepository };
