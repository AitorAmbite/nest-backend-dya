import { Budgetfurniture } from 'src/budgetfurnitures/entities/budgetfurniture.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Budget {
  //AÑADIR LOS CAMPOS
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false })
  bl_id: string;
  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  price: number;

  @Column()
  phone: number;

  @OneToMany(() => Budgetfurniture, (budgetfurniture) => budgetfurniture.budget)
  furniture: Budgetfurniture[];
}
