import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { DocsService } from './../../services/docs.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { isNumber } from 'util';
import { saveAs } from 'file-saver/FileSaver';


@Component({
  selector: 'app-form-docs',
  templateUrl: './form-docs.component.html',
  styleUrls: ['./form-docs.component.css']
})
export class FormDocsComponent implements OnInit {
  docsForm: FormGroup;
  post: any;
  array = [];
  fontSize: any = 11
  'selectType' = 'title';
  'bold': boolean;
  'isItalic': boolean;
  'isUnderline': boolean;
  'alignRight': boolean;
  'alignLeft': boolean;
  'alignJustify': boolean;
  'title': string;
  'subtitle': string;
  'authorName': string;
  'abstract': string;
  'heading': string;
  'refrences': string;
  "Aknowledge": string


  private styleObjTitle = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': '',
    'content': ''

  }
  private styleObjSubtitle = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': '',
    "content": ''

  }
  private styleObjAuthor1 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjAuthor2 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjAbstract = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjIntroduction = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjHeading1 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjHeading2 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjHeading3 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjHeading4 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjHeading5 = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjRefrence = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  private styleObjAknowledge = {
    'fontSize': 11,
    'bold': false,
    'isItalic': false,
    'isUnderline': false,
    'aligncenter': false,
    'alignRight': false,
    'alignLeft': false,
    'alignJustify': false,
    'type': ''

  }
  public titleObj: {};
  public subTitleObj: {};
  public author1Obj: {};
  public author2Obj = {};
  private abstarctObj = {};
  private keyWordsObj = {};
  private introductionObj = {};
  private heading2Obj = {};
  private heading1Obj = {};
  private heading3Obj = {};
  private heading4Obj = {};
  private heading5Obj = {};
  private AknowledgeObj = {};
  private RefrencesObj = {};



  constructor(private fb: FormBuilder, public docsService: DocsService, private http: HttpClient) {
    this.docsForm = fb.group({
      title: '',
      subtitle: '',
      authorName1: '',
      authorName2: '',
      abstract: '',
      keyWords: '',
      introduction: '',
      heading2: '',
      heading1: '',
      heading3: '',
      heading4: '',
      heading5: '',
      Aknowledge: '',
      Refrences: ''


    })

  }

  ngOnInit() {
    // var obj = {"content": "This is sample Title", "style": {"fontSize":"20", "isBold": "true"} }
    // this.http.post('http://localhost:3000/users',{obj}, {responseType: 'text'}).subscribe(data => {
    //   console.log('data', data);
    // })
    // var obj = {"content": "This is sample Title", "style": {"fontSize":"20", "isBold": "true"} }

    // this.docsService.generateDoc(obj).subscribe(res=>{
    //   console.log('res',res)
    // })
  }




  selectChangeHandler(event: any) {
    this.fontSize = event.target.value;
    console.log('font', this.fontSize)
  }

  // selecttype(event: any) {
  //   this.selectType = event.target.value;
  //   console.log('slect type', this.selectType)
  // }

  selecttype(type) {
    this.selectType = type;
    console.log('slect type', this.selectType)
  }

  save(file, save) {
    var arr = [];
    this.titleObj = { 'content': this.docsForm.value.title, 'styleObj': this.styleObjTitle, }
    this.subTitleObj = { 'content': this.docsForm.value.subtitle, 'styleObj': this.styleObjSubtitle }
    this.author1Obj = { 'content': this.docsForm.value.authorName1, 'styleObj': this.styleObjAuthor1 }
    this.author2Obj = { 'content': this.docsForm.value.authorName2, 'styleObj': this.styleObjAuthor2 }
    this.abstarctObj = { 'content': this.docsForm.value.abstract, 'styleObj': this.styleObjAbstract }
    this.introductionObj = { 'content': this.docsForm.value.introduction, 'styleObj': this.styleObjIntroduction }
    this.heading1Obj = { 'content': this.docsForm.value.heading1, 'styleObj': this.styleObjHeading1 }
    this.heading2Obj = { 'content': this.docsForm.value.heading2, 'styleObj': this.styleObjHeading2 }
    this.heading3Obj = { 'content': this.docsForm.value.heading3, 'styleObj': this.styleObjHeading3 }
    this.heading4Obj = { 'content': this.docsForm.value.heading4, 'styleObj': this.styleObjHeading4 }
    this.heading5Obj = { 'content': this.docsForm.value.heading5, 'styleObj': this.styleObjHeading5 }
    this.AknowledgeObj = { 'content': this.docsForm.value.Aknowledge, 'styleObj': this.styleObjAknowledge }
    this.RefrencesObj = { 'content': this.docsForm.value.Refrences, 'styleObj': this.styleObjRefrence }
    arr.push(
      this.titleObj,
      this.subTitleObj,
      this.author1Obj,
      this.author2Obj,
      this.abstarctObj,
      this.introductionObj,
      this.heading1Obj,
      this.heading2Obj,
      this.heading3Obj,
      this.heading4Obj,
      this.heading5Obj,
      this.AknowledgeObj,
      this.RefrencesObj
    )
    console.log('click', arr)
    //     console.log('abbaba', save)
    //     console.log('tiler', this.subTitleObj)
    // console.log('asasa', this.author1Obj)

    //  var obj = { "content": "This is sample Title", "style": { "fontSize": "20", "isBold": "true" } }
    var datUrl
    this.docsService.generateDoc(arr).take(1).subscribe(res => {
      console.log('res', res)
      datUrl = res;
      if (datUrl) {
        let contentType = datUrl.split(';')[0];

        let byteCharacters = atob(datUrl);

        let byteNumbers = new Array(byteCharacters.length);

        for (var i = 0; i < byteCharacters.length; i++)
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        let byteArray = new Uint8Array(byteNumbers);

        let blob = new Blob([byteArray], { type: contentType });
        console.log('blob', blob)

        saveAs(blob, 'queryMaanJaa.docx');

      }
    })











  }




  getTitleStyle(style) {
    if (this.selectType == 'title') {

      if (style == 'boldTrue') {

        this.styleObjTitle.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjTitle.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjTitle.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjTitle.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjTitle.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjTitle.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjTitle.aligncenter = true;
        this.styleObjTitle.alignLeft = false;
        this.styleObjTitle.alignJustify = false;
        this.styleObjTitle.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjTitle.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjTitle.alignRight = true;
        this.styleObjTitle.aligncenter = false;
        this.styleObjTitle.alignLeft = false;
        this.styleObjTitle.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjTitle.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjTitle.alignLeft = true;
        this.styleObjTitle.aligncenter = false;
        this.styleObjTitle.alignJustify = false;
        this.styleObjTitle.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjTitle.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjTitle.alignJustify = true;
        this.styleObjTitle.aligncenter = false;
        this.styleObjTitle.alignLeft = false;
        this.styleObjTitle.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjTitle.alignJustify = false;
      }
      this.styleObjTitle.fontSize = this.fontSize
      this.styleObjTitle.content = this.docsForm.value.title;




    }//!st if

    if (this.selectType == 'subTitle') {
      this.styleObjSubtitle.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjSubtitle.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjSubtitle.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjSubtitle.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjSubtitle.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjSubtitle.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjSubtitle.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjSubtitle.aligncenter = true;
        this.styleObjSubtitle.alignLeft = false;
        this.styleObjSubtitle.alignJustify = false;
        this.styleObjSubtitle.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjSubtitle.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjSubtitle.alignRight = true;
        this.styleObjSubtitle.aligncenter = false;
        this.styleObjSubtitle.alignLeft = false;
        this.styleObjSubtitle.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjSubtitle.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjSubtitle.alignLeft = true;
        this.styleObjSubtitle.aligncenter = false;
        this.styleObjSubtitle.alignJustify = false;
        this.styleObjSubtitle.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjSubtitle.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjSubtitle.alignJustify = true;
        this.styleObjSubtitle.aligncenter = false;
        this.styleObjSubtitle.alignLeft = false;
        this.styleObjSubtitle.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjSubtitle.alignJustify = false;
      }

      this.styleObjSubtitle.content = this.docsForm.value.subtitle

    }//!st if
    if (this.selectType == 'author1') {
      this.styleObjAuthor1.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjAuthor1.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjAuthor1.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjAuthor1.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjAuthor1.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjAuthor1.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjAuthor1.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjAuthor1.aligncenter = true;
        this.styleObjAuthor1.alignLeft = false;
        this.styleObjAuthor1.alignJustify = false;
        this.styleObjAuthor1.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjAuthor1.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjAuthor1.alignRight = true;
        this.styleObjAuthor1.aligncenter = false;
        this.styleObjAuthor1.alignLeft = false;
        this.styleObjAuthor1.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjAuthor1.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjAuthor1.alignLeft = true;
        this.styleObjAuthor1.aligncenter = false;
        this.styleObjAuthor1.alignJustify = false;
        this.styleObjAuthor1.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjAuthor1.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjAuthor1.alignJustify = true;
        this.styleObjAuthor1.aligncenter = false;
        this.styleObjAuthor1.alignLeft = false;
        this.styleObjAuthor1.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjAuthor1.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'author2') {
      this.styleObjAuthor2.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjAuthor2.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjAuthor2.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjAuthor2.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjAuthor2.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjAuthor2.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjAuthor2.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjAuthor2.aligncenter = true;
        this.styleObjAuthor2.alignLeft = false;
        this.styleObjAuthor2.alignJustify = false;
        this.styleObjAuthor2.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjAuthor2.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjAuthor2.alignRight = true;
        this.styleObjAuthor2.aligncenter = false;
        this.styleObjAuthor2.alignLeft = false;
        this.styleObjAuthor2.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjAuthor2.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjAuthor2.alignLeft = true;
        this.styleObjAuthor2.aligncenter = false;
        this.styleObjAuthor2.alignJustify = false;
        this.styleObjAuthor2.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjAuthor2.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjAuthor2.alignJustify = true;
        this.styleObjAuthor2.aligncenter = false;
        this.styleObjAuthor2.alignLeft = false;
        this.styleObjAuthor2.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjAuthor2.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'Abstract') {
      this.styleObjAbstract.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjAbstract.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjAbstract.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjAbstract.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjAbstract.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjAbstract.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjAbstract.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjAbstract.aligncenter = true;
        this.styleObjAbstract.alignLeft = false;
        this.styleObjAbstract.alignJustify = false;
        this.styleObjAbstract.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjAbstract.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjAbstract.alignRight = true;
        this.styleObjAbstract.aligncenter = false;
        this.styleObjAbstract.alignLeft = false;
        this.styleObjAbstract.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjAbstract.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjAbstract.alignLeft = true;
        this.styleObjAbstract.aligncenter = false;
        this.styleObjAbstract.alignJustify = false;
        this.styleObjAbstract.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjAbstract.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjAbstract.alignJustify = true;
        this.styleObjAbstract.aligncenter = false;
        this.styleObjAbstract.alignLeft = false;
        this.styleObjAbstract.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjAbstract.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'introduction') {
      this.styleObjIntroduction.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjIntroduction.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjIntroduction.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjIntroduction.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjIntroduction.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjIntroduction.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjIntroduction.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjIntroduction.aligncenter = true;
        this.styleObjIntroduction.alignLeft = false;
        this.styleObjIntroduction.alignJustify = false;
        this.styleObjIntroduction.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjIntroduction.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjIntroduction.alignRight = true;
        this.styleObjIntroduction.aligncenter = false;
        this.styleObjIntroduction.alignLeft = false;
        this.styleObjIntroduction.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjIntroduction.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjIntroduction.alignLeft = true;
        this.styleObjIntroduction.aligncenter = false;
        this.styleObjIntroduction.alignJustify = false;
        this.styleObjIntroduction.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjIntroduction.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjIntroduction.alignJustify = true;
        this.styleObjIntroduction.aligncenter = false;
        this.styleObjIntroduction.alignLeft = false;
        this.styleObjIntroduction.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjIntroduction.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'heading1') {
      this.styleObjHeading1.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjHeading1.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjHeading1.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjHeading1.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjHeading1.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjHeading1.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjHeading1.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjHeading1.aligncenter = true;
        this.styleObjHeading1.alignLeft = false;
        this.styleObjHeading1.alignJustify = false;
        this.styleObjHeading1.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjHeading1.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjHeading1.alignRight = true;
        this.styleObjHeading1.aligncenter = false;
        this.styleObjHeading1.alignLeft = false;
        this.styleObjHeading1.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjHeading1.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjHeading1.alignLeft = true;
        this.styleObjHeading1.aligncenter = false;
        this.styleObjHeading1.alignJustify = false;
        this.styleObjHeading1.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjHeading1.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjHeading1.alignJustify = true;
        this.styleObjHeading1.aligncenter = false;
        this.styleObjHeading1.alignLeft = false;
        this.styleObjHeading1.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjHeading1.alignJustify = false;
      }



    }//!st if

    if (this.selectType == 'heading2') {
      this.styleObjHeading2.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjHeading2.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjHeading2.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjHeading2.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjHeading2.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjHeading2.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjHeading2.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjHeading2.aligncenter = true;
        this.styleObjHeading2.alignLeft = false;
        this.styleObjHeading2.alignJustify = false;
        this.styleObjHeading2.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjHeading2.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjHeading2.alignRight = true;
        this.styleObjHeading2.aligncenter = false;
        this.styleObjHeading2.alignLeft = false;
        this.styleObjHeading2.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjHeading2.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjHeading2.alignLeft = true;
        this.styleObjHeading2.aligncenter = false;
        this.styleObjHeading2.alignJustify = false;
        this.styleObjHeading2.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjHeading2.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjHeading2.alignJustify = true;
        this.styleObjHeading2.aligncenter = false;
        this.styleObjHeading2.alignLeft = false;
        this.styleObjHeading2.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjHeading2.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'heading3') {
      this.styleObjHeading3.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjHeading3.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjHeading3.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjHeading3.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjHeading3.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjHeading3.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjHeading3.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjHeading3.aligncenter = true;
        this.styleObjHeading3.alignLeft = false;
        this.styleObjHeading3.alignJustify = false;
        this.styleObjHeading3.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjHeading3.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjHeading3.alignRight = true;
        this.styleObjHeading3.aligncenter = false;
        this.styleObjHeading3.alignLeft = false;
        this.styleObjHeading3.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjHeading3.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjHeading3.alignLeft = true;
        this.styleObjHeading3.aligncenter = false;
        this.styleObjHeading3.alignJustify = false;
        this.styleObjHeading3.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjHeading3.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjHeading3.alignJustify = true;
        this.styleObjHeading3.aligncenter = false;
        this.styleObjHeading3.alignLeft = false;
        this.styleObjHeading3.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjHeading3.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'heading4') {
      this.styleObjHeading4.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjHeading4.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjHeading4.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjHeading4.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjHeading4.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjHeading4.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjHeading4.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjHeading4.aligncenter = true;
        this.styleObjHeading4.alignLeft = false;
        this.styleObjHeading4.alignJustify = false;
        this.styleObjHeading4.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjHeading4.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjHeading4.alignRight = true;
        this.styleObjHeading4.aligncenter = false;
        this.styleObjHeading4.alignLeft = false;
        this.styleObjHeading4.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjHeading4.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjHeading4.alignLeft = true;
        this.styleObjHeading4.aligncenter = false;
        this.styleObjHeading4.alignJustify = false;
        this.styleObjHeading4.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjHeading4.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjHeading4.alignJustify = true;
        this.styleObjHeading4.aligncenter = false;
        this.styleObjHeading4.alignLeft = false;
        this.styleObjHeading4.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjHeading4.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'heading5') {
      this.styleObjHeading5.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjHeading5.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjHeading5.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjHeading5.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjHeading5.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjHeading5.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjHeading5.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjHeading5.aligncenter = true;
        this.styleObjHeading5.alignLeft = false;
        this.styleObjHeading5.alignJustify = false;
        this.styleObjHeading5.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjHeading5.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjHeading5.alignRight = true;
        this.styleObjHeading5.aligncenter = false;
        this.styleObjHeading5.alignLeft = false;
        this.styleObjHeading5.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjHeading5.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjHeading5.alignLeft = true;
        this.styleObjHeading5.aligncenter = false;
        this.styleObjHeading5.alignJustify = false;
        this.styleObjHeading5.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjHeading5.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjHeading5.alignJustify = true;
        this.styleObjHeading5.aligncenter = false;
        this.styleObjHeading5.alignLeft = false;
        this.styleObjHeading5.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjHeading5.alignJustify = false;
      }



    }//!st if
    if (this.selectType == 'Aknowledge') {
      this.styleObjAknowledge.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjAknowledge.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjAknowledge.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjAknowledge.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjAknowledge.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjAknowledge.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjAknowledge.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjAknowledge.aligncenter = true;
        this.styleObjAknowledge.alignLeft = false;
        this.styleObjAknowledge.alignJustify = false;
        this.styleObjAknowledge.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjAknowledge.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjAknowledge.alignRight = true;
        this.styleObjAknowledge.aligncenter = false;
        this.styleObjAknowledge.alignLeft = false;
        this.styleObjAknowledge.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjAknowledge.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjAknowledge.alignLeft = true;
        this.styleObjAknowledge.aligncenter = false;
        this.styleObjAknowledge.alignJustify = false;
        this.styleObjAknowledge.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjAknowledge.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjAknowledge.alignJustify = true;
        this.styleObjAknowledge.aligncenter = false;
        this.styleObjAknowledge.alignLeft = false;
        this.styleObjAknowledge.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjAknowledge.alignJustify = false;
      }



    }//!st if




    if (this.selectType == 'Refrences') {
      this.styleObjRefrence.fontSize = this.fontSize
      if (style == 'boldTrue') {
        this.styleObjRefrence.bold = true;
      } else if (style == 'boldFalse') {
        this.styleObjRefrence.bold = false;
      } else if (style == 'italicTrue') {
        this.styleObjRefrence.isItalic = true;
      } else if (style == 'italicFalse') {
        this.styleObjRefrence.isItalic = false;
      } else if (style == 'isUnderlineTrue') {
        this.styleObjRefrence.isUnderline = true;
      } else if (style == 'isUnderlineFalse') {
        this.styleObjRefrence.isUnderline = false;
      } else if (style == 'aligncenterTrue') {
        this.styleObjRefrence.aligncenter = true;
        this.styleObjRefrence.alignLeft = false;
        this.styleObjRefrence.alignJustify = false;
        this.styleObjRefrence.alignRight = false;
      } else if (style == 'aligncenterFalse') {
        this.styleObjRefrence.aligncenter = false;
      } else if (style == 'alignRightTrue') {
        this.styleObjRefrence.alignRight = true;
        this.styleObjRefrence.aligncenter = false;
        this.styleObjRefrence.alignLeft = false;
        this.styleObjRefrence.alignJustify = false;
      } else if (style == 'alignRightFalse') {
        this.styleObjRefrence.alignRight = false;
      } else if (style == 'alignLeftTrue') {
        this.styleObjRefrence.alignLeft = true;
        this.styleObjRefrence.aligncenter = false;
        this.styleObjRefrence.alignJustify = false;
        this.styleObjRefrence.alignRight = false;
      } else if (style == 'alignLeftFalse') {
        this.styleObjRefrence.alignLeft = false;
      } else if (style == 'alignJustifyTrue') {
        this.styleObjRefrence.alignJustify = true;
        this.styleObjRefrence.aligncenter = false;
        this.styleObjRefrence.alignLeft = false;
        this.styleObjRefrence.alignRight = false;
      } else if (style == 'alignJustifyFalse') {
        this.styleObjRefrence.alignJustify = false;
      }



    }//!st if

  }
}
