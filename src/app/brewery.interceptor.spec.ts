import { TestBed } from '@angular/core/testing';

import { BreweryInterceptor } from './brewery.interceptor';

describe('BreweryInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BreweryInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BreweryInterceptor = TestBed.inject(BreweryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
