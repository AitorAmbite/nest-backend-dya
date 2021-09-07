import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Budgetfurniture} from "../../users/entities/user.entity";
export class Budget {
    //AÑADIR LOS CAMPOS
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true,nullable:false})
    bl_id:string;
    @Column({nullable:false})
    address:string;

    @Column({nullable:false})
    price:number;

    @Column({length:9})
    phone:number;

    @OneToMany(() => Budgetfurniture, budgetfurniture => budgetfurniture.user)
    furniture: Budgetfurniture[];
}
