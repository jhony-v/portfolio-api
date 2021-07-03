export interface EmailProps {
    email : string;
    subject : string;
    message : string;
    name? : string;
}

export default interface SendEmailAdapter<T_Email_Props> {
    send : (data : T_Email_Props) => Promise<boolean>
}