// pages/api/send-email.js
import Mailgun from 'mailgun-js';

const mailgun = Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, budget, timeframe, projectDetails } = req.body;

    const data = {
      from: `Excited User ${email}` , // sender address
      to: 'ms_sidahmed@esi.dz', // replace with your recipient email
      subject: 'New Contact Form Green Cooling Solutions',
      text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nTimeframe: ${timeframe}\nProject Details: ${projectDetails}`,
    };

    try {
      await mailgun.messages().send(data);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
