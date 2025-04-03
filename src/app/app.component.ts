import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  activeSection: string = 'about'; // The currently active section
  backgroundGradient: string = ''; // Holds the gradient for the current section

  colors: { [key: string]: string } = {
    aboutStart: '#ffffff', // Editable in IntelliJ Color Wizard
    aboutEnd: '#4f7ee9',
    skillsStart: '#a1f3eb',
    skillsEnd: '#50e3c2',
    projectsStart: '#50e3c2',
    projectsEnd: '#4a90e2',
    experiencesStart: '#4a90e2',
    experiencesEnd: '#4f7ee9',
    contactStart: '#ffffff',
    contactEnd: '#0055ff',
  };

/*
#### **Using Degrees**
- `0deg`: From top to bottom.
- `90deg`: From left to right.
- `180deg`: From bottom to top.
- `-90deg`: From right to left.
- `120deg`: A diagonal gradient (default value in your example).

#### **Using Directional Keywords**
- `to right`: Same as `90deg` — Left to right.
- `to bottom`: Same as `0deg` — Top to bottom.
- `to left`: Same as `-90deg` — Right to left.
- `to top right`: Diagonal gradient from bottom-left to top-right.
*/


  // Mapping each section ID to its gradient background
  gradients: { [key: string]: string } = {
    about: `linear-gradient(180deg, ${this.colors['aboutStart']}, ${this.colors['aboutEnd']})`,
    skills: `linear-gradient(135deg, ${this.colors['skillsStart']}, ${this.colors['skillsEnd']})`,
    projects: `radial-gradient(circle, ${this.colors['projectsStart']}, ${this.colors['projectsEnd']})`,
    experiences: `linear-gradient(135deg, ${this.colors['skillsStart']}, ${this.colors['skillsEnd']})`,
    contact: `linear-gradient(180deg, ${this.colors['contactStart']}, ${this.colors['contactEnd']})`,
  };




  // Listen to scroll events to detect the active section
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
      ) {
        const sectionId = section.getAttribute('id') || '';
        if (sectionId && this.gradients[sectionId]) {
          this.activeSection = sectionId;
          this.backgroundGradient = this.gradients[sectionId];
        }
      }
    });
  }

  // Smoothly scroll to a specific section when triggered by the Navbar
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
