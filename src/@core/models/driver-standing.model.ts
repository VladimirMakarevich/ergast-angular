import { DriverModel } from './driver.model';
import { ConstructorModel } from './constructor.model';

export class DriverStandingModel {
  public position: string;
  public positionText: string;
  public points: string;
  public wins: string;
  public Driver: DriverModel;
  public Constructors: ConstructorModel[];

}
