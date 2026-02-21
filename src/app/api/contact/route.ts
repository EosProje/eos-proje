import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const projectName = formData.get("projectName") as string;
        const description = formData.get("description") as string;
        const squareMeters = formData.get("squareMeters") as string;
        const lodLevel = formData.get("lodLevel") as string;
        const address = formData.get("address") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        const files = formData.getAll("files") as File[];

        // SMTP Settings
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const adminEmail = process.env.EMAIL_TO_ADMIN || "ugur@eosproje.com";

        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error("SMTP settings are missing in .env.local");
            return NextResponse.json(
                { success: false, error: "Email server not configured" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Prepare attachments
        const attachments = await Promise.all(
            files.map(async (file) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                return {
                    filename: file.name,
                    content: buffer,
                };
            })
        );

        // 1. Admin Email
        const adminMailOptions = {
            from: `"EOS Proje Web Form" <${smtpUser}>`,
            to: adminEmail,
            subject: `Yeni Teklif Talebi: ${projectName}`,
            html: `
                <h2>Yeni Teklif Talebi Detayları</h2>
                <p><strong>Proje Adı:</strong> ${projectName}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Adres:</strong> ${address}</p>
                <p><strong>Alan (m²):</strong> ${squareMeters}</p>
                <p><strong>LOD Seviyesi:</strong> ${lodLevel}</p>
                <p><strong>Açıklama:</strong></p>
                <p>${description}</p>
                <br>
                <p><em>Bu talep web sitesindeki iletişim formundan gönderilmiştir.</em></p>
            `,
            attachments,
            replyTo: email
        };

        // 2. Customer Confirmation Email
        const customerMailOptions = {
            from: `"EOS Proje" <${smtpUser}>`,
            to: email,
            subject: "Teklif Talebiniz Alındı - EOS Proje",
            html: `
                <h2>Merhaba,</h2>
                <p><strong>${projectName}</strong> projeniz için teklif talebiniz başarıyla bize ulaşmıştır.</p>
                <p>Mühendislik ekibimiz detayları inceleyerek en kısa sürede sizinle iletişime geçecektir.</p>
                <br>
                <p>Saygılarımızla,<br><strong>EOS Proje Ekibi</strong></p>
            `,
        };

        // Send mails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
