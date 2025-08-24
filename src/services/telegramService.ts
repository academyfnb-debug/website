// Telegram Bot Service for Academy F&B

const TELEGRAM_BOT_TOKEN = '7784287559:AAGdNagIcrthG5OxnEBnOrD62r7w-XzfWj0';
const TELEGRAM_GROUP_ID = '-4969082851';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

export interface RegistrationData {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  message?: string;
  formType: string;
  timestamp: string;
}

export const sendToTelegram = async (data: RegistrationData): Promise<boolean> => {
  try {
    const message = formatMessage(data);
    
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_GROUP_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
};

const formatMessage = (data: RegistrationData): string => {
  const { name, phone, email, course, message, formType, timestamp } = data;
  
  let formattedMessage = `🎓 <b>ĐĂNG KÝ MỚI - ACADEMY F&B</b>\n\n`;
  formattedMessage += `📋 <b>Loại form:</b> ${formType}\n`;
  formattedMessage += `👤 <b>Họ tên:</b> ${name}\n`;
  formattedMessage += `📞 <b>Số điện thoại:</b> ${phone}\n`;
  
  if (email) {
    formattedMessage += `📧 <b>Email:</b> ${email}\n`;
  }
  
  if (course) {
    formattedMessage += `📚 <b>Khóa học:</b> ${course}\n`;
  }
  
  if (message) {
    formattedMessage += `💬 <b>Tin nhắn:</b> ${message}\n`;
  }
  
  formattedMessage += `⏰ <b>Thời gian:</b> ${timestamp}\n\n`;
  formattedMessage += `🔔 <i>Vui lòng liên hệ khách hàng trong thời gian sớm nhất!</i>`;
  
  return formattedMessage;
};

export const showSuccessMessage = (): string => {
  return "Chuyên viên tư vấn của chúng tôi sẽ gọi điện tư vấn cho bạn ngay !";
};