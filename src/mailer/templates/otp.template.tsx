import { Body, Head, Html, Tailwind } from "react-email";

export interface OtpEmailTemplateProps {
  code: string;
}

export default function OtpEmailTemplate({ code }: OtpEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <div className="flex h-dvh items-center justify-center">
            <p>Your one time password: ${code}</p>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
