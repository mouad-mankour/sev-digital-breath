import { useEffect } from 'react';

export function JsonLd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://databblead.com/#organization",
          "name": "databblead",
          "url": "https://databblead.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://databblead.com/logo.png",
            "width": 400,
            "height": 400
          },
          "description": "Solutions d'intelligence artificielle pour la génération de leads B2B, scraping de données, enrichissement et vérification de contacts commerciaux.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "contact@databblead.com",
            "availableLanguage": ["French", "English"]
          },
          "sameAs": [
            "https://linkedin.com/company/databblead"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://databblead.com/#website",
          "url": "https://databblead.com",
          "name": "databblead - Intelligence Data & Génération de Leads B2B",
          "description": "Transformez vos données en leads qualifiés avec databblead. Solutions d'IA pour scraping, enrichissement et vérification de données B2B.",
          "publisher": {
            "@id": "https://databblead.com/#organization"
          },
          "inLanguage": "fr-FR",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://databblead.com/#contact-form",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Service",
          "@id": "https://databblead.com/#scraping-service",
          "name": "Service de Scraping de Données",
          "description": "Extraction intelligente de données web en temps réel avec technologie anti-détection avancée",
          "provider": {
            "@id": "https://databblead.com/#organization"
          },
          "serviceType": "Data Scraping",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de Scraping",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Extraction massive de données",
                  "description": "Collecte de millions de données structurées depuis toute source web"
                }
              }
            ]
          }
        },
        {
          "@type": "Service",
          "@id": "https://databblead.com/#enrichment-service",
          "name": "Service d'Enrichissement de Données",
          "description": "Transformation de données brutes en intelligence stratégique avec IA d'enrichissement",
          "provider": {
            "@id": "https://databblead.com/#organization"
          },
          "serviceType": "Data Enrichment",
          "areaServed": "Worldwide"
        },
        {
          "@type": "Service",
          "@id": "https://databblead.com/#verification-service",
          "name": "Service de Vérification de Données",
          "description": "Validation multi-niveau pour garantir qualité et conformité RGPD optimales",
          "provider": {
            "@id": "https://databblead.com/#organization"
          },
          "serviceType": "Data Verification",
          "areaServed": "Worldwide"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://databblead.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://databblead.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Contact",
              "item": "https://databblead.com/#contact"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Comment databblead transforme les données en leads qualifiés ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "databblead utilise l'intelligence artificielle pour scraper, enrichir et vérifier les données B2B. Notre processus multi-étapes garantit des leads qualifiés avec un ROI de +300%."
              }
            },
            {
              "@type": "Question", 
              "name": "Quels types de données peuvent être scrapés ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous extrayons des données depuis toute source web : e-commerce, réseaux sociaux, annuaires, sites d'entreprises. Plus de 10M+ pages traitées quotidiennement avec 99.9% de disponibilité."
              }
            },
            {
              "@type": "Question",
              "name": "La vérification des données est-elle conforme RGPD ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, 100% de conformité RGPD garantie. Notre audit automatique assure le respect des réglementations internationales avec traçabilité complète."
              }
            }
          ]
        }
      ]
    });
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}