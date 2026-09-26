'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AudioWaveform,
  ChevronDown,
  History,
  Mic,
  Plus,
  Settings2,
  Sparkles,
  Square,
  Volume2,
  X,
} from 'lucide-react'

function JasperMark({ size = 56 }: { size?: number }) {
  const blobPath = 'M99.5 -0.65C99.5 2.6 99.34 5.87 99.01 9.1C98.69 12.34 98.21 15.57 97.57 18.76C96.94 21.95 96.14 25.12 95.19 28.24C94.24 31.35 93.13 34.43 91.88 37.43C90.63 40.43 89.23 43.39 87.69 46.26C86.15 49.13 84.46 51.93 82.64 54.64C80.83 57.34 78.87 59.97 76.8 62.48C74.72 64.99 72.52 67.42 70.21 69.72C67.9 72.01 65.46 74.21 62.94 76.27C60.41 78.34 57.77 80.28 55.05 82.09C52.34 83.9 49.52 85.58 46.64 87.11C43.75 88.64 40.78 90.04 37.76 91.29C34.75 92.53 31.65 93.63 28.52 94.58C25.4 95.52 22.21 96.32 19.01 96.95C15.8 97.58 12.55 98.06 9.3 98.38C6.05 98.7 2.76 98.86 -0.5 98.86C-3.77 98.86 -7.05 98.7 -10.31 98.38C-13.56 98.06 -16.81 97.58 -20.01 96.95C-23.22 96.32 -26.41 95.52 -29.53 94.58C-32.66 93.63 -35.75 92.53 -38.77 91.29C-41.79 90.04 -44.76 88.64 -47.64 87.11C-50.52 85.58 -53.34 83.9 -56.06 82.09C-58.78 80.28 -61.42 78.34 -63.94 76.27C-66.47 74.21 -68.9 72.01 -71.21 69.72C-73.52 67.42 -75.73 64.99 -77.8 62.48C-79.88 59.97 -81.84 57.34 -83.65 54.64C-85.47 51.93 -87.16 49.13 -88.7 46.26C-90.24 43.39 -91.64 40.43 -92.89 37.43C-94.14 34.43 -95.25 31.35 -96.2 28.24C-97.15 25.12 -97.94 21.95 -98.58 18.76C-99.22 15.57 -99.7 12.34 -100.02 9.1C-100.34 5.87 -100.5 2.6 -100.5 -0.65C-100.5 -3.9 -100.34 -7.17 -100.02 -10.41C-99.7 -13.64 -99.22 -16.88 -98.58 -20.07C-97.94 -23.25 -97.15 -26.43 -96.2 -29.54C-95.25 -32.65 -94.14 -35.73 -92.89 -38.73C-91.64 -41.74 -90.24 -44.69 -88.7 -47.56C-87.16 -50.43 -85.47 -53.23 -83.65 -55.94C-81.84 -58.64 -79.88 -61.27 -77.8 -63.78C-75.73 -66.3 -73.52 -68.72 -71.21 -71.02C-68.9 -73.32 -66.47 -75.51 -63.94 -77.58C-61.42 -79.64 -58.78 -81.59 -56.06 -83.39C-53.34 -85.2 -50.52 -86.88 -47.64 -88.41C-44.76 -89.95 -41.79 -91.35 -38.77 -92.59C-35.75 -93.83 -32.66 -94.94 -29.53 -95.88C-26.41 -96.82 -23.22 -97.62 -20.01 -98.25C-16.81 -98.89 -13.56 -99.37 -10.31 -99.69C-7.05 -100 -3.77 -100.17 -0.5 -100.17C2.76 -100.17 6.05 -100 9.3 -99.69C12.55 -99.37 15.8 -98.89 19.01 -98.25C22.21 -97.62 25.4 -96.82 28.52 -95.88C31.65 -94.94 34.75 -93.83 37.76 -92.59C40.78 -91.35 43.75 -89.95 46.64 -88.41C49.52 -86.88 52.34 -85.2 55.05 -83.39C57.77 -81.59 60.41 -79.64 62.94 -77.58C65.46 -75.51 67.9 -73.32 70.21 -71.02C72.52 -68.72 74.72 -66.3 76.8 -63.78C78.87 -61.27 80.83 -58.64 82.64 -55.94C84.46 -53.23 86.15 -50.43 87.69 -47.56C89.23 -44.69 90.63 -41.74 91.88 -38.73C93.13 -35.73 94.24 -32.65 95.19 -29.54C96.14 -26.43 96.94 -23.25 97.57 -20.07C98.21 -16.88 98.69 -13.64 99.01 -10.41C99.34 -7.17 99.5 -3.9 99.5 -0.65Z'
  return (
    <svg width={size} height={size} viewBox="-125 -125 250 250" role="img" aria-label="Jasp maskotu">
      <defs>
        <mask id="jasper-mask" maskUnits="userSpaceOnUse" x="-158" y="-158" width="316" height="316">
          <path d={blobPath} fill="#fff" />
          <path d="M-22.5 -1A22.5 22.5 0 0 1 0 -23.5L0 -23.5A22.5 22.5 0 0 1 22.5 -1L22.5 1A22.5 22.5 0 0 1 0 23.5L0 23.5A22.5 22.5 0 0 1 -22.5 1Z" transform="matrix(0.93,0,0.02,1,-37.23,3.8)" fill="#000" />
          <path d="M-22.5 -1A22.5 22.5 0 0 1 0 -23.5L0 -23.5A22.5 22.5 0 0 1 22.5 -1L22.5 1A22.5 22.5 0 0 1 0 23.5L0 23.5A22.5 22.5 0 0 1 -22.5 1Z" transform="matrix(0.96,-0.03,0.02,1,27.8,2.67)" fill="#000" />
        </mask>
      </defs>
      <path d={blobPath} fill="#f9f9f9" />
      <g mask="url(#jasper-mask)"><rect x="-158" y="-158" width="316" height="316" fill="#0a0a0c" /></g>
    </svg>
  )
}

