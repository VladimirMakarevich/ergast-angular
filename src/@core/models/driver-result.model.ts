import { DriverModel } from './driver.model';
import { FastestLapModel } from './fastest-lap.model';
import { FullTimeModel } from './time.model';
import { ConstructorModel } from './constructor.model';

export class DriverResultModel {
  public number: string;
  public position: string;
  public positionText: string;
  public points: string;
  public Driver: DriverModel;
  public ConstructorModel: ConstructorModel;
  public grid: string;
  public laps: string;
  public status: string;
  public Time: FullTimeModel;
  public FastestLap: FastestLapModel;

}
