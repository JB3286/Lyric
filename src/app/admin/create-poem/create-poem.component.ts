import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Poem } from '../../types/poem';

@Component({
  selector: 'create-poem',
  templateUrl: './create-poem.component.html',
  styleUrl: './create-poem.component.scss',
})
export class CreatePoemComponent {

  poem: Poem = {} as Poem;

  constructor(private fb: FormBuilder) { }

  createPoem = this.fb.group({
    title: new FormControl("", Validators.required),
    date: new FormControl(Date, Validators.required),
    category:new FormControl("", Validators.required),
    content:new FormControl("", Validators.required),
    comment:new FormControl("", Validators.required)
  });

  

  
  onSubmit(){
    this.poem = Object.assign(this.poem,this.createPoem.value);
    console.log(this.poem);
  }


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: '',
    defaultParagraphSeparator: '',
    defaultFontName: 'Verdana',
    defaultFontSize: '',
    fonts: [
      { class: 'verdana', name: 'Verdana' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
    ]
  };

}
