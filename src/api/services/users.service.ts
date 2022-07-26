import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/users.repository';

class UsersService {
  private repository: UsersRepository;
  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  public async createUser(data: User) {
    return this.repository.create(data);
  }

  public async deleteUser(userId: number) {
    return this.repository.delete(userId);
  }

  public async getAllUsers() {
    return this.repository.findAll();
  }

  public async getUser(userId: number) {
    return this.repository.findOne(userId);
  }

  public async getUsersWithOffsetLimit(limit: number, page: number) {
    const offset = limit * page - limit;
    return this.repository.findWithPagination(limit, offset);
  }
}

export default UsersService;