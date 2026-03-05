/**
 * WhatsApp mesaj URL'i oluşturur
 * @param phone - WhatsApp telefon numarası (örn: 905306642263)
 * @param formData - Form verileri
 * @returns WhatsApp URL
 */
export function createWhatsAppURL(
  phone: string,
  formData: {
    projectName: string;
    email: string;
    phone?: string;
    description?: string;
    squareMeters?: string;
    lodLevel?: string;
    address?: string;
  },
  isEn: boolean = false
): string {
  // Mesaj içeriğini oluştur
  const messageLines = isEn ? [
    `Hello EOSPROJE team! 👋`,
    ``,
    `*Quote Request Details:*`,
    ``,
    `📋 *Project Name:* ${formData.projectName}`,
    `📧 *Email:* ${formData.email}`,
  ] : [
    `Merhaba EOSPROJE ekibi! 👋`,
    ``,
    `*Teklif Talebi Bilgileri:*`,
    ``,
    `📋 *Proje Adı:* ${formData.projectName}`,
    `📧 *E-posta:* ${formData.email}`,
  ];

  if (formData.phone) {
    messageLines.push(`📱 *${isEn ? 'Phone' : 'Telefon'}:* ${formData.phone}`);
  }

  if (formData.squareMeters) {
    messageLines.push(`📐 *${isEn ? 'Area' : 'Alan'}:* ${formData.squareMeters} m²`);
  }

  if (formData.lodLevel) {
    messageLines.push(`🎯 *LOD:* ${formData.lodLevel}`);
  }

  if (formData.address) {
    messageLines.push(`📍 *${isEn ? 'Address' : 'Adres'}:* ${formData.address}`);
  }

  if (formData.description) {
    messageLines.push(``);
    messageLines.push(`💬 *${isEn ? 'Details' : 'Detaylar'}:*`);
    messageLines.push(formData.description.substring(0, 200) + (formData.description.length > 200 ? '...' : ''));
  }

  messageLines.push(``);
  messageLines.push(isEn 
    ? `_This message was sent from www.eosproje.com website._`
    : `_Bu mesaj www.eosproje.com web sitesinden gönderilmiştir._`);

  // Mesajı birleştir ve encode et
  const message = messageLines.join('\n');
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp URL'i oluştur
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * WhatsApp'ı yeni sekmede aç
 * @param url - WhatsApp URL
 */
export function openWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
