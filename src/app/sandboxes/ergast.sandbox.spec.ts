import { asyncData, asyncError } from '../../testing/async-observable-helpers';
import {
  getMockRootDriverStandingResponseModel,
  getMockRootSeasonResponseModel,
  getMockRootSeasonResultResponseModel
} from "../../testing/mocks/models";
import { ErgastSandbox } from "./ergast.sandbox";
import { Endpoints } from "../../@core/constants/endpoints";
import { ConfigService } from "../../@core/services/config.service";
import { ErgastService } from "../../@core/services/ergast.service";
import { fakeAsync, tick } from "@angular/core/testing";
import { HttpErrorResponse } from "@angular/common/http";

const endpoints = new Endpoints();

describe('ErgastSandbox', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let ergastService: ErgastService;
  let configService: ConfigService;
  let ergastSandbox: ErgastSandbox;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configService = new ConfigService(httpClientSpy as any, endpoints)
    ergastService = new ErgastService(httpClientSpy as any, configService, endpoints);
    ergastSandbox = new ErgastSandbox(ergastService);
  });

  it('Should return expected `Seasons` from Subject', fakeAsync(() => {
    const expectedSeasons = getMockRootSeasonResponseModel();

    httpClientSpy.get.and.returnValue(asyncData(expectedSeasons));
    ergastSandbox.seasonsFromSubject().subscribe(
      seasons => expect(seasons).toEqual(expectedSeasons.MRData.SeasonTable.Seasons, 'expected Seasons'),
      fail
    );
    tick();
    ergastSandbox.seasonsFromSubject().subscribe();
    tick();
    ergastSandbox.seasonsFromSubject().subscribe();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be One call');
  }));


  it('Should return expected `All Winners Of Drivers Championships` from Subject', fakeAsync(() => {
    const expectedWinnersOfDriversChampionships = getMockRootDriverStandingResponseModel();

    httpClientSpy.get.and.returnValue(asyncData(expectedWinnersOfDriversChampionships));

    ergastSandbox.standingsTableFromSubject().subscribe(
      winnersOfDriversChampionships => expect(winnersOfDriversChampionships).toEqual(
        expectedWinnersOfDriversChampionships.MRData.StandingsTable, 'expected Winners'),
      fail
    );
    tick();
    ergastSandbox.standingsTableFromSubject().subscribe();
    tick();
    ergastSandbox.standingsTableFromSubject().subscribe();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be One call');
  }));

  it('Should return expected 404 Not Found and then `List Of Winners By Year`', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    let year = '2000';

    ergastSandbox.getListOfWinnersByYear(year).subscribe(
      listOfWinnersByYear => fail('expected an error, not winners'),
      error => expect(error.message).toContain('404 Not Found')
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be One call');

    year = '2005';

    const expectedListOfWinnersByYear = getMockRootSeasonResultResponseModel();

    httpClientSpy.get.and.returnValue(asyncData(expectedListOfWinnersByYear));

    ergastSandbox.getListOfWinnersByYear(year).subscribe(
      listOfWinnersByYear => expect(listOfWinnersByYear).toEqual(expectedListOfWinnersByYear, 'expected List Of Winners By Year'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(2, 'should be 2 calls');
  });

});