export default function Page() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isQuestion, setIsQuestion] = useState(false)
  const [questionAnswer, setQuestionAnswer] = useState('')
  const [isAnswering, setIsAnswering] = useState(false)
  const recognitionRef = useRef<{ start: () => void; stop: () => void; onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null; onend: (() => void) | null } | null>(null)

  useEffect(() => {
    return () => recognitionRef.current?.stop()
  }, [])

  function toggleListening() {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }

    const browserWindow = window as typeof window & { SpeechRecognition?: new () => any; webkitSpeechRecognition?: new () => any }
    const SpeechRecognition = browserWindow.SpeechRecognition || browserWindow.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setTranscript('Tarayıcın canlı altyazıyı desteklemiyor.')
      setIsListening(true)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'tr-TR'
    recognition.continuous = true
    recognition.interimResults = true
    recognition.onresult = (event: any) => {
      const text = Array.from(event.results as ArrayLike<ArrayLike<{ transcript: string }>>).map((result) => result[0].transcript).join('')
      setTranscript(text)
      setIsQuestion(/[?؟]$/.test(text.trim()) || /^(ne|nasıl|neden|niçin|kim|hangi|kaç|sence|biliyor musun|mısın|misin|mu|mı|mi)\b/i.test(text.trim()))
    }
    recognition.onend = () => setIsListening(false)
    recognitionRef.current = recognition
    recognition.start()
    setTranscript('Seni dinliyorum...')
    setIsListening(true)
  }

  function stopListening() {
    recognitionRef.current?.stop()
    setIsListening(false)
  }

  function submitAnswer() {
    if (!questionAnswer.trim()) return
    setIsAnswering(true)
    setIsQuestion(false)
    setQuestionAnswer('')
    window.setTimeout(() => setIsAnswering(false), 1800)
  }

  return (
    <main className="jasper-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-dot"><AudioWaveform aria-hidden="true" /></span><span>jasper</span></div>
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
        <header className="topbar"><div className="mobile-brand"><span className="brand-dot"><AudioWaveform aria-hidden="true" /></span>jasper</div><button className="icon-button" aria-label="Ayarlar"><Settings2 /></button></header>
        <div className="conversation-body">
  <div className={`voice-stage ${isListening ? 'is-listening' : ''}`}>
  <div className="audio-symbol" aria-hidden="true"><AudioWaveform /></div>
  <div className="subtitle" aria-live="polite">
  <span className="subtitle-label">CANLI ALTYAZI</span>
  <span>{transcript || 'Konuşmaya başlamak için mikrofona dokun'}</span>
  </div>
  </div>
  <div className="voice-controls">
  <button className={`voice-button ${isListening ? 'active' : ''}`} onClick={isListening ? stopListening : toggleListening} aria-label={isListening ? 'Konuşmayı durdur' : 'Konuşmaya başla'}>
  {isListening ? <Square fill="currentColor" /> : <Mic />}
  </button>
  <span>{isListening ? 'Konuşmayı durdur' : 'Konuşmaya başla'}</span>
  </div>
  {isAnswering && <div className="sent-note"><span>Jasper</span> Yanıtını hazırlıyor...</div>}
  {isQuestion && <div className="question-modal-backdrop" role="presentation">
  <section className="question-modal" role="dialog" aria-modal="true" aria-labelledby="question-title">
  <button className="modal-close" onClick={() => setIsQuestion(false)} aria-label="Soruyu kapat"><X /></button>
  <span className="modal-kicker">JASPER SORUYU ALGILADI</span>
  <h2 id="question-title">Buna nasıl cevap vermemi istersin?</h2>
  <p>Sesli yanıt verebilirim veya cevabını buraya yazabilirsin.</p>
  <textarea value={questionAnswer} onChange={(event) => setQuestionAnswer(event.target.value)} placeholder="Cevabını yaz..." aria-label="Sorunun cevabı" autoFocus />
  <button className="modal-submit" onClick={submitAnswer}>Cevabı gönder</button>
  </section>
  </div>}
  </div>
        <footer className="footer"><span>© 2024 Jasper AI</span><a href="#privacy">Gizlilik</a><a href="#terms">Kullanım koşulları</a></footer>
      </section>
    </main>
  )
}

export { X }
