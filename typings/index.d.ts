import { Repositories } from '@/factories/repositoryFactory';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $repository: Repositories;
  }
}
