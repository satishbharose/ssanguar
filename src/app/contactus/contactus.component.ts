import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  form: FormGroup = this.fb.group({
    fname: '',
    email: '',
    mobileNumber: '',
    msg: ''
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('VXIlhV7gC056h53V7');
    let response = await emailjs.send("service_ozh25er","template_h1wrj47",{
      fname: this.form.value.fname,
      to_name: "ScriptSprite",
      email: this.form.value.email,
      mobileNumber: this.form.value.mobileNumber,
      msg: this.form.value.msg,
      });
     

      alert('Message has been sent.');
      this.form.reset();
  }

}