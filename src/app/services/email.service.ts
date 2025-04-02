import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  
  constructor(private http: HttpClient) { }
  
  sendEmail(data: EmailData): Observable<any> {
    const emailJsUserId = 'your_emailjs_user_id'; // Replace with actual EmailJS user ID
    const emailJsServiceId = 'your_service_id'; // Replace with actual EmailJS service ID
    const emailJsTemplateId = 'your_template_id'; // Replace with actual EmailJS template ID
    
    const emailParams = {
      service_id: emailJsServiceId,
      template_id: emailJsTemplateId,
      user_id: emailJsUserId,
      template_params: {
        from_name: data.name,
        reply_to: data.email,
        message: data.message
      }
    };
    
    return this.http.post(this.apiUrl, emailParams);
  }
}
