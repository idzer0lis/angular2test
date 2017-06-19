import { inject, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData }  from './in-memory-data.service';

describe('User Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, InMemoryWebApiModule.forRoot(UserData)],
      providers: [UserService]
      });
  });

  it('should ...', inject([UserService], (api) => {
    expect(api.title).toBe('Testing');
  }));
});
