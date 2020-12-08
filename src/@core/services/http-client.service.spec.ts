import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RootResponseModel } from "../models/responses/root-response.model";
import { SeasonResponseModel } from "../models/responses/season-response.model";
import { Endpoints } from "../constants/endpoints";

const endpoints = new Endpoints();
const getSeasonListResponseData = new RootResponseModel<SeasonResponseModel>();

describe('HttpClient response testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Get request should return data', () => {

    httpClient.get<RootResponseModel<SeasonResponseModel>>(endpoints.ergast.getSeasonList)
      .subscribe(data => expect(data).toEqual(getSeasonListResponseData));

    const req = httpTestingController.expectOne('/api/f1/seasons.json');

    expect(req.request.method).toEqual('GET');

    req.flush(getSeasonListResponseData);

    httpTestingController.verify();
  });

  it('404 error', () => {
    const message = '404 error';

    httpClient.get<RootResponseModel<SeasonResponseModel>>(endpoints.ergast.getSeasonList).subscribe(
      data => fail('Should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(message, 'message');
      }
    );

    const req = httpTestingController.expectOne(endpoints.ergast.getSeasonList);

    req.flush(message, {status: 404, statusText: 'Not Found'});
  });

});
