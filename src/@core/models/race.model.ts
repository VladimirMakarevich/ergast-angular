import { CircuitModel } from './circuit.model';
import { DriverResultModel } from './driver-result.model';

export class RaceModel {
  public season: string;
  public round: string;
  public url: string;
  public raceName: string;
  public circuit: CircuitModel;
  public date: string;
  public time: string;
  public results: DriverResultModel[];

}
