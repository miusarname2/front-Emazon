import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ConnectApiService } from './connect-api.service';

describe('ConnectApiService', () => {
  let service: ConnectApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConnectApiService]
    });
    service = TestBed.inject(ConnectApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should authenticate and set token', () => {
    const mockResponse = { jwt: 'fake-jwt-token' };

    service.autenticate('testUser', 'testPassword').subscribe(response => {
      expect(response).toEqual(mockResponse);
      expect(service.token).toBe('fake-jwt-token');
    });

    const req = httpMock.expectOne('http://localhost:8080/auth/log-in');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should post data', () => {
    const mockData = { key: 'value' };
    const mockResponse = { success: true };

    service.endpoint = 'test-endpoint'; // Asegúrate de establecer un endpoint

    service.postData(mockData).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/test-endpoint');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockData);
    expect(req.request.headers.get('Authorization')).toBe('Bearer ' + service.token);
    req.flush(mockResponse);
  });

  it('should get initial data', () => {
    const mockResponse = { data: 'some data' };

    service.endpoint = 'test-endpoint'; // Asegúrate de establecer un endpoint

    service.getInitialData().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/test-endpoint');
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer ' + service.token);
    req.flush(mockResponse);
  });

});
