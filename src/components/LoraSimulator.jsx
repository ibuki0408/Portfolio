import { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';

const LoraSimulator = () => {
  // State for parameters
  const [numNodes, setNumNodes] = useState(500);
  const [txInterval, setTxInterval] = useState(600); // 10 minutes default
  const [sf, setSf] = useState(7); // Spreading Factor (7-12)

  // Calculate Time on Air (approximate for 20-byte payload, BW 125kHz, CR 4/5)
  const getToA = (sfVal) => {
    const toaMap = {
      7: 0.041,
      8: 0.072,
      9: 0.144,
      10: 0.246,
      11: 0.492,
      12: 0.983
    };
    return toaMap[sfVal] || 0.041;
  };

  const timeOnAir = getToA(sf);

  // Calculate current theoretical PDR
  const calculatePDR = (nodes, interval, toa) => {
    const offeredLoad = (nodes * toa) / interval;
    const pureAloha = Math.exp(-2 * offeredLoad);
    const slottedAloha = Math.exp(-offeredLoad);
    return {
      pure: (pureAloha * 100).toFixed(2),
      slotted: (slottedAloha * 100).toFixed(2)
    };
  };

  const currentPDR = calculatePDR(numNodes, txInterval, timeOnAir);

  // Generate data for graph (Varying Number of Nodes)
  const graphData = useMemo(() => {
    const data = [];
    const maxNodes = 2000;
    for (let i = 10; i <= maxNodes; i += 100) {
      const g = (i * timeOnAir) / txInterval;
      data.push({
        nodes: i,
        PureALOHA: (Math.exp(-2 * g) * 100).toFixed(2),
        SlottedALOHA: (Math.exp(-g) * 100).toFixed(2),
      });
    }
    return data;
  }, [txInterval, timeOnAir]);

  // Tooltip formatter to show %
  const tooltipFormatter = (value) => [`${value}%`];

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
      <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.5rem' }}>
        LoRaWAN PDR Theoretical Simulator
      </h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
        {/* Controls */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>端末数 (Number of Nodes)</span>
              <span style={{ fontWeight: 'bold', color: 'var(--accent-cyan)' }}>{numNodes} 台</span>
            </label>
            <input 
              type="range" 
              min="10" max="2000" step="10" 
              value={numNodes} 
              onChange={(e) => setNumNodes(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cyan)' }}
            />
          </div>
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>送信間隔 (Tx Interval)</span>
              <span style={{ fontWeight: 'bold', color: 'var(--accent-purple)' }}>{txInterval} 秒</span>
            </label>
            <input 
              type="range" 
              min="10" max="3600" step="10" 
              value={txInterval} 
              onChange={(e) => setTxInterval(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-purple)' }}
            />
          </div>
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Spreading Factor (SF)</span>
              <span style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>SF{sf} <span style={{fontSize: '0.8em', fontWeight: 'normal'}}>(ToA: {timeOnAir}s)</span></span>
            </label>
            <input 
              type="range" 
              min="7" max="12" step="1" 
              value={sf} 
              onChange={(e) => setSf(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Results */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem' }}>Pure ALOHA PDR</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
              {currentPDR.pure}%
            </div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem' }}>Slotted ALOHA PDR</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-purple)' }}>
              {currentPDR.slotted}%
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: '100%', height: '400px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData} margin={{ top: 20, right: 30, left: -20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis 
              dataKey="nodes" 
              stroke="rgba(255,255,255,0.5)" 
              label={{ value: 'Number of Terminals', position: 'insideBottom', offset: -10, fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)" 
              domain={[0, 100]}
              tickFormatter={(val) => `${val}%`}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
              formatter={tooltipFormatter}
              labelStyle={{ color: '#aaa', marginBottom: '0.5rem' }}
              labelFormatter={(label) => `Terminals: ${label}`}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <ReferenceLine x={numNodes} stroke="var(--text-primary)" strokeDasharray="3 3" label={{ value: 'Current', position: 'insideTopLeft', fill: '#fff', fontSize: 12 }} />
            <Line type="monotone" dataKey="PureALOHA" name="Pure ALOHA" stroke="var(--accent-cyan)" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: 'var(--accent-cyan)' }} />
            <Line type="monotone" dataKey="SlottedALOHA" name="Slotted ALOHA" stroke="var(--accent-purple)" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: 'var(--accent-purple)' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', opacity: 0.8 }}>
        ※ 計算式: Pure ALOHA = exp(-2G), Slotted ALOHA = exp(-G) (トラフィック負荷 G = 端末数 × 送信時間 / 送信間隔)
      </p>
      
      {/* Explanation Section */}
      <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
        <div>
          <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
            Pure ALOHA (従来のLoRaWAN方式)
          </h4>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            各端末がデータを送信したいタイミングで自由に送信を行う方式です。制御が非常にシンプルで端末の消費電力を抑えられますが、端末数やトラフィックが増加するとパケット同士が時間的に重なり（衝突）、データが届かなくなる確率が急激に高まります。
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--accent-purple)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-purple)' }}></span>
            Slotted ALOHA (提案手法のアプローチ)
          </h4>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            時間を一定の「スロット」に区切り、各端末はスロットの開始タイミングに合わせてのみ送信を行います。端末間で時刻同期を行う必要がありますが、送信タイミングを整列させることでパケットの「部分的な重なり」を防ぎ、Pure ALOHAに比べて理論上2倍の通信効率を達成することができます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoraSimulator;
