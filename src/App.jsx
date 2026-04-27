import './App.css';

function App() {
  return (
    <div className="container app animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Ibuki Kimpara</h1>
        <h2 className="hero-subtitle">
          Network Protocol Researcher &amp; Software Engineer
        </h2>
        <p>
          IoTネットワークの最適化から、AIを活用した日常業務の自動化まで。
          数理モデルに基づいたシステム設計と、モダンな技術を用いた開発を行っています。
        </p>
      </section>

      {/* Research Section */}
      <section>
        <h2 className="section-title">Research</h2>
        <div className="glass-panel project-card">
          <h3>Slotted-LoRaWAN Network Simulation</h3>
          <p>
            広域・低消費電力なIoT向けネットワークプロトコルであるLoRaWANにおいて、
            パケット衝突を削減するための通信同期手法を研究しています。<br /><br />
            5Gなどの外部同期信号を用いたスロット化通信（Slotted ALOHA）の性能を、
            ポアソン過程を用いた数理モデルと大規模並列シミュレータによって評価し、
            高密度なIoT環境下での通信信頼性の向上を目指しています。
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Julia</span>
            <span className="tech-badge">Network Simulation</span>
            <span className="tech-badge">Mathematical Modeling</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="section-title">Applications</h2>
        <div className="grid-container">
          
          {/* Openclaw Project */}
          <div className="glass-panel project-card">
            <h3>Openclaw Automation</h3>
            <p>
              AIエージェントCLI（Openclaw）を活用した自動化システム。
              Webからの情報収集（チケット監視など）や日次のニュース・天気レポートをAIに要約させ、
              Discordへ自動通知する実践的なワークフローを構築しました。
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Shell Script</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">AI Agent</span>
              <span className="tech-badge">API Integration</span>
            </div>
          </div>

          {/* Placeholder for future apps */}
          <div className="glass-panel project-card coming-soon-card">
            <i>🚀</i>
            <h3>Coming Soon</h3>
            <p>
              新しいアプリケーションを開発中...<br />
              (devディレクトリ下のプロジェクトがここに追加されます)
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
        <p>&copy; {new Date().getFullYear()} Ibuki Kimpara. Built with React &amp; Vite.</p>
      </footer>
    </div>
  );
}

export default App;
