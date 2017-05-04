import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/do';
import {IMapItem} from '../model/iMapItem';

@Injectable()
export class CountryExternalService {
  private allPathsSubject = new BehaviorSubject<IMapItem[]>(null);
  public allPaths$ = this.allPathsSubject.asObservable();

  constructor(private http: Http) {
  }

  getAllPathInfo(): Observable<IMapItem[]> {
    return this.http.request('./assets/pathDataForEurope.json')
      .map(res => res.json())
      .map((x: IMapItem[]) => x)
      .do((x: IMapItem[]) => this.allPathsSubject.next(x))
      .first()
      .publishLast().refCount();
  }
}
