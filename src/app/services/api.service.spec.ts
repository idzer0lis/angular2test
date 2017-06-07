import { inject, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData }  from './in-memory-data.service';

describe('Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, InMemoryWebApiModule.forRoot(UserData)],
      providers: [ApiService]
      });
  });

  it('should ...', inject([ApiService], (api) => {
    expect(api.title).toBe('World');
  }));
});
