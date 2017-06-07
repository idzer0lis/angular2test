import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserData implements InMemoryDbService {
  createDb() {
    let users = [
      { name: 'admin', password: 'admin' }
    ];
    return {users};
  }
}
