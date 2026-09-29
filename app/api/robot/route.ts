import { generateText } from 'ai'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { message, telemetry } = await request.json()

  if (typeof message !== 'string' || message.trim().length === 0) {
    return NextResponse.json({ error: 'Komut gerekli' }, { status: 400 })
  }

  const result = await generateText({
    model: 'google/gemini-2.5-flash',
    system: `Sen Jasper Rover robotunun güvenli Türkçe AI operatörüsün. Kısa ve uygulanabilir yanıt ver. Tehlikeli veya belirsiz fiziksel hareketlerde kullanıcıdan onay iste. Mevcut telemetri: ${JSON.stringify(telemetry ?? {})}`,
    prompt: message,
  })

  return NextResponse.json({ text: result.text })
}
