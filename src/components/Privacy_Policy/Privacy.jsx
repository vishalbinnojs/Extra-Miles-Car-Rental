import React from "react";
import "./Privacy.css";
const Privacy = () => {
  return (
    <>
      <section className="privacy-section">
      <div className="container">
        <h2 className="privacy-title">Privacy Policy</h2>
        <p className="privacy-intro">
          At ExtraMiles, we are committed to protect your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          information when you use our website and services.
        </p>

        <div className="privacy-content">
          <h3>1. Information We Collect</h3>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              driver’s license details, etc.
            </li>
            <li>
              <strong>Payment Details:</strong> Credit/debit card details used
              for rental payments.
            </li>
            <li>
              <strong>Rental History:</strong> Details of past car rentals and
              preferences.
            </li>
            <li>
              <strong>Device & Log Data:</strong> IP address, browser type,
              pages visited, and time/date stamps.
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>To process and manage your car rental bookings.</li>
            <li>To contact you with confirmations or important notices.</li>
            <li>To improve user experience and website functionality.</li>
            <li>To comply with legal obligations or resolve disputes.</li>
          </ul>

          <h3>3. Data Sharing & Disclosure</h3>
          <p>
            We do not sell your personal information. We may share data with
            trusted third-party partners (e.g., payment processors, insurance
            providers) to complete transactions or meet legal requirements.
          </p>

          <h3>4. Cookies & Tracking Technologies</h3>
          <p>
            Our site uses cookies to enhance your browsing experience. You can
            manage cookie preferences through your browser settings.
          </p>

          <h3>5. Data Security</h3>
          <p>
            We implement strict measures to safeguard your information. However,
            no system is 100% secure, and we encourage caution when sharing
            sensitive data online.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            You may request access, update, or deletion of your personal data by
            contacting us at <a href="mailto:support@extramiles.com">support@extramiles.com</a>.
          </p>

          <h3>7. Updates To This Policy</h3>
          <p>
            We may update this Privacy Policy occasionally. Any changes will be
            posted on this page with a revised effective date.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@extramiles.com">support@extramiles.com</a>.
          </p>

          <p className="effective-date">
            <em>Effective Date: August 18, 2025</em>
          </p>
        </div>
      </div>
    </section>
    </>
  )
};

export default Privacy;
