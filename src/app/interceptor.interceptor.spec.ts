import { TestBed } from '@angular/core/testing';

import { InterceptorInterceptor } from './interceptor.interceptor';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('InterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorInterceptor,
      HttpClientModule,
      HttpClient,
      HttpHandler
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorInterceptor = TestBed.inject(InterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
