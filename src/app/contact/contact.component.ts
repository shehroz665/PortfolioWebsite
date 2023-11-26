import { Component } from '@angular/core';
import { FormControl,Validators ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contactForm= new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email,Validators.required]),
      subject:new FormControl('',[Validators.required]),
      body:new FormControl(''),
    });
    getControl(controlName:string) {
      return this.contactForm.get(controlName);
    }
    postData(){
      console.log(this.contactForm.value);
      
    }
}
