import * as React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  name,
  email,
  budget,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Budget:</strong> {budget}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);
