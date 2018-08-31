import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {


  public arr = [
    {
      id: 'd3',
      des: 'des',
      sub: []
    }
  ];

  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
  }

  addNew() {

    let id = this.arr.length + Math.random()
    let obj = {
      id: id,
      des: 'des' + id,
      sub: []
    }



  }
}
