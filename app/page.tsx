'use client'

export default function Home() {
  return (
    <main className="container">
      <div className="content">
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="subtitle">I'm a developer passionate about creating amazing experiences</p>
        
        <div className="section">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I'm a developer who loves building 
            beautiful and functional web applications. This site showcases 
            my work and interests.
          </p>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">HTML</span>
          </div>
        </div>

        <div className="section">
          <h2>Contact</h2>
          <p>
            Feel free to reach out! You can find me on GitHub or connect 
            through other platforms.
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .content {
          max-width: 800px;
          width: 100%;
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          text-align: center;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #666;
          text-align: center;
          margin-bottom: 3rem;
        }

        .section {
          margin-bottom: 2.5rem;
        }

        .section h2 {
          font-size: 1.75rem;
          color: #333;
          margin-bottom: 1rem;
          border-bottom: 2px solid #667eea;
          padding-bottom: 0.5rem;
        }

        .section p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        .skill-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 25px;
          font-weight: 500;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .content {
            padding: 2rem;
          }
        }
      `}</style>
    </main>
  )
}

