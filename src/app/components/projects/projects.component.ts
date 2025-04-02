import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms {{delay}}ms ease-out')
      ], { params: { delay: 0 } })
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with Angular, Node.js, and MongoDB. Features include product browsing, shopping cart, user authentication, and payment processing.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform.example.com',
      expanded: true
    },
    {
      title: 'Task Management System',
      description: 'A Kanban-style task management application that helps teams track progress and manage projects efficiently. Includes real-time updates, task assignments, and reporting features.',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI', 'Chart.js'],
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      githubUrl: 'https://github.com/username/task-management',
      liveUrl: 'https://task-management.example.com',
      expanded: true
    },
    {
      title: 'Weather Forecast App',
      description: 'A mobile-responsive weather application that provides real-time weather data and forecasts. Uses geolocation to display local weather and allows users to search locations.',
      technologies: ['JavaScript', 'OpenWeather API', 'HTML5', 'CSS3', 'Webpack'],
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      githubUrl: 'https://github.com/username/weather-app',
      liveUrl: 'https://weather-app.example.com',
      expanded: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media managers that aggregates data from multiple platforms and provides insights through interactive visualizations.',
      technologies: ['Angular', 'D3.js', 'Express', 'PostgreSQL', 'Social Media APIs'],
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
      githubUrl: 'https://github.com/username/social-dashboard',
      liveUrl: 'https://social-dashboard.example.com',
      expanded: true
    },
    {
      title: 'Fitness Tracking Application',
      description: 'A fitness tracking app that allows users to log workouts, track progress, set goals, and view performance statistics. Includes social features and achievement badges.',
      technologies: ['React Native', 'Redux', 'Firebase', 'HealthKit API', 'Google Fit API'],
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      githubUrl: 'https://github.com/username/fitness-tracker',
      liveUrl: 'https://fitness-tracker.example.com',
      expanded: true
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void { }
  
  toggleExpand(project: Project): void {
    project.expanded = !project.expanded;
  }
}
