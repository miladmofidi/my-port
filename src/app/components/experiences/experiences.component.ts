import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('600ms {{delay}}ms ease-out')
      ], { params: { delay: 0 } })
    ])
  ]
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      period: 'January 2020 - Present',
      location: 'Lisbon, PT',
      description: [
        'Lead development of microservices architecture using Node.js and Docker',
        'Architected and implemented RESTful APIs serving over 1M daily requests',
        'Mentored junior developers and conducted code reviews',
        'Introduced CI/CD pipelines that reduced deployment time by 70%',
        'Collaborated with product managers to define technical roadmap'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovate Digital',
      period: 'March 2017 - December 2019',
      location: 'Boston, MA',
      description: [
        'Developed responsive web applications using Angular and Express.js',
        'Implemented authentication system with JWT and OAuth2.0',
        'Optimized MongoDB queries resulting in 40% performance improvement',
        'Created data visualization dashboards using D3.js',
        'Participated in Agile development process and sprint planning'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebDesign Pro',
      period: 'June 2015 - February 2017',
      location: 'Seattle, WA',
      description: [
        'Built interactive UIs with React and Redux',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Worked with UX team to translate wireframes into functional code',
        'Reduced page load time by 60% through optimization techniques',
        'Contributed to company design system and component library'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Tech Startups Inc.',
      period: 'May 2014 - August 2014',
      location: 'New York, NY',
      description: [
        'Assisted in developing features for a mobile-first web application',
        'Created automated tests using Jest and Selenium',
        'Fixed bugs and improved existing codebase',
        'Participated in daily stand-ups and sprint reviews',
        'Learned software development lifecycle in a fast-paced environment'
      ]
    },
    {
      title: 'Computer Science Teaching Assistant',
      company: 'University Tech Department',
      period: 'September 2013 - May 2014',
      location: 'Chicago, IL',
      description: [
        'Assisted professors in teaching programming fundamentals',
        'Held weekly office hours to help students with coding assignments',
        'Graded assignments and provided constructive feedback',
        'Prepared lab materials and practical exercises',
        'Created supplementary learning resources for students'
      ]
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void { }
}
