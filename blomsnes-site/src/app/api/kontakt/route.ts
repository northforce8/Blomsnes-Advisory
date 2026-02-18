import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, consent } = body;

    if (!name || !email || !message || !consent) {
      return NextResponse.json({ error: 'Obligatoriska fält saknas' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL;
    if (!toEmail || !process.env.RESEND_API_KEY) {
      // Graceful degradation: return success if Resend is not configured
      console.error('Resend not configured: missing RESEND_API_KEY or CONTACT_EMAIL');
      return NextResponse.json({ success: true, message: 'Meddelande mottaget' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Blomsnes Advisory <noreply@blomsnes-site.vercel.app>',
      to: toEmail,
      replyTo: email,
      subject: `Nytt kontaktmeddelande från ${name}`,
      text: `Namn: ${name}\nEmail: ${email}\n\nMeddelande:\n${message}`,
      html: `<p><strong>Namn:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr/><p><strong>Meddelande:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return NextResponse.json({ success: true, message: 'Meddelande mottaget' });
  } catch {
    return NextResponse.json({ error: 'Serverfel' }, { status: 500 });
  }
}
