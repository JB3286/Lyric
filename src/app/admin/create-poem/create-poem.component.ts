import { Component } from '@angular/core';
import { QuillConfig } from 'ngx-quill';


@Component({
  selector: 'create-poem',
  templateUrl: './create-poem.component.html',
  styleUrl: './create-poem.component.scss',
})
export class CreatePoemComponent {

toolbarConfig: Object = {
  toolbar: [
  ['bold', 'italic', 'underline', 'strike'],
  [{align:[]}],
  [{size: []}],
  ['image'],
  
]

}

}
