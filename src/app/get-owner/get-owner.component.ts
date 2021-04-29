import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-get-owner',
  templateUrl: './get-owner.component.html',
  styleUrls: ['./get-owner.component.css']
})
export class GetOwnerComponent implements OnInit {
  newOwner: string = "";
  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
  }

  setOwner() {
    this.listService.setOwner(this.newOwner);
    this.router.navigateByUrl('/lists')
  }

}
