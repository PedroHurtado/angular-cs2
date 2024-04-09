import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  divEl = viewChild<ElementRef>('dialog')
  open(){
    const dialog:HTMLDialogElement = this.divEl()?.nativeElement
    if(dialog){
      dialog.showModal();
    }
  }
}
