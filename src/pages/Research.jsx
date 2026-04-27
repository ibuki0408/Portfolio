const Research = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="hero-title">Research</h1>
      <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
        低消費電力広域ネットワーク（LoRa）における通信効率の向上と時刻同期の最適化に関する研究を行っています。
      </p>

      <section className="glass-panel" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--accent-cyan)' }}>RSSI-based Synchronization in LoRa</h2>
        <p>
          LoRaWANは低消費電力で広域な通信が可能ですが、端末数が増えるとパケット衝突が深刻な課題となります。
          私の研究では、外部信号の受信信号強度（RSSI）を活用した新しい時刻同期手法を開発し、各端末の送信タイミングを「スロット」に整列させることで衝突を回避する手法を提案しています。
        </p>
        <div style={{ margin: '2rem 0', padding: '2rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ opacity: 0.6 }}>[ 受信電力プロファイル または シミュレーション結果のグラフをここに参照 ]</p>
        </div>
        <h3>主な取り組みと成果</h3>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', listStyleType: 'square' }}>
          <li><strong>理論解析:</strong> ポアソン過程に基づいたパケット衝突確率の理論解析（PPPモデル）の構築。</li>
          <li><strong>シミュレータ自作:</strong> JuliaやPythonを用い、数千台規模の端末を想定した高精度ネットワークシミュレータをゼロから開発。</li>
          <li><strong>アルゴリズム提案:</strong> 低消費電力環境下でも高精度な同期を実現するアルゴリズムを提案し、LBT（キャリアセンス）やキャプチャ効果を含めた評価を実施。</li>
        </ul>
      </section>

      {/* Publications Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title">Publications &amp; Presentations</h2>
        <div className="glass-panel">
          <ul className="timeline-details" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold', display: 'block', fontSize: '0.9rem' }}>国内学会</span>
              <p style={{ marginTop: '0.25rem' }}>金原 伊吹, 赤須 賢司, 安達 宏一, "広帯域信号を利用した Out-of-band 同期によるスロット化 LoRaWAN," 電子情報通信学会 2026年総合大会, 2026年3月.</p>
            </li>
            {/* 今後の実績追加用プレースホルダー */}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">Why it matters?</h2>
        <p>
          高密度なスマートシティやスマート農業において、数万台のデバイスが安定して通信できるインフラを構築することは、
          将来のIoT社会を支える不可欠な技術要素となります。研究成果は、通信リソースの効率的な利用と、IoTデバイスの長寿命化に直接的に貢献します。
        </p>
      </section>
    </div>
  );
};

export default Research;
