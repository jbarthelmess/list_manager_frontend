import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getLists().subscribe(
      (data: List) => this.lists.push(data)
    )
  }

}
