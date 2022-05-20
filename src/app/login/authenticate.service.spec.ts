import { TestBed } from '@angular/core/testing';

import { AuthenticateService } from './authenticate.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('AuthenticateService', () => {
  let service: AuthenticateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        HttpClientModule,
        HttpClient,
        HttpHandler,
        { provide: ActivatedRoute },
        { provide: Router }
      ]


    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
