import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Access } from "./entities/count-user.entity";

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(Access)
    private readonly repo: Repository<Access>,
  ) { }

  async create(visitorId: string) {
    const exists = await this.repo.findOne({
      where: { visitorId },
    });

    if (exists) {
      return { message: 'Visitante já registrado' };
    }

    const access = this.repo.create({ visitorId });
    await this.repo.save(access);

    return { message: 'Novo visitante registrado' };
  }

  async count() {
    const total = await this.repo.count();
    return { total };
  }

  async findAll() {
    return this.repo.find({
      order: { createdAt: 'DESC' },
    });
  }

  async remove(id: string) {
    await this.repo.delete(id);
    return { message: 'Acesso removido' };
  }
}