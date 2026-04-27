import { useState } from 'react';

const PROJECTS = [
  {
    id: 'openclaw',
    title: 'Openclaw Automation',
    category: 'Application',
    shortDesc: 'AIエージェントCLIを活用した、Web情報収集・Discord通知の自動化ワークフロー。',
    detail: `AIエージェントCLI「Openclaw」を活用し、実用的な自動化スクリプト群を構築しました。
    
    【実装内容】
    ・チケット監視: eplus等のサイトをAIが定期的に確認し、更新があれば要約してDiscordへ通知。
    ・日次レポート: 毎日のニュースや天気を収集・要約して毎朝自動配信。
    
    【技術的工夫】
    ・APIコスト削減のための差分検知ロジックやレート制限への配慮。
    ・AWS Lambda等を用いたサーバーレス運用を想定した設計。`,
    tech: ['Shell Script', 'Node.js', 'AI Agent (Gemini)', 'Discord API']
  },
  {
    id: 'future',
    title: 'Coming Soon...',
    category: 'Application',
    shortDesc: '新しいアプリケーションを開発中。devディレクトリ下の成果物を順次追加予定。',
    detail: '現在、新しいプロジェクトを計画・実装中です。完成次第、ここに追加されます。',
    tech: ['React', 'AWS', 'and more...']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="animate-fade-in">
      <h1 className="hero-title">Projects</h1>
      <div className="grid-container">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="glass-panel project-card"
            onClick={() => openModal(project)}
            style={{ cursor: 'pointer' }}
          >
            <span className="category-tag">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
            <div className="tech-stack">
              {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <span className="category-tag">{selectedProject.category}</span>
            <h2 style={{ marginTop: '0.5rem' }}>{selectedProject.title}</h2>
            <div className="modal-body">
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                {selectedProject.detail}
              </pre>
            </div>
            <div className="tech-stack" style={{ marginTop: '2rem' }}>
              {selectedProject.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
