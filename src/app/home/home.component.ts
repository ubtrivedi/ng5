import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  btnText : string = "Add a goal";
  currentGoal: string = "";
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  addGoal() {
    if (this.currentGoal.trim()) {
      this.goals.push(this.currentGoal);
      this.currentGoal = "";
      this._data.changeGoal(this.goals);
    }
  }

  removeGoal(i) {
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }

  getNumGoals() {
    return this.goals.length;
  }

}
