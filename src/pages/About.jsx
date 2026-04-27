const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: 'auto', marginBottom: '4rem' }}>
        <h1 className="hero-title">Ibuki Kimpara</h1>
        <h2 className="hero-subtitle">Network Protocol Researcher &amp; Software Engineer</h2>
        <div className="glass-panel" style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <strong>「ビジネスの課題を技術で解決する実行力」</strong>を強みに、
            無線ネットワークプロトコルの研究と、クラウド技術を用いたフルスタック開発を行っています。
            現場の課題を特定し、ゼロからシステムを設計・実装することで、実業務にインパクトを与えるソリューションを創出することを得意としています。
          </p>
          <p style={{ marginTop: '1rem', opacity: 0.8 }}>
            Email: <a href="mailto:ibk.04081189@gmail.com">ibk.04081189@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <p className="timeline-date">2026.04 - 2028.03 (Expected)</p>
              <h3 className="timeline-title">慶應義塾大学大学院 理工学研究科</h3>
              <p className="timeline-subtitle">修士課程 開放環境科学専攻 (足立研究室)</p>
              <ul className="timeline-details">
                <li><strong>研究テーマ:</strong> 低消費電力広域ネットワーク（LoRa）における受信信号強度（RSSI）を用いた時刻同期手法の研究。</li>
                <li><strong>アプローチ:</strong> JuliaやPythonを用いた自作シミュレーションモデルによる通信成功率や衝突確率の理論解析。</li>
                <li><strong>活動:</strong> 2026年4月 入学、2028年3月 修了見込み。</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <p className="timeline-date">2022.04 - 2026.03</p>
              <h3 className="timeline-title">慶應義塾大学 理工学部</h3>
              <p className="timeline-subtitle">情報工学科 (学士)</p>
              <ul className="timeline-details">
                <li><strong>学修内容:</strong> 情報工学全般（アルゴリズム、OS、ネットワーク等）を修得。</li>
                <li><strong>卒業研究:</strong> 5G SSB信号を用いた高精度な時刻同期メカニズムの開発と評価に従事。</li>
                <li><strong>活動:</strong> 2022年4月 入学、2026年3月 卒業。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title">Experience</h2>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-dot" style={{ borderColor: 'var(--accent-purple)' }}></div>
            <div className="glass-panel timeline-content">
              <p className="timeline-date">2025.04 - Present</p>
              <h3 className="timeline-title">株式会社アイフラッグ</h3>
              <p className="timeline-subtitle">Software Engineer &amp; Project Manager (Intern)</p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>Challenge: スケーラブルな自社サービスのゼロからの構築</h4>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  実務において、将来的な負荷増やコスト効率まで考慮した設計・実装に挑戦。
                  特に、Webサイトの誤字脱字や必須表現をスクレイピングで自動点検するサービスの開発では、
                  「現場のニーズを如何に仕様へ落とし込むか」というプロセスを主導しました。
                </p>
                <ul className="timeline-details">
                  <li><strong>コスト最適化:</strong> AWS Lambdaを用いたサーバーレス構成と適切なAPIモデルの選定により、実装コストを大幅に抑制。</li>
                  <li><strong>UI/UX設計:</strong> 現場社員の方々とのヒアリングを重ね、複雑な自動化プロセスを直感的に操作できる機能分割・UIを実装。</li>
                  <li><strong>PM・コミュニケーション:</strong> 開発目線での実現可能性とコスト面の両立を現場に提案し、相互理解に基づいた要件定義を実施。</li>
                  <li><strong>継続性:</strong> 他部署への横展開を視野に入れた設計と、後任者へのスムーズな引継ぎのための詳細なドキュメント作成。</li>
                </ul>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', fontStyle: 'italic', opacity: 0.8 }}>
                  「技術知識を現場で活かすには、ニーズを汲み取るコミュニケーション能力と信頼関係が不可欠である」という学びを得ました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel">
            <h3 style={{ borderBottom: '2px solid var(--accent-cyan)', display: 'inline-block', marginBottom: '1.5rem' }}>Programming</h3>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Julia</span>
              <span className="tech-badge">C/C++</span>
              <span className="tech-badge">Java</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Vite</span>
            </div>
          </div>
          <div className="glass-panel">
            <h3 style={{ borderBottom: '2px solid var(--accent-purple)', display: 'inline-block', marginBottom: '1.5rem' }}>Cloud &amp; Infra</h3>
            <div className="tech-stack">
              <span className="tech-badge">AWS (Lambda, API Gateway, S3, EC2)</span>
              <span className="tech-badge">GCP (Cloud Run, BigQuery, Storage)</span>
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">Git</span>
            </div>
          </div>
          <div className="glass-panel">
            <h3 style={{ borderBottom: '2px solid var(--accent-teal)', display: 'inline-block', marginBottom: '1.5rem' }}>Management</h3>
            <div className="tech-stack">
              <span className="tech-badge">PM</span>
              <span className="tech-badge">Requirements Definition</span>
              <span className="tech-badge">Agile Development</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
