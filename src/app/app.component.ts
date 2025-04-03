import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  activeSection = 'about'; // Keep track of the currently active section
  isScrolling = false; // Prevent multiple scrolls while smooth scrolling is active

  sections = ['about', 'skills', 'projects', 'experiences', 'contact']; // IDs of sections in order

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (this.isScrolling) return; // Do nothing if already scrolling
    this.isScrolling = true;

    const currentIndex = this.sections.indexOf(this.activeSection);

    if (event.deltaY > 0 && currentIndex < this.sections.length - 1) {
      // Scrolling down
      this.scrollToSection(this.sections[currentIndex + 1]);
    } else if (event.deltaY < 0 && currentIndex > 0) {
      // Scrolling up
      this.scrollToSection(this.sections[currentIndex - 1]);
    }

    // Allow further scrolling after a delay
    setTimeout(() => (this.isScrolling = false), 1000); // Adjust the delay based on scroll speed
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId; // Update the active section
    }
  }
}
