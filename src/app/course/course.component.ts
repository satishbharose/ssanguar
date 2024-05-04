import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }
  courses=[
    {'id':1, 'name':'Learn Angular', 'description':'Angular lets you start small and supports you as your team and apps grow. Read how Angular helps you grow. Loved by ...', 'image':'../../assets/LangLogos/Angular.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'../../assets/SyllabusPdfs/Angular_4Syllabus.pdf'},
    {'id':2, 'name':'Learn Typescript', 'description':'TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes ...', 'image':'../../assets/LangLogos/TypeScript.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'../../assets/SyllabusPdfs/Typescript_with_Angular4Syllabus.pdf'},
    {'id':3, 'name':'Learn Nodejs', 'description':'Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.', 'image':'../../assets/LangLogos/NodeJs.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'../../assets/SyllabusPdfs/NodeJSSyllabus.pdf'},
    {'id':4, 'name':'Learn Reactjs', 'description':'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.', 'image':'../../assets/LangLogos/React.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'../../assets/SyllabusPdfs/ReactJSSyllabus.pdf'},
    {'id':5, 'name':'Learn Java', 'description':'Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.', 'image':'../../assets/LangLogos/Java.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'../../assets/SyllabusPdfs/Syllabus_Core_Java_and_Advanced_Java.pdf'}
  ]

  webTechnology=[
    {'id':1, 'name':'Learn HTML', 'description':'HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and ...', 'image':'../../assets/LangLogos/HTML.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'#'},
    {'id':2, 'name':'Learn CSS', 'description':'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML ...', 'image':'../../assets/LangLogos/CSS.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'#'},
    {'id':3, 'name':'Learn JavaScript', 'description':'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.', 'image':'../../assets/LangLogos/JavaScript.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'../../assets/SyllabusPdfs/NodeJSSyllabus.pdf'},
    {'id':4, 'name':'Learn JQuery', 'description':'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax. It is free, open-source software using the permissive MIT License. As of August 2022, jQuery is used by 77% of the 10 million most popular websites. ', 'image':'../../assets/LangLogos/jQuery.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'#'},
    {'id':5, 'name':'Learn XML', 'description':'Extensible Markup Language is a markup language and file format for storing, transmitting, and reconstructing arbitrary data. It defines a set of rules for encoding documents in a format that is both human-readable and machine-readable', 'image':'../../assets/LangLogos/XML.jpg', 'buttonVal':'Click Here for Syllabus', 'pdflink':'#'},
    {'id':5, 'name':'Learn JSON', 'description':'JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a commonly used data format with diverse uses in electronic data interchange, including that of web applications with servers.', 'image':'../../assets/LangLogos/JSON.png', 'buttonVal':'Click Here for Syllabus', 'pdflink':'#'}
  ]

  // showPDF(showPdf:string){
  //   if(showPdf == 'Show Angular PDF'){
  //     this.hideAllPdf();
  //     this.showDiv.angular = true;
  //   }
  //   if(showPdf == 'Show Typescript PDF'){
  //     this.hideAllPdf();
  //     this.showDiv.typescript = true;
  //   }
  //   if(showPdf == 'Show Nodejs PDF'){
  //     this.hideAllPdf();
  //     this.showDiv.nodejs = true;
  //   }
  //   if(showPdf == 'Show Reactjs PDF'){
  //     this.hideAllPdf();
  //     this.showDiv.react = true;
  //   }  
  // }

  // hideAllPdf(){
  //   this.showDiv.angular = false;
  //   this.showDiv.typescript = false;
  //   this.showDiv.react = false;
  //   this.showDiv.nodejs = false;
  // }

  showDiv = {
    angular : false,
    typescript : false,
    react : false,
    nodejs : false
  }
}