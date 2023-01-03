import api from '@/repositories/api';

const resource = '/user';

export interface User {
  data: string;
}

export default class UserRepository {
  public async getUsers(): Promise<User> {
    const result = await api.get(resource);
    console.log(result);
    return { ...result.data };
  }
}
