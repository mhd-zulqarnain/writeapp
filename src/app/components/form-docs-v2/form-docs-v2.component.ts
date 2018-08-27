import {Component, ElementRef, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {isUndefined} from 'util';
import {isDefined} from '@angular/compiler/src/util';

declare let jquery: any;
declare let $: any;


@Component({
  selector: 'app-form-docs-v2',
  templateUrl: './form-docs-v2.component.html',
  styleUrls: ['./form-docs-v2.component.css']
})


export class FormDocsV2Component implements OnInit {
  public docsForm: FormGroup;
  public vm = this;
  public count = 16;
  public forDocskeys = [];
  private final = [];
  title = 'app';
  box = false;
  btn = true;
  dlt = false;
  disableAuthor = false;
  private htmlStr: String;
  private HEADING_CONST: String = 'heading';
  private SUB_HEADING_CONST: String = 'subHeading';
  private CLASS_SUB_HEADING_CONST: String = 'main-heading';
  private CLASS_HEADING_CONST: String = 'sub-heading';
  public data = [
    {
      id: 'd0',
      cid: 'd9',
      heading: '',
      content: '',
      class: 'main-heading',
      sub1: [
        {
          id: 'd1',
          cid: 'd10',
          heading: '',
          content: ' ',
          class: 'sub-heading',
          sub1: [
            {
              id: 'd2',
              cid: 'd11',
              heading: '',
              content: '',
              class: 'sub-heading',
            },
            {
              id: 'd4',
              cid: 'd12',
              heading: '',
              content: '',
              class: 'sub-heading',

            },
          ]
        },
        {
          id: 'd5',
          cid: 'd13',
          heading: '',
          content: '',
          class: 'sub-heading',
          sub1: [
            {
              id: 'd6',
              cid: 'd14',
              heading: '',
              content: '',
              class: 'sub-heading'
            },
            {
              id: 'd7',
              cid: 'd15',
              heading: '',
              content: '',
              class: 'sub-heading'
            },
          ]
        }
      ]

    }
  ];
  constructor(private fb: FormBuilder) {
    for (let i = 0; i < 45; i++) {
      let key = 'd' + i;
      this.forDocskeys[key] = ' ';
    }
    this.docsForm = this.fb.group(
      this.forDocskeys
    );
  }

  ngOnInit() {
  }


  public removePara(index, indexp2, indexp3) {

    /* for (let i = 0, ii = (this.arr.length); i < ii; i++) {
       /!*if (this.arr[i].id === iid) {
         this.arr.splice(i, 1);
       }*!/
     }*/

    if (isDefined(index)) {
      this.data[indexp3].sub1[indexp2].sub1.splice(index, 1);
      console.log(this.data[indexp3]);

    } else if (isDefined(indexp2)) {
      this.data[indexp3].sub1.splice(indexp2, 1);
    }
  }

  public addOption(index, indexp2, indexp3, type) {
    console.log('new array');

    let keyNames = Object.keys(this.forDocskeys);
    this.count = this.count + 1;

    let newObject = {
      id: keyNames[this.count],
      cid: keyNames[this.count + 1],
      heading: ' ',
      content: '',
      sub1: [],
      class: 'sub-heading',
    };
    let mIndex = parseInt(index, 0);

    if (isDefined(index)) {

      let mArr = [];
      mArr = this.data[indexp3].sub1[indexp2].sub1;
      mArr.splice((index + 1), 0, newObject);

      console.log(mArr);

    } else if (isDefined(indexp2)) {
      if (type == this.HEADING_CONST) {

        let index = indexp2 + 1;
        let mArr = [];

        mArr = this.data[indexp3].sub1;
        mArr.splice(index, 0, newObject);

        console.log('heading');

      } else if (type == this.SUB_HEADING_CONST) {

        let index = indexp2 + 1;
        let mArr = [];
        mArr = this.data[indexp3].sub1[indexp2].sub1;
        mArr.push(newObject);

      }
    } else if (isDefined(indexp3)) {
      if (type == this.HEADING_CONST) {


        let index = indexp3 + 1;
        newObject.class = 'main-heading';
        let mArr = [];
        mArr = this.data;
        mArr.push(newObject);


      } else if (type == this.SUB_HEADING_CONST) {
        let index = indexp3 + 1;
        let mArr = [];
        newObject.class = 'main-heading';
        mArr = this.data[indexp3].sub1;
        mArr.push(newObject);

      }
    }

  }

  public showDiv() {
    this.box = true;
    this.dlt = true;
    this.btn = false;
    return 'Hello string';
  }

  public hideDiv() {
    this.box = false;
    this.btn = true;
    this.dlt = false;
  }

  public getHeading(str) {
   /* let headingCount = this.data[indexp3].sub1[indexp2].sub1[index].heading;
    newObject.heading = this.getHeading(headingCount);*/
    let main = str.substring(0, str.length - 1);
    let res = str.substring(str.length - 1);
    let add = parseInt(res, 10) + 1;
    let conc = main.concat(add);

    return conc;
  }

  public isZeroLength(item) {
    let bool = true;
    if (item > 0) {
      bool = false;
    }
    return bool;
  }

}
