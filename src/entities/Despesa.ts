import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Responsavel } from './Responsavel';

@Entity('despesas')
class Despesa {
  @PrimaryColumn()
  id: string;

  @Column()
  data_compra: string;

  @Column()
  local_compra: string;

  @Column()
  valor: number;

  @Column()
  responsavel_id: string;

  @JoinColumn({ name: 'responsavel_id' })
  @ManyToOne(() => Responsavel)
  responsavel: Responsavel;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Despesa };
