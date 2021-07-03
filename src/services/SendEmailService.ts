import SendEmailAdapter, { EmailProps } from "../adapters/SendEmailAdapter";
import { AUTHORIZATION_USER, PORTFOLIO_API_KEY } from "../config/envs";
import sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(PORTFOLIO_API_KEY);

interface SendEmailTemplateProps extends EmailProps {
  html: string;
}

export default class SendEmailService implements SendEmailAdapter<SendEmailTemplateProps> {

  async send(emailProps: SendEmailTemplateProps): Promise<any> {
    const { email, subject, html } = emailProps;
    try {
      await sendGrid.send({
        to: AUTHORIZATION_USER,
        from: email,
        subject,
        html,
      });
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
