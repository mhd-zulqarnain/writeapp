import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DocsService} from '../../services/docs.service';
import {HttpClient} from '@angular/common/http';
import {isDefined} from '@angular/compiler/src/util';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['../form-docs-v2/form-docs-v2.component.css']
})
export class TestFormComponent implements OnInit {


  public data = [
    {
      id: 'd3',
      des: 'd4',
      cid: 'd3',
      sub1: [

      ]
    }

  ];
  public forDocskeys = [];
  public count = 16;
  public docsForm: FormGroup;


  constructor(private fb: FormBuilder, public docsService: DocsService, private http: HttpClient) {
    for (let i = 0; i < 85; i++) {
      let key = 'd' + i;
      this.forDocskeys[key] = ' ';
    }
    this.docsForm = this.fb.group(
      this.forDocskeys
    );
  }

  ngOnInit() {
  }

  indexTracker(index: number, value: any) {

    return index;
  }

  indexinnernestedTracker(index: number, value: any) {

    return index;
  }

  indexnestedTracker(index: number, value: any) {

    return index;
  }


  public getIndex(id) {
    this.data.forEach((item, index) => {

      if (id == item.id) {
        console.log(id, item.id, index);
        return index;

      }
      if (isDefined(item.sub1)) {
        this.data.forEach((nesitem, index) => {
          if (id == nesitem.id) {
            return index;
          }
        });

      }
    });
  }

  public addOption(arry1Id, arry2Id, arry3Id, type) {

    let keyNames = Object.keys(this.forDocskeys);
    this.count = this.count + 1;
    let newObject = {
      id: keyNames[this.count],
      cid: keyNames[this.count + 1],
      des: keyNames[this.count + 1],
      sub1: []
    };
    //let mIndex = parseInt(index, 0);


    if (isDefined(arry1Id)) {

      this.data.forEach((item, index3) => {

        if (item.id = arry3Id) {
          item.sub1.forEach((nesteditem, index2) => {

            if (nesteditem.id == arry2Id) {
              nesteditem.sub1.forEach((dnesteditem, index1) => {

                if (dnesteditem.id = arry1Id) {

                  let index = index1 + 1;

                   this.data[index3].sub1[index2].sub1.splice(index, 0, newObject);
                  //
                  // mArr = this.data[index3].sub1[index2].sub1[index1].sub1;
                 // mArr.push(newObject);


                  console.log('here ');
                  console.log(this.data);
                }
              });


            }
          });
        }

      });


    } else if (isDefined(arry2Id)) {

      this.data.forEach((item, index3) => {

        if (item.id = arry3Id) {
          item.sub1.forEach((nesteditem, index2) => {
            if (nesteditem.id == arry2Id) {
              let index = index2 + 1;
              let mArr = [];
              mArr = this.data[index3].sub1[index2].sub1;
              mArr.push(newObject);
            }
          });
        }

      });


    } else if (isDefined(arry3Id)) {

      this.data.forEach((item, index3) => {
        if (item.id = arry3Id) {
          // let index =index3 + 1;
          let mArr = [];
          mArr = this.data[index3].sub1;
          mArr.push(newObject);
        }
      });
    }


  }


}
