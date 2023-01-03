import UserRepository from '@/repositories/user';

export interface Repositories {
  users: UserRepository;
}

function getRepositories(): Repositories {
  const users = new UserRepository();
  return {
    users,
  };
}

export default getRepositories();
