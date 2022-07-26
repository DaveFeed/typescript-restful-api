import { BaseRepository } from './base/base.repository';
import { User } from '../entities/User';

export class UsersRepository extends BaseRepository<User> {
  count(): Promise<number> {
    return this.model.count({});
  }

  async create(item: any): Promise<User> {
    return this.model.create(item);
  }

  update(id: number, item: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<boolean> {
    return this.model.destroy({
      where: { userId: id },
    });
  }

  findAll(): Promise<User[]> {
    return this.model.findAll();
  }

  findOne(id: number): Promise<User> {
    return this.model.findOne({
      where: { userId: id },
    });
  }

  findWithPagination(limit: number, offset: number): Promise<User[]> {
    return this.model.findAndCountAll({
      limit,
      offset,
    });
  }
}