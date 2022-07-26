export interface IWrite<T> {
    create(item: T): Promise<any>;
    update(id: number, item: T): Promise<boolean>;
    delete(id: number): Promise<boolean>;
  }