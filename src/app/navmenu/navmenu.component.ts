import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public userData = JSON.parse(localStorage.getItem('currentUser')??'{}')
  public loggedIn = this.userData.loggedIn

}
