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
  data = [
    {
      id: 'd0',
      cid: 'd9',
      heading: 'heading 1',
      content: 'content',
      class: 'main-heading',
      sub1: [
        {
          id: 'd1',
          cid: 'd10',
          heading: '1.1',
          content: 'sub heading content',
          class: 'sub-heading',
          sub1: [
            {
              id: 'd2',
              cid: 'd11',
              heading: '1.1.1',
              content: 'sub heading content',
              class: 'sub-heading',
            },
            {
              id: 'd4',
              cid: 'd12',
              heading: '1.1.2',
              content: 'sub heading content',
              class: 'sub-heading',

            },
          ]
        },
        {
          id: 'd5',
          cid: 'd13',
          heading: '1.2',
          content: 'sub heading content',
          class: 'sub-heading',
          sub1: [
            {
              id: 'd6',
              cid: 'd14',
              heading: '1.2.1',
              content: 'sub heading content',
            },
            {
              id: 'd7',
              cid: 'd15',
              heading: '1.2.2',
              content: 'sub heading content',
            },
          ]
        }
      ]

    }
  ];

  public arr = [
    {id: 0, text: 'Sentence 1', key: 'd1', type: 'author'},

  ];

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

  public trackByFn(index, item) {
    console.log('the item ', item.id);
    console.log('the index ', index);
    return item.id;

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

    let keyNames = Object.keys(this.forDocskeys);
    this.count = this.count + 1;

    let newObject = {
      id: keyNames[this.count],
      cid: keyNames[this.count + 1],
      heading: 'new ',
      content: '',
      sub1: []
    };

    if (isDefined(index)) {

      let headingCount = this.data[indexp3].sub1[indexp2].sub1[index].heading;
      newObject.heading = this.getHeading(headingCount);
      let index = index + 1;
      this.data[indexp3].sub1[indexp2].sub1.splice(index, 1, newObject);

    } else if (isDefined(indexp2)) {

      if (type == this.HEADING_CONST) {
        let headingCount = this.data[indexp3].sub1[indexp2].heading;
        newObject.heading = this.getHeading(headingCount);
        let index = indexp2 + 1;
        this.data[indexp3].sub1.splice(index, 1, newObject);
        console.log('new object added');
        console.log(this.data);

      } else if (type == this.SUB_HEADING_CONST) {
        let headingCount = this.data[indexp3].sub1[indexp2].heading;
        newObject.heading = this.getHeading(headingCount);
        let index = indexp2 + 1;

        this.data[indexp3].sub1[indexp2].sub1.push(newObject);
        console.log(this.data[indexp3].sub1[indexp2]);
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

    let main = str.substring(0, str.length - 1);
    let res = str.substring(str.length - 1);
    let add = parseInt(res, 10) + 1;
    let conc = main.concat(add);

    return conc;
  }

  public submitForm() {
    //console.log(this.docsForm.get("d0").value)

    for (let i = 0, ii = (this.arr.length); i < ii; i++) {
      this.final.push({type: this.arr[i], content: this.docsForm.get(this.arr[i].key).value});
    }
    for (let i = 0, ii = (this.final.length); i < ii; i++) {
      console.log('The content ' + this.final[i].content + ' and the type  is ' + this.final[i].type.type);
    }

  }



  public isZeroLength(item) {
    let bool = true;
    if ( item > 0) {
      bool = false
    }
    return bool;
  }


}
