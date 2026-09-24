'use client'

import { useState } from 'react'
import {
  ArrowUp,
  ChevronDown,
  History,
  Mic,
  Paperclip,
  Plus,
  Settings2,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react'

function JasperMark({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Jasp maskotu">
      <path
        d="M50 3c25 0 44 13 47 34 4 28-10 52-35 58-24 6-51-4-59-27C-6 44 8 14 32 6c6-2 12-3 18-3Z"
        fill="currentColor"
      />
      <ellipse cx="34" cy="49" rx="10" ry="18" fill="white" transform="rotate(-4 34 49)" />
      <ellipse cx="66" cy="49" rx="10" ry="18" fill="white" transform="rotate(4 66 49)" />
      <circle cx="34" cy="49" r="4" fill="currentColor" />
      <circle cx="66" cy="49" r="4" fill="currentColor" />
    </svg>
  )
}

export default function Page() {
  const [isListening, setIsListening] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function sendMessage() {
    if (!message.trim()) return
    setSent(true)
    setMessage('')
    window.setTimeout(() => setSent(false), 2800)
  }

  return (
    <main className="jasper-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-dot"><JasperMark size={28} /></span><span>jasper</span></div>
        <button className="new-chat" onClick={() => setSent(false)}><Plus data-icon="inline-start" /> Yeni konuşma</button>
        <nav className="side-nav" aria-label="Ana menü">
          <a className="nav-item active" href="#chat"><Sparkles data-icon="inline-start" /> Konuşma</a>
          <a className="nav-item" href="#history"><History data-icon="inline-start" /> Geçmiş</a>
        </nav>
        <div className="recent-label">SON KONUŞMALAR</div>
        <div className="recent-list">
          <button className="recent">Bugün için planım</button>
          <button className="recent">Odaklanmama yardım et</button>
          <button className="recent">Bir hikaye anlat</button>
        </div>
        <div className="sidebar-bottom">
          <button className="profile"><span className="profile-avatar">D</span><span><strong>Deniz</strong><small>Ücretsiz plan</small></span><ChevronDown /></button>
        </div>
      </aside>

      <section className="conversation" id="chat">
        <header className="topbar"><div className="mobile-brand"><span className="brand-dot"><JasperMark size={24} /></span>jasper</div><button className="icon-button" aria-label="Ayarlar"><Settings2 /></button></header>
        <div className="conversation-body">
          <div className="welcome">
            <div className="hero-mark"><JasperMark size={108} /></div>
            <p className="eyebrow">JASP İLE TANIŞ</p>
            <h1>Bugün sana nasıl<br /><em>yardım edebilirim?</em></h1>
            <p className="subhead">Konuş, düşüncelerini paylaş veya sadece burada ol.<br />Jasp seni dinliyor.</p>
          </div>
          <div className="suggestions" aria-label="Öneriler">
            <button onClick={() => setMessage('Bugünümü planlamama yardım et')}><span>☼</span><b>Günümü planla</b><small>Verimli bir gün için</small></button>
            <button onClick={() => setMessage('Şu an odaklanmama yardım et')}><span>◌</span><b>Odaklanmama yardım et</b><small>Birlikte derin nefes alalım</small></button>
            <button onClick={() => setMessage('Bana ilham ver')}><span>✦</span><b>İlham ver</b><small>Yeni bir bakış açısı</small></button>
          </div>
          {sent && <div className="sent-note"><span>Sen</span> Mesajın alındı. Jasp birazdan yanıt verecek.</div>}
          <div className="composer-wrap">
            <div className={`composer ${isListening ? 'listening' : ''}`}>
              <button className="attach" aria-label="Dosya ekle"><Paperclip /></button>
              <input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) sendMessage() }} placeholder={isListening ? 'Seni dinliyorum...' : 'Jasp’a bir şey söyle...'} aria-label="Jasp’a mesaj yaz" />
              <button className="mic" onClick={() => setIsListening(!isListening)} aria-label={isListening ? 'Dinlemeyi durdur' : 'Konuşmaya başla'}><Mic /></button>
              <button className="send" onClick={sendMessage} aria-label="Gönder"><ArrowUp /></button>
            </div>
            <div className="composer-meta"><span><Volume2 /> Sesli konuşma için mikrofona dokun</span><span>Jasp bazen hata yapabilir</span></div>
          </div>
        </div>
        <footer className="footer"><span>© 2024 Jasper AI</span><a href="#privacy">Gizlilik</a><a href="#terms">Kullanım koşulları</a></footer>
      </section>
    </main>
  )
}

export { X }
