import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, meetingType, message } = body;

    if (!name || !email || !meetingType) {
      return NextResponse.json({ error: 'Obligatoriska fält saknas' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL;
    if (!toEmail || !process.env.RESEND_API_KEY) {
      console.error('Resend not configured: missing RESEND_API_KEY or CONTACT_EMAIL');
      return NextResponse.json({ success: true, message: 'Bokning mottagen' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Blomsnes Advisory <noreply@blomsnes-site.vercel.app>',
      to: toEmail,
      replyTo: email,
      subject: `Ny bokningsförfrågan från ${name}`,
      text: `Namn: ${name}\nEmail: ${email}\nMötestyp: ${meetingType}${message ? `\n\nMeddelande:\n${message}` : ''}`,
      html: `<p><strong>Namn:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Mötestyp:</strong> ${meetingType}</p>${message ? `<hr/><p><strong>Meddelande:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>` : ''}`,
    });

    return NextResponse.json({ success: true, message: 'Bokning mottagen' });
  } catch {
    return NextResponse.json({ error: 'Serverfel' }, { status: 500 });
  }
}
