import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Budgetfurniture} from "../../users/entities/user.entity";
export class Budget {
    //AÑADIR LOS CAMPOS

    @OneToMany(() => Budgetfurniture, budgetfurniture => budgetfurniture.user)
    furniture: Budgetfurniture[];
}
