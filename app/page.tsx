'use client'

import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BatteryCharging,
  Cable,
  ChevronDown,
  CircleHelp,
  Gauge,
  LayoutDashboard,
  Pause,
  Play,
  Power,
  RotateCcw,
  Settings2,
  SlidersHorizontal,
  TerminalSquare,
  Wifi,
  X,
  Zap,
} from 'lucide-react'

const telemetry = [
  { label: 'Motor sıcaklığı', value: '42.8', unit: '°C', state: 'Normal', tone: 'green' },
  { label: 'Batarya', value: '78', unit: '%', state: 'İyi', tone: 'green' },
  { label: 'Hız', value: '0.42', unit: 'm/s', state: 'Aktif', tone: 'amber' },
  { label: 'Çalışma süresi', value: '02:14:38', unit: '', state: 'Bugün', tone: 'muted' },
]

const logs = [
  ['14:32:08', 'Motor kontrol döngüsü başlatıldı', 'info'],
  ['14:31:54', 'Seri bağlantı kuruldu · COM4', 'success'],
  ['14:31:52', 'Jasper Rover v1.2 algılandı', 'success'],
  ['14:30:11', 'Manuel kontrol modu etkin', 'warning'],
]

export default function Page() {
  const [connected, setConnected] = useState(true)
  const [running, setRunning] = useState(true)
  const [activeNav, setActiveNav] = useState('Kontrol paneli')
  const [speed, setSpeed] = useState(42)
  const [showSettings, setShowSettings] = useState(false)

  function toggleConnection() {
    setConnected((value) => !value)
    if (!connected) setRunning(false)
  }

  return (
    <main className="robot-shell">
      <aside className="robot-sidebar">
        <div className="robot-brand">
          <span className="robot-brand-mark"><Zap size={18} fill="currentColor" /></span>
          <span>jasper<span className="brand-suffix"> robotics</span></span>
        </div>
        <div className="workspace-switcher">
          <span className="workspace-icon">JR</span>
          <span><strong>Jasper Rover</strong><small>Robot workspace</small></span>
          <ChevronDown size={15} />
        </div>
        <nav className="robot-nav" aria-label="Robot menüsü">
          {[['Kontrol paneli', LayoutDashboard], ['Canlı telemetri', Activity], ['Seri terminal', TerminalSquare], ['Görevler', SlidersHorizontal]].map(([label, Icon]) => (
            <button key={label as string} className={`robot-nav-item ${activeNav === label ? 'active' : ''}`} onClick={() => setActiveNav(label as string)}>
              <Icon size={17} /><span>{label as string}</span>{label === 'Canlı telemetri' && <i className="nav-live-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-caption">SİSTEM</div>
        <nav className="robot-nav">
          <button className="robot-nav-item" onClick={() => setShowSettings(true)}><Settings2 size={17} /><span>Ayarlar</span></button>
          <button className="robot-nav-item"><CircleHelp size={17} /><span>Dokümantasyon</span></button>
        </nav>
        <div className="sidebar-footer">
          <div className="connection-mini"><span className={`status-dot ${connected ? 'online' : ''}`} /><span><strong>{connected ? 'Robot bağlı' : 'Bağlantı kesildi'}</strong><small>{connected ? 'COM4 · 115200 baud' : 'Seri port bekleniyor'}</small></span></div>
          <div className="user-row"><span className="avatar">D</span><span><strong>Deniz</strong><small>Operatör</small></span><MoreDots /></div>
        </div>
      </aside>

      <section className="robot-content">
        <header className="robot-header">
          <div><p className="eyebrow">ROBOT OPERATING SYSTEM / 01</p><h1>{activeNav}</h1></div>
          <div className="header-actions">
            <div className={`header-connection ${connected ? 'connected' : ''}`}><span className="status-dot" /><span>{connected ? 'Bağlı' : 'Bağlantı yok'}</span><small>COM4</small></div>
            <button className="outline-button" onClick={toggleConnection}>{connected ? <><Cable size={15} /> Bağlantıyı kes</> : <><Wifi size={15} /> Bağlan</>}</button>
            <button className="square-button" aria-label="Ayarlar" onClick={() => setShowSettings(true)}><Settings2 size={17} /></button>
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="hero-panel panel">
            <div className="panel-heading"><div><p className="eyebrow">CANLI DURUM</p><h2>Jasper Rover <span className="version-pill">V1.2.4</span></h2></div><span className="running-badge"><span className="pulse-dot" />{running ? 'ÇALIŞIYOR' : 'BEKLEMEDE'}</span></div>
            <div className="robot-stage"><div className="radar-ring ring-one" /><div className="radar-ring ring-two" /><div className="rover-illustration"><div className="rover-sensor" /><div className="rover-body"><div className="rover-screen">J</div><div className="rover-line" /></div><div className="rover-wheel left" /><div className="rover-wheel right" /></div><div className="stage-label"><span className="coord-dot" /> Pozisyon sabit <b>+41.0082, 28.9784</b></div></div>
            <div className="hero-controls"><button className={`primary-control ${running ? 'pause' : ''}`} onClick={() => setRunning(!running)}>{running ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}{running ? 'Durdur' : 'Başlat'}</button><button className="ghost-control" onClick={() => setRunning(false)}><RotateCcw size={16} /> Reset</button><button className="emergency-control"><Power size={16} /> Acil durdurma</button></div>
          </section>

          <section className="telemetry-panel panel"><div className="panel-heading"><div><p className="eyebrow">SİSTEM İZLEME</p><h2>Telemetri</h2></div><button className="panel-icon-button"><Activity size={16} /></button></div><div className="telemetry-list">{telemetry.map((item) => <div className="telemetry-row" key={item.label}><div className={`telemetry-icon ${item.tone}`}><TelemetryIcon label={item.label} /></div><span className="telemetry-label">{item.label}</span><strong>{item.value}<small>{item.unit}</small></strong><span className={`telemetry-state ${item.tone}`}>{item.state}</span></div>)}</div><div className="mini-chart"><div className="chart-meta"><span>Motor yükü</span><strong>38.4%</strong><small> son 60 dk</small></div><div className="chart-bars">{[35,42,36,55,47,61,52,68,58,72,64,77,59,65,48,54,43,38].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div></section>

          <section className="manual-panel panel"><div className="panel-heading"><div><p className="eyebrow">MANUEL KONTROL</p><h2>Hareket komutları</h2></div><Gauge size={18} className="muted-icon" /></div><div className="d-pad"><button aria-label="İleri"><ArrowUp size={20} /></button><div><button aria-label="Sola dön"><ArrowDown size={20} className="turn-left" /></button><button aria-label="Geri"><ArrowDown size={20} /></button><button aria-label="Sağa dön"><ArrowDown size={20} className="turn-right" /></button></div></div><div className="speed-control"><div><span>Hız limiti</span><b>{speed}%</b></div><input type="range" min="0" max="100" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} /></div><p className="control-hint"><span>SHIFT</span> basılı tutarak hassas kontrolü etkinleştir</p></section>

          <section className="terminal-panel panel"><div className="panel-heading"><div><p className="eyebrow">SERİ PORT / COM4</p><h2>Terminal günlüğü</h2></div><button className="panel-icon-button"><TerminalSquare size={16} /></button></div><div className="terminal-window">{logs.map(([time, message, type]) => <div className="log-line" key={time + message}><span>{time}</span><i className={type} /> <b>{message}</b></div>)}<div className="terminal-cursor"><span>›</span> Sistem hazır. Komut bekleniyor<span className="cursor-blink">_</span></div></div><button className="view-terminal">Tam terminali aç <ArrowUp size={14} className="rotate-45" /></button></section>
        </div>
        <footer className="robot-footer"><span><span className="status-dot online" /> Tüm sistemler normal</span><span>Son senkronizasyon 14:32:08</span><span>Jasper OS 0.8.1</span></footer>
      </section>
      {showSettings && <div className="modal-backdrop" onClick={() => setShowSettings(false)}><section className="settings-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowSettings(false)}><X size={17} /></button><p className="eyebrow">ROBOT AYARLARI</p><h2>Bağlantı yapılandırması</h2><label>Seri port<select defaultValue="COM4"><option>COM4 · Jasper Rover</option><option>COM3 · Arduino</option><option>/dev/ttyUSB0</option></select></label><label>Baud rate<select defaultValue="115200"><option>115200</option><option>9600</option><option>57600</option></select></label><button className="primary-control save-button" onClick={() => setShowSettings(false)}>Ayarları kaydet</button></section></div>}
    </main>
  )
}

function MoreDots() { return <span className="more-dots">•••</span> }
function TelemetryIcon({ label }: { label: string }) { if (label === 'Batarya') return <BatteryCharging size={16} />; if (label === 'Motor sıcaklığı') return <Zap size={16} />; if (label === 'Hız') return <Gauge size={16} />; return <Activity size={16} /> }

export { X }
