const EXPERIENCE = [
  {
    role: "Technical Operations & Software Development",
    org: "Technology Without Noise",
    location: "West Valley City, UT",
    dates: "Sept. 2024 – Present",
    points: [
      "Engineered and deployed 4 full-stack React.js client websites on AWS, driving a 10% increase in inbound leads.",
      "Built a full-stack R&D dashboard (Node.js + PostgreSQL) consolidating product-testing data, revenue, and R&D records.",
      "Extended an eCommerce platform with automated stock tracking, cutting inventory discrepancy 25% and improving purchase-order visibility.",
      "Translated customer requirements into deliverables across the full development lifecycle.",
    ],
  },
  {
    role: "Test Technician",
    org: "Varex Imaging",
    location: "Salt Lake City, UT",
    dates: "May 2024 – Sept. 2024",
    points: [
      "Evaluated and diagnosed 20 imaging detectors per week under RMA warranty contracts, holding a 90% first-pass rate through systematic hardware debugging.",
      "Reduced average repair turnaround by one business day via fault isolation and component-level repair across 50 failure types.",
    ],
  },
  {
    role: "Production Operator III",
    org: "Varex Imaging",
    location: "Salt Lake City, UT",
    dates: "Aug. 2020 – May 2024",
    points: [
      "Assembled and tested 15 medical imaging detectors per day in a highly regulated environment, maintaining strict electro-mechanical quality standards.",
      "Ran daily handoff meetings with a swing-shift team of 5, relaying priorities and quality flags to ensure shift continuity.",
    ],
  },
];

const EDUCATION = [
  {
    school: "University of Utah",
    detail: "B.S. Computer Science · GPA 3.8",
    location: "Salt Lake City, UT",
    dates: "Expected May 2028",
  },
  {
    school: "Salt Lake Community College",
    detail: "A.S. Computer Science & Information Systems",
    location: "Taylorsville, UT",
    dates: "Aug. 2025",
  },
];

const SKILLS = [
  { label: "Languages", items: "JavaScript, Python, SQL, Java, HTML/CSS" },
  { label: "Frameworks", items: "React.js, Node.js, Express, Spring Boot" },
  { label: "Cloud & Tools", items: "AWS Amplify, PostgreSQL, Supabase, Git, Railway, Vercel" },
  { label: "Data & Viz", items: "Pandas, Plotly" },
  { label: "Coursework", items: "Data Structures & Algorithms, Computer Architecture, Web Programming, OOP" },
];

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-actions">

      </div>

      <section className="resume-section">
        <h4 className="resume-heading mono">Experience</h4>
        {EXPERIENCE.map((job) => (
          <div className="resume-item" key={job.role + job.dates}>
            <div className="resume-item-head">
              <span className="resume-role">{job.role}</span>
              <span className="resume-dates">{job.dates}</span>
            </div>
            <div className="resume-meta">
              {job.org} · {job.location}
            </div>
            <ul className="resume-points">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h4 className="resume-heading mono">Education</h4>
        {EDUCATION.map((ed) => (
          <div className="resume-item" key={ed.school}>
            <div className="resume-item-head">
              <span className="resume-role">{ed.school}</span>
              <span className="resume-dates">{ed.dates}</span>
            </div>
            <div className="resume-meta">
              {ed.detail} · {ed.location}
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h4 className="resume-heading mono">Skills</h4>
        <div className="skills">
          {SKILLS.map((s) => (
            <div className="skill-row" key={s.label}>
              <span className="skill-label">{s.label}</span>
              <span className="skill-items">{s.items}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
