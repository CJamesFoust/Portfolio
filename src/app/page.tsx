import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      {/* 
          Future Sections to implement:
          - ProjectGrid: Display your work on Chevy Trailblazer diagnostics or room division modeling
          - Expertise: Highlight JavaScript, React, and PCI-DSS compliance
      */}
    </main>
  );
}