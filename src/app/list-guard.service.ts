import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ListGuardService {

  constructor(private listService: ListService, private router: Router) { }

  canActivate(state: RouterStateSnapshot) {
    if(this.listService.hasOwner()) {
      return true;
    } else {
      return false;
    }
  }
}
