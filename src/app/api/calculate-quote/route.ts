import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
// caseStudies import gerekmeyebilir artÃ„Â±k ama proje detaylarÃ„Â± olarak yine de koyabiliriz veya kaldÃ„Â±rabiliriz.
// Ã…Âimdilik karmaÃ…Å¸ayÃ„Â± ÃƒÂ¶nlemek iÃƒÂ§in basit tutuyorum.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { area, lodLevel, hasLaserScanning, sector, email, name, phone, company, calculation, selectedExtras, isUrgent, locale } = body;

    // SMTP Settings from Environment Variables
    // EÃ„Å¸er bu deÃ„Å¸iÃ…Å¸kenler yoksa mail gÃƒÂ¶nderimi baÃ…Å¸arÃ„Â±sÃ„Â±z olur, ama frontend'de hata gÃƒÂ¶stermemeliyiz (Ã…Å¸imdilik)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Helper function for currency formatting
    const formatCurrency = (amount: number) => {
      return amount.toLocaleString(locale === 'en' ? 'en-US' : 'tr-TR', { style: 'currency', currency: 'TRY' });
    };

    // --- 1. ADMIN MAIL CONTENT (Detailed with Price) ---
    const adminMailSubject = `Yeni Teklif Talebi: ${company} - ${name}`;
    const adminMailContent = `
            <h2>Yeni Web Sitesi Teklif Talebi</h2>
            <p><strong>Tarih:</strong> ${new Date().toLocaleString()}</p>
            
            <h3>MÃƒÂ¼Ã…Å¸teri Bilgileri</h3>
            <ul>
                <li><strong>Ad Soyad:</strong> ${name}</li>
                <li><strong>Ã…Âirket:</strong> ${company}</li>
                <li><strong>E-posta:</strong> ${email}</li>
                <li><strong>Telefon:</strong> ${phone}</li>
            </ul>

            <h3>Proje DetaylarÃ„Â±</h3>
            <ul>
                <li><strong>Alan:</strong> ${area} mÃ‚Â²</li>
                <li><strong>SektÃƒÂ¶r:</strong> ${sector}</li>
                <li><strong>LOD Seviyesi:</strong> ${lodLevel}</li>
                <li><strong>Lazer Tarama:</strong> ${hasLaserScanning ? "Evet" : "HayÃ„Â±r"}</li>
                <li><strong>Ek Hizmetler:</strong> ${selectedExtras && selectedExtras.length > 0 ? selectedExtras.join(", ") : "Yok"}</li>
                <li><strong>Acil Teslimat:</strong> ${isUrgent ? "Evet (+30%)" : "HayÃ„Â±r"}</li>
            </ul>

            <div style="background-color: #f8f9fa; padding: 15px; border: 1px solid #e9ecef; border-radius: 5px;">
                <h3 style="color: #c0392b; margin-top: 0;">HESAPLANAN TAHMÃ„Â°NÃ„Â° TUTAR</h3>
                <ul>
                    <li><strong>Saha Ãƒâ€¡alÃ„Â±Ã…Å¸masÃ„Â±:</strong> ${formatCurrency(calculation?.fieldWorkCost || 0)}</li>
                    <li><strong>Modelleme:</strong> ${formatCurrency(calculation?.modelingCost || 0)}</li>
                    <li><strong>Ek Hizmetler:</strong> ${formatCurrency(calculation?.additionalServices || 0)}</li>
                    <li><strong>Ara Toplam:</strong> ${formatCurrency(calculation?.subtotal || 0)}</li>
                    <li><strong>KDV (%20):</strong> ${formatCurrency(calculation?.vat || 0)}</li>
                    <li><strong>GENEL TOPLAM:</strong> <span style="font-size: 1.2em; font-weight: bold;">${formatCurrency(calculation?.total || 0)}</span></li>
                </ul>
                <p style="font-size: 12px; color: #7f8c8d;">* Bu tutar mÃƒÂ¼Ã…Å¸teriye gÃƒÂ¶sterilmemiÃ…Å¸tir.</p>
            </div>
        `;

    // --- 2. CUSTOMER MAIL CONTENT (No Price, Confirmation) ---
    const customerMailSubject = locale === 'en' ? "Quote Request Received - EOS Proje" : "Teklif Talebiniz AlÃ„Â±ndÃ„Â± - EOS Proje";
    const customerMailContent = locale === 'en' ? `
            <h2>Thank you for your request, ${name}</h2>
            <p>We have received your quote request for the <strong>${company}</strong> project.</p>
            <p>Our engineering team will review your project details and prepare a formal proposal. We will contact you shortly via email or phone.</p>
            <br>
            <h3>Submitted Details:</h3>
            <ul>
                <li><strong>Project Area:</strong> ${area} mÃ‚Â²</li>
                <li><strong>Service:</strong> Scan to BIM (LOD ${lodLevel})</li>
            </ul>
            <br>
            <p>Best regards,<br><strong>EOS Proje Team</strong></p>
        ` : `
            <h2>Talebiniz AlÃ„Â±nmÃ„Â±Ã…Å¸tÃ„Â±r SayÃ„Â±n ${name}</h2>
            <p><strong>${company}</strong> projeniz iÃƒÂ§in teklif talebiniz bize ulaÃ…Å¸mÃ„Â±Ã…Å¸tÃ„Â±r.</p>
            <p>MÃƒÂ¼hendislik ekibimiz proje detaylarÃ„Â±nÃ„Â± inceleyerek en kÃ„Â±sa sÃƒÂ¼rede sizinle iletiÃ…Å¸ime geÃƒÂ§ecek ve resmi fiyat teklifini sunacaktÃ„Â±r.</p>
            <br>
            <h3>Ã„Â°letilen Detaylar:</h3>
            <ul>
                <li><strong>Proje AlanÃ„Â±:</strong> ${area} mÃ‚Â²</li>
                <li><strong>Hizmet:</strong> Lazer Tarama ve BIM Modelleme (LOD ${lodLevel})</li>
            </ul>
            <br>
            <p>SaygÃ„Â±larÃ„Â±mÃ„Â±zla,<br><strong>EOS Proje Ekibi</strong></p>
        `;

    // Send Mails if SMTP is configured
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Send to Admin
      await transporter.sendMail({
        from: `"EOS Proje Web Form" <${smtpUser}>`,
        to: process.env.EMAIL_TO_ADMIN || "ugur@eosproje.com", // Fallback to hardcoded if env missing
        subject: adminMailSubject,
        html: adminMailContent,
        replyTo: email
      });

      // 2. Send to Customer
      await transporter.sendMail({
        from: `"EOS Proje" <${smtpUser}>`,
        to: email, // HEDEF MUSTERI MAILI
        subject: customerMailSubject,
        html: customerMailContent,
      });

      console.log("Mails sent successfully to Admin and Customer.");
    } else {
      console.warn("SMTP settings are missing. Mails were NOT sent.");
      console.log("--- SIMULATED ADMIN MAIL ---");
      console.log(adminMailContent);
      console.log("---------------------------");
    }

    return NextResponse.json({
      success: true,
      message: locale === 'en' ? "Request received successfully." : "Talebiniz baÃ…Å¸arÃ„Â±yla alÃ„Â±ndÃ„Â±.",
    });

  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
