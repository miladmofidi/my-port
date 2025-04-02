import { Component, OnInit } from '@angular/core';
import { Skill, SkillCategory } from '../../models/skill.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms 300ms ease-out')
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C#', level: 70 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
        { name: 'Vue.js', level: 65 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'ASP.NET Core', level: 75 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Django', level: 65 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'Redis', level: 65 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Jest/Jasmine', level: 75 }
      ]
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void { }
}
