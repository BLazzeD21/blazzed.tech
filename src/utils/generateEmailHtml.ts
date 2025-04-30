import { ContactFormData } from "@/types";

import { escapeHtml } from "@/utils";

export const generateEmailHtml = (data: ContactFormData): string => {
	return `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #ffffff; background:#303a52; padding: 15px; margin: 15px; border-radius: 20px;">
      <style>
        a {
          color: inherit !important;
          text-decoration: none !important;
        }
      </style>
      <p style="color: #fc85ae; font-size: 24px;"><strong>New Message Received</strong></p>
      <p style="color: #9e579d;"><strong style="color: #ffffff;">Language:</strong> ${escapeHtml(data.lang)}</p>
      <p style="color: #9e579d;"><strong style="color: #ffffff;">Sender's name:</strong> ${escapeHtml(data.author)}</p>
      <p style="color: #9e579d;"><strong style="color: #ffffff;">Email:</strong> ${escapeHtml(data.address)}</p>
      <div style="background: #574b90; padding: 15px; border-radius: 15px; margin-top:10px; color: #ffffff;">
      <p style="color: #fc85ae; font-size: 16px;">
        <strong strong style="color: #fffff;">Message</strong>
      </p>
        <p style="letter-spacing: 1px;">${escapeHtml(data.message.trim()).replace(/\n/g, "<br>")}</p>
      </div>
      <p style="font-size: 0.8em; color: #999; margin-top:10px; margin-left:10px;">
        Sent at ${new Date().toLocaleString()}
      </p>
    </div>
  `;
};
