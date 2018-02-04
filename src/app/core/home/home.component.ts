import { Component, OnInit } from '@angular/core';
import { environment } from '../../../conf/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  custom = environment.custom;

  constructor() { }

  ngOnInit() {
  }

}
