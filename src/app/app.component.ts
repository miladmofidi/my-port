import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  activeSection: string = 'about'; // The currently active section

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
    contactEnd: '#134AB4FF',
  };
  backgroundGradient: string =
      'linear-gradient(180deg, #ffffff 0%, #4a90e2 30%, #50e3c2 70%, #134AB4FF 100%)'; // Smooth vertical gradient

  currentYear: number = new Date().getFullYear();



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
        this.activeSection = sectionId; // Updates the active section
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
