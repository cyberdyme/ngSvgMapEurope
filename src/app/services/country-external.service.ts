import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/do';
import {IPathInfo} from '../model/IPathInfo';
import * as _ from 'lodash';

export interface ITempNameCodeMapping {
  Name: string;
  Code: string;
};


@Injectable()
export class CountryExternalService {
  private allPathsSubject = new BehaviorSubject<IPathInfo[]>(null);
  public allPaths$ = this.allPathsSubject.asObservable();
  private countryMapping: ITempNameCodeMapping[] = [];

  constructor(private http: Http) {
    this.getCountryFullName().subscribe(x => this.countryMapping = x);
  }

  getAllPathInfo(): Observable<IPathInfo[]> {
    return this.http.request('./assets/pathDataForEurope.json')
      .map(res => res.json())
      .map((x: IPathInfo[]) => x)
      .do((x: IPathInfo[]) => this.allPathsSubject.next(x))
      .first()
      .publishLast().refCount();
  }

  updateFullName(x: IPathInfo[], countryMapping: ITempNameCodeMapping[]) {
    const lookupTable = _.keyBy(countryMapping, 'Code');
    x.forEach(y => {
      const lookup = lookupTable[y.id.toUpperCase()];
      if (lookup !== undefined) {
        y.name = lookup.Name;
      }
    });
  }

  getCountryFullName(): Observable<ITempNameCodeMapping[]> {
    return this.http.request('./assets/countryInfo.json')
      .map(res => res.json())
      .do(x => console.log(x))
      .map((x: ITempNameCodeMapping[]) => x);
  }
}
