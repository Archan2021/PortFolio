import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home lowercase">
      <section className="mt-8">
        <h2 className="section-header">current</h2>
        <div className="experience-list">
          <div>
            <div className="exp-role">ltimindtree <span className="text-secondary font-medium">~ engineer (industrial iot)</span></div>
            <div className="exp-meta">[sept 2025 - present]</div>
            <div className="exp-desc">
              <ul className="ul-styled text-secondary">
                <li>architected and deployed a secure <span className="text-primary font-medium">employee leave management system</span> using asp.net core web api and angular.</li>
                <li>engineered <span className="text-primary font-medium">jwt-based authentication</span> and rbac, strengthening api security and enforcing granular access control.</li>
                <li>designed layered architecture (controller-service-repository) adhering to solid principles for scalability.</li>
                <li>optimized database interactions via ef core, improving query performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-header">previous</h2>
        <div className="experience-list">
          <div>
            <div className="exp-role">cake craft <span className="text-secondary font-medium">~ full stack web application</span></div>
            <div className="exp-desc">
              <ul className="ul-styled text-secondary">
                <li>built scalable restful apis for product and order management modules using asp.net core.</li>
                <li>implemented crud operations with validation, exception handling, and optimized sql queries.</li>
                <li>integrated react frontend with backend apis enabling seamless client-server data flow.</li>
                <li>designed normalized sql server schema improving data consistency and performance.</li>
                <li>deployed and tested applications leveraging azure app services fundamentals.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-header">blogs</h2>
        <div className="blog-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <article className="blog-item">
            <div className="blog-meta flex-between" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              <span className="text-secondary" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>FEBRUARY 27, 2026</span>
              <span className="text-secondary" style={{ fontSize: '0.8rem' }}>&mdash;</span>
            </div>
            <h3 className="blog-title mt-2 mb-1">
              <Link to="/blogs" className="text-accent hover-underline" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', lineHeight: '1.4', textDecoration: 'none' }}>
                I SPENT A WEEKEND TEACHING MY BROWSER WHAT HAND GESTURES MEAN
              </Link>
            </h3>
            <p className="blog-desc text-primary" style={{ lineHeight: '1.6', marginTop: '0.5rem' }}>
              a completely normal story about building a mouse-gesture chrome extension because the back button was, apparently, too far away.
            </p>
          </article>

          <article className="blog-item">
            <div className="blog-meta flex-between" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              <span className="text-secondary" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>FEBRUARY 26, 2026</span>
              <span className="text-secondary" style={{ fontSize: '0.8rem' }}>&mdash;</span>
            </div>
            <h3 className="blog-title mt-2 mb-1">
              <Link to="/blogs" className="text-accent hover-underline" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', lineHeight: '1.4', textDecoration: 'none' }}>
                FROM SCREENSHOT TO SOLUTION: THE POWER OF MULTIMODAL AI IN DEBUGGING
              </Link>
            </h3>
            <p className="blog-desc text-primary" style={{ lineHeight: '1.6', marginTop: '0.5rem' }}>
              learn how ai feedbacks leverages google gemini to turn visual bug reports into actionable prompts for coding agents.
            </p>
          </article>
        </div>
        <div className="mt-6">
          <Link to="/blogs" className="underline text-secondary italic hover-accent" style={{ textDecorationColor: 'var(--text-secondary)' }}>read all blogs</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-header">projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="flex-between">
              <div className="project-title text-accent">employee leave management system</div>
              <div className="project-date">asp.net core, angular, sql server</div>
            </div>
            <p className="project-desc text-secondary">
              developed full-stack system with jwt-based authentication. implemented approval workflows, server-side pagination, filtering, validation, and applied clean architecture and solid principles.
            </p>
          </div>

          <div className="project-card">
            <div className="flex-between">
              <div className="project-title text-accent">ar jewelry try-on system</div>
              <div className="project-date">react, webrtc, mediapipe</div>
            </div>
            <p className="project-desc text-secondary">
              engineered real-time ar application achieving &lt;50ms latency. tracked 100+ facial landmarks for accurate 3d overlay positioning and reduced asset loading time by 40%.
            </p>
          </div>

          <div className="project-card">
            <div className="flex-between">
              <div className="project-title text-accent">autism spectrum disorder prediction system</div>
              <div className="project-date">python, scikit-learn, tensorflow</div>
            </div>
            <p className="project-desc text-secondary">
              developed 6 ml classification models. achieved 99.04% accuracy and 99.11% f1-score using random forest on 2,000+ medical records. reduced false negative rate below 2%.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-secondary italic hover-accent">view full resume</a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-header">education & certifications</h2>
        <div className="experience-list">
          <div>
            <div className="exp-role">b.tech - computer science & engineering</div>
            <div className="exp-meta">institute of technical education and research (iter) [2021-2025] | cgpa: 8.15/10</div>
          </div>
          <div>
            <div className="exp-role mt-2">certifications</div>
            <ul className="ul-styled text-secondary">
              <li>microsoft certified: azure fundamentals (az-900) — score: 952/1000</li>
              <li>full stack java development — scaler</li>
              <li>responsive web design certification</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-header">contact</h2>
        <p className="text-secondary">
          interested to talk? read my <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-primary">resume</a> or book a call on <a href="#" className="underline text-primary">calendly</a>.
        </p>
        <div className="mt-4">
          auth sections:{' '}
          <Link to="/login" className="underline text-accent mr-4">login</Link> |{' '}
          <Link to="/signup" className="underline text-accent ml-4">signup</Link>
        </div>
      </section>
    </div>
  );
}
