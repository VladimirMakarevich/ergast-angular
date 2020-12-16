import { asyncData } from '../../testing/async-observable-helpers';
import { ErgastService } from "./ergast.service";
import { ConfigService } from "./config.service";
import { Endpoints } from "../constants/endpoints";
import { PagingRequestOptionsModel } from "../models/requests/paging-request-options.model";
import {
  getMockRootDriverStandingResponseModel,
  getMockRootSeasonResponseModel,
  getMockRootSeasonResultResponseModel
} from "../../testing/mocks/models";

const endpoints = new Endpoints();

describe('ErgastService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let ergastService: ErgastService;
  let configService: ConfigService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configService = new ConfigService(httpClientSpy as any, endpoints)
    ergastService = new ErgastService(httpClientSpy as any, configService, endpoints);
  });

  it('Should return expected `Seasons` Response', () => {
    const expectedSeasons = getMockRootSeasonResponseModel();

    httpClientSpy.get.and.returnValue(asyncData(expectedSeasons));

    ergastService.getSeasons(new PagingRequestOptionsModel()).subscribe(
      seasons => expect(seasons).toEqual(expectedSeasons, 'expected Seasons'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be One call');
  });

  it('Should return expected `All Winners Of Drivers Championships` Response', () => {
    const expectedWinnersOfDriversChampionships = getMockRootDriverStandingResponseModel();

    httpClientSpy.get.and.returnValue(asyncData(expectedWinnersOfDriversChampionships));

    ergastService.getAllWinnersOfDriversChampionships(new PagingRequestOptionsModel()).subscribe(
      winnersOfDriversChampionships => expect(winnersOfDriversChampionships).toEqual(expectedWinnersOfDriversChampionships, 'expected Winners'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be One call');
  });

  it('Should return expected `List Of Winners By Year` Response', () => {
    const expectedListOfWinnersByYear = getMockRootSeasonResultResponseModel();
    const year = '2005';

    httpClientSpy.get.and.returnValue(asyncData(expectedListOfWinnersByYear));

    ergastService.getListOfWinnersByYear(year).subscribe(
      listOfWinnersByYear => expect(listOfWinnersByYear).toEqual(expectedListOfWinnersByYear, 'expected List Of Winners By Year'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be One call');
  });

});
