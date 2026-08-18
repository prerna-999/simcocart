import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone } from "lucide-react";

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.13 4.13 0 0 0 1.81-2.28 8.2 8.2 0 0 1-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.29 4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.18 8.18 0 0 0 22 5.92z" />
  </svg>
);

const PlayTriangleIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <polygon points="14,12 14,37.3 90,50" fill="#4CAF50" />
    <polygon points="14,37.3 14,62.7 90,50" fill="#2BB6E8" />
    <polygon points="14,62.7 14,88 90,50" fill="#F0473E" />
    <polygon points="74.8,42.4 74.8,57.6 90,50" fill="#FCC60E" />
  </svg>
);

const WalletIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path d="M16 3H6a2 2 0 0 0-2 2v2h14V5a2 2 0 0 0-2-2z" />
    <circle cx="16.5" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const PaperPlaneIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 12.5 21 3l-5.5 18-4-7.2L2 12.5z" />
  </svg>
);

const helpLinks = [
  "Accessibility Statement",
  "Your Orders",
  "Returns & Replacements",
  "Shipping Rates & Policies",
  "Refund and Returns Policy",
  "Privacy Policy",
  "Terms and Conditions",
  "Cookie Settings",
  "Help Center",
];

const earnLinks = [
  "Sell on Grogin",
  "Sell Your Services on Grogin",
  "Sell on Grogin Business",
  "Sell Your Apps on Grogin",
  "Become an Affiliate",
  "Advertise Your Products",
  "Sell-Publish with Us",
  "Become an Blowwe Vendor",
];

const aboutLinks = [
  "Careers for Grogin",
  "About Us",
  "Investor Relations",
  "Grogin Devices",
  "Customer reviews",
  "Social Responsibility",
  "Store Locations",
];

const paymentBadges = [
  { label: "Paytm", className: "badgePaytm" },
  { label: "PhonePe", className: "badgePhonepe" },
  { label: "UPI", className: "badgeUpi" },
  { label: <WalletIcon size={16} />, className: "badgeCard" },
  { label: "Cash On Delivery", className: "badgeCod" },
  { label: "MobiKwik", className: "badgeMobikwik" },
  { label: "FreeCharge", className: "badgeFreecharge" },
  { label: <PaperPlaneIcon size={15} />, className: "badgeArrow" },
];

const socialIcons = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: TwitterIcon, label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <Container fluid className="newsletterWrap px-0">
        <Row className="mx-0 align-items-start justify-content-between g-4">
          <Col xs={12} lg={6} className="newsletterText">
            <h3 className="newsletterTitle">
              Join our newsletter for £10 offs
            </h3>
            <p className="newsletterSubtitle">
              Register now to get latest updates on promotions &amp;
              coupons.Don&apos;t worry, we not spam!
            </p>
          </Col>

          <Col xs={12} lg={5}>
            <form className="newsletterForm" onSubmit={handleSubscribe}>
              <div className="inputRow">
                <div className="inputWrap">
                  <Mail className="inputIcon" size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="emailInput"
                  />
                </div>
                <button type="submit" className="sendBtn">
                  SEND
                </button>
              </div>
              <p className="consentText">
                By subscribing you agree to our{" "}
                <a href="#" className="link">
                  Terms &amp; Conditions and Privacy &amp; Cookies Policy.
                </a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>

      <div className="divider" />
      <Container fluid className="columnsWrap px-0">
        <Row className="mx-0 g-4">
          <Col xs={12} sm={6} lg={3} className="column">
            <h4 className="columnTitle">Do You Need Help ?</h4>
            <p className="helpDesc">
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda
              nynat. Pressa fåmoska.
            </p>

            <div className="contactRow">
              <span className="contactIcon">
                <Phone size={18} />
              </span>
              <div>
                <p className="contactLabel">24 X7</p>
                <p className="contactValue">1 800 300-353</p>
              </div>
            </div>

            <div className="contactRow">
              <span className="contactIcon">
                <Mail size={18} />
              </span>
              <div>
                <p className="contactLabel">Need help with your order?</p>
                <p className="contactValue">info@example.com</p>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={2} className="column">
            <h4 className="columnTitle">Make Money with Us</h4>
            <ul className="linkList">
              {earnLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="footerLink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} sm={6} lg={3} className="column">
            <h4 className="columnTitle">Let Us Help You</h4>
            <ul className="linkList">
              {helpLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="footerLink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} sm={6} lg={2} className="column">
            <h4 className="columnTitle">Get to Know Us</h4>
            <ul className="linkList">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <a href="/about" className="footerLink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} sm={6} lg={2} className="column">
            <h4 className="columnTitle">Download our app</h4>

            <div className="appRow">
              <a href="#" className="storeBadge">
                <span className="storeBadgeIconGoogle">
                  <PlayTriangleIcon size={18} />
                </span>
                <span className="storeBadgeText">
                  <span className="storeBadgeSmall">GET IT ON</span>
                  <span className="storeBadgeBig">Google Play</span>
                </span>
              </a>
              <span className="appDiscount">
                Download App Get
                <br />
                -10% Discount
              </span>
            </div>

            <div className="appRow">
              <a href="#" className="storeBadge">
                <span className="storeBadgeIconApple"></span>
                <span className="storeBadgeText">
                  <span className="storeBadgeSmall">Download on the</span>
                  <span className="storeBadgeBig">App Store</span>
                </span>
              </a>
              <span className="appDiscount">
                Download App Get
                <br />
                -20% Discount
              </span>
            </div>

            <h4 className="followTitle">Follow us on social media:</h4>
            <div className="socialRow">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="socialIcon"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <div className="divider" />
      {/* Bottom bar */}
      <Container fluid className="bottomBar px-0">
        <Row className="mx-0 w-100 align-items-center justify-content-between g-3">
          <Col xs={12} lg="auto">
            <p className="copyright">
              © Copyright 2024 | SimcoCart | All right reserved.
            </p>
          </Col>

          <Col xs={12} lg="auto">
            <div className="paymentRow">
              {paymentBadges.map((badge, idx) => (
                <span key={idx} className={`paymentBadge ${badge.className}`}>
                  {badge.label}
                </span>
              ))}
            </div>
          </Col>

          <Col xs={12} lg="auto">
            <div className="bottomLinks">
              <a href="#" className="bottomLink">
                Terms and Conditions
              </a>
              <a href="#" className="bottomLink">
                Privacy Policy
              </a>
              <a href="#" className="bottomLink">
                Returns Policy
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}