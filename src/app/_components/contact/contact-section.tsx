import { Footer } from "./footer";
import { ContactMe } from "./contact-me";
import { FooterReveal } from "./footer-reveal";

export function ContactSection() {
  return <FooterReveal contact={<ContactMe />} footer={<Footer />} />;
}
