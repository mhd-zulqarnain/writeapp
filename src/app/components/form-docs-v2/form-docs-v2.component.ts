import {Component, ElementRef, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isDefined} from '@angular/compiler/src/util';
import {DocsService} from './../../services/docs.service';
import {HttpParams, HttpClient, HttpHeaders} from '@angular/common/http';

declare let jquery: any;
declare let $: any;


@Component({
  selector: 'app-form-docs-v2',
  templateUrl: './form-docs-v2.component.html',
  styleUrls: ['./form-docs-v2.component.css']
})


export class FormDocsV2Component implements OnInit {

  public docsForm: FormGroup;
  public count = 16;
  public forDocskeys = [];
  box = false;
  btn = true;
  dlt = false;
  private HEADING_CONST: String = 'heading';
  private SUB_HEADING_CONST: String = 'subHeading';
  private CLASS_SUB_HEADING_CONST: String = 'main-heading';
  private CLASS_HEADING_CONST: String = 'sub-heading';
  private TPYE_AUTHOR_CONST: String = 'author';
  private TPYE_PARA_GRAPH_CONST: String = 'paragraph';


  /*--------Style-----------*/

  private styleTitle = {
    'fontSize': 20,
    'bold': false,
    'isItalic': false,
    'isUnderline': true,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  };
  private styleHeading = {
    'fontSize': 15,
    'bold': true,
    'isItalic': false,
    'isUnderline': true,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  };
  private styleContent = {
    'fontSize': 15,
    'bold': false,
    'isItalic': false,
    'isUnderline': true,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  };
  private styleAuther = {
    'fontSize': 15,
    'bold': false,
    'isItalic': false,
    'isUnderline': true,
    'aligncenter': true,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  };
  /*---------------------------------------*/
  public data = [
    {
      id: 'd0',
      cid: 'd1',
      heading: 'heading',
      content: 'content',
      style: [{obj: this.styleHeading}, {obj: this.styleContent}],
      type: this.TPYE_PARA_GRAPH_CONST,
      class: 'main-heading',
      sub1: []
    }
  ];
  public author = [
    {
      aid: 'd2',
      content: '',
      style: [{obj: this.styleAuther}],
      type: this.TPYE_AUTHOR_CONST,
    },
    {
      aid: 'd3',
      content: '',
      type: this.TPYE_AUTHOR_CONST,
    }
  ];
  public title = {
    tid: 'd5',
    content: '',
    style: [{obj: this.styleTitle}],
    type: 'title',
  };
  public finalObject = [];

  constructor(private fb: FormBuilder, public docsService: DocsService, private http: HttpClient) {
    for (let i = 0; i < 85; i++) {
      let key = 'd' + i;
      this.forDocskeys[key] = ' ';
    }
    this.docsForm = this.fb.group(
      this.forDocskeys
    );
  }

  trackById(index: number, value: any) {
    return value.id;
  }

  ngOnInit() {
  }


  public removePara(index, indexp2, indexp3) {


    if (isDefined(index)) {
      this.data[indexp3].sub1[indexp2].sub1.splice(index, 1);
      console.log(this.data[indexp3]);

    } else if (isDefined(indexp2)) {
      this.data[indexp3].sub1.splice(indexp2, 1);
    } else if (isDefined(indexp3)) {
      if (this.data.length > 1)
        this.data.splice(indexp3, 1);
    }
  }

  public addOption(index, indexp2, indexp3, type) {

    let keyNames = Object.keys(this.forDocskeys);
    this.count = this.count + 1;

    let newObject = {
      id: keyNames[this.count],
      cid: keyNames[this.count + 1],
      heading: 'heading',
      content: 'content',
      style: [{obj: this.styleHeading}, {obj: this.styleContent}],
      type: this.TPYE_PARA_GRAPH_CONST,
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

        console.log('the sub heading');
        console.log(newObject);

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

  /*Author section---------*/
  public removeAuthor(index) {
    if (isDefined(index)) {
      console.log('the author index ' + index);
      if (this.author.length > 1)
        this.author.splice(index, 1);

    }
  }

  public addAuthor(index) {
    let keyNames = Object.keys(this.forDocskeys);
    this.count = this.count + 1;

    let newAuthor = {
      aid: keyNames[this.count],
      content: '',
      type: this.TPYE_AUTHOR_CONST,
    };
    if (isDefined(index)) {
      this.author.push(newAuthor);
    }
  }


  public formSubmit() {

    this.finalObject.push(this.title);
    this.finalObject.push(this.author);
    this.finalObject.push(this.data);
    console.log(
      'the final object'
    );
    console.log(
      this.finalObject
    );
    this.docsService.generateDoc(this.finalObject).take(1).subscribe(res => {
      console.log('res', res);
      /*if (datUrl) {
        let contentType = datUrl.split(';')[0];

        let byteCharacters = atob(datUrl);

        let byteNumbers = new Array(byteCharacters.length);

        for (var i = 0; i < byteCharacters.length; i++)
          byteNumbers[i] = byteCharacters.charCodeAt(i);

        let byteArray = new Uint8Array(byteNumbers);

        let blob = new Blob([byteArray], { type: contentType });
        console.log('blob', blob)
        saveAs(blob, 'queryMaanJaa.docx');

      }*/
    });
  }
}
