import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const projectName = formData.get('projectName') as string;
    const description = formData.get('description') as string;
    const squareMeters = formData.get('squareMeters') as string;
    const lodLevel = formData.get('lodLevel') as string;
    const address = formData.get('address') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    const adminEmail = process.env.EMAIL_TO_ADMIN || 'ugur@eosproje.com';

    // Resend ile email gönder
    const { data, error } = await resend.emails.send({
      from: 'EOSPROJE <onboarding@resend.dev>',
      to: [adminEmail],
      replyTo: email,
      subject: `Yeni Teklif Talebi - ${projectName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Yeni Teklif Talebi</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #000000; padding: 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px;">
                          <span style="background-color: #ffffff; color: #000000; padding: 5px 15px; border-radius: 4px;">EOS</span>
                          <span style="color: #E31E24; margin-left: 5px;">PROJE</span>
                        </h1>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h2 style="color: #000000; margin: 0 0 20px 0; font-size: 24px; border-bottom: 3px solid #E31E24; padding-bottom: 10px;">
                          🎯 Yeni Teklif Talebi
                        </h2>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                          <tr>
                            <td style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">📋 Proje Adı:</strong>
                              <span style="color: #333333; font-size: 16px;">${projectName}</span>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding: 12px; background-color: #ffffff; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">📧 E-posta:</strong>
                              <a href="mailto:${email}" style="color: #E31E24; text-decoration: none; font-size: 16px;">${email}</a>
                            </td>
                          </tr>
                          
                          ${phone ? `
                          <tr>
                            <td style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">📱 Telefon:</strong>
                              <a href="tel:${phone}" style="color: #E31E24; text-decoration: none; font-size: 16px;">${phone}</a>
                            </td>
                          </tr>
                          ` : ''}
                          
                          <tr>
                            <td style="padding: 12px; background-color: #ffffff; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">📐 Alan:</strong>
                              <span style="color: #333333; font-size: 16px;">${squareMeters} m²</span>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">🎯 LOD Seviyesi:</strong>
                              <span style="color: #333333; font-size: 16px;">LOD ${lodLevel}</span>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding: 12px; background-color: #ffffff; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">📍 Proje Adresi:</strong>
                              <span style="color: #333333; font-size: 16px;">${address}</span>
                            </td>
                          </tr>
                          
                          ${description ? `
                          <tr>
                            <td style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #E31E24;">
                              <strong style="color: #000000; display: block; margin-bottom: 5px;">💬 Proje Detayları:</strong>
                              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 5px 0 0 0;">${description}</p>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                        
                        <!-- CTA Button -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                          <tr>
                            <td align="center">
                              <a href="mailto:${email}" style="display: inline-block; background-color: #E31E24; color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 5px; font-weight: bold; font-size: 16px;">
                                📧 Hemen Yanıtla
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #000000; padding: 20px; text-align: center;">
                        <p style="margin: 0; color: #ffffff; font-size: 14px;">
                          <a href="https://www.eosproje.com" style="color: #ffffff; text-decoration: none;">www.eosproje.com</a>
                          <span style="color: #666666; margin: 0 10px;">|</span>
                          <a href="mailto:info@eosproje.com" style="color: #ffffff; text-decoration: none;">info@eosproje.com</a>
                        </p>
                        <p style="margin: 10px 0 0 0; color: #666666; font-size: 12px;">
                          Bu e-posta otomatik olarak gönderilmiştir.
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Email gönderilemedi', error: error.message },
        { status: 500 }
      );
    }

    // Müşteriye onay emaili gönder
    await resend.emails.send({
      from: 'EOSPROJE <onboarding@resend.dev>',
      to: [email],
      subject: 'Teklif Talebiniz Alındı - EOS Proje',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <tr>
                      <td style="background-color: #000000; padding: 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px;">
                          <span style="background-color: #ffffff; color: #000000; padding: 5px 15px; border-radius: 4px;">EOS</span>
                          <span style="color: #E31E24; margin-left: 5px;">PROJE</span>
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h2 style="color: #000000; margin: 0 0 20px 0;">Merhaba,</h2>
                        <p style="color: #333333; font-size: 16px; line-height: 1.6;">
                          <strong>${projectName}</strong> projeniz için teklif talebiniz başarıyla bize ulaşmıştır.
                        </p>
                        <p style="color: #333333; font-size: 16px; line-height: 1.6;">
                          Mühendislik ekibimiz detayları inceleyerek en kısa sürede sizinle iletişime geçecektir.
                        </p>
                        <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-top: 30px;">
                          Saygılarımızla,<br><strong>EOS Proje Ekibi</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #000000; padding: 20px; text-align: center;">
                        <p style="margin: 0; color: #ffffff; font-size: 14px;">
                          <a href="https://www.eosproje.com" style="color: #ffffff; text-decoration: none;">www.eosproje.com</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email başarıyla gönderildi',
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu', error: String(error) },
      { status: 500 }
    );
  }
}
