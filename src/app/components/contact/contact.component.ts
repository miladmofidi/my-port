import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted = false;
  submitting = false;
  formSubmitSuccess = false;
  formSubmitError = false;

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/miladmofidi',
      icon: `<i class="fa fa-github fa-lg "></i>`
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/miladmofidi',
      icon: `<i class="fa fa-linkedin fa-lg "></i>`
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/miladmofidi',
      icon: `<i class="fa fa-facebook"></i>`
    }
  ];

  constructor(
      private fb: FormBuilder,
      private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.formSubmitted = true;
    this.formSubmitSuccess = false;
    this.formSubmitError = false;

    if (this.contactForm.valid) {
      this.submitting = true;
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.submitting = false;
          this.contactForm.reset();
          this.formSubmitted = false;
          this.formSubmitSuccess = true;
        },
        error: () => {
          this.submitting = false;
          this.formSubmitError = true;
        }
      });
    }
  }
  get f() {
    return this.contactForm.controls;
  }
}
