import React from "react";

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vona",
          url: "https://www.vona.agency", // Update with your actual domain
          logo: "https://www.vona.agency/logo.png", // Update with your actual logo path
          description:
            "Vona is a leading creative agency in Riyadh specializing in branding, web design, and web development.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Riyadh",
            addressCountry: "Saudi Arabia",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
          },
          sameAs: [
            // Add your social media links here
          ],
          services: [
            {
              "@type": "Service",
              name: "Branding",
              description:
                "Brand strategy, identity design, marketing & content, corporate design",
            },
            {
              "@type": "Service",
              name: "Web Design",
              description: "Landing pages and multi-page websites",
            },
            {
              "@type": "Service",
              name: "Web Development",
              description: "Framer, Webflow and Next.js development",
            },
          ],
        }),
      }}
    />
  );
}
