import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('imageAnimation', [
      state('in', style({ opacity: 1, transform: 'scale(1) rotate(0deg)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.6) rotate(-10deg)' }),
        animate('800ms 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  typedText: string = '';
  fullName: string = 'Milad Mofidi';
  typingSpeed: number = 100; // milliseconds per character
  
  constructor() { }
  
  ngOnInit(): void {
    this.animateTyping();
  }
  
  animateTyping(): void {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < this.fullName.length) {
        this.typedText += this.fullName.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, this.typingSpeed);
  }
}
