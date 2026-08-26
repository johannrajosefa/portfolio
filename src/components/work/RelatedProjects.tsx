"use client";

import { Heading } from "@once-ui-system/core";
import { useLanguage } from "@/components/LanguageContext";

export function RelatedProjectsTitle() {
  const { language } = useLanguage();

  return (
    <Heading
      as="h2"
      variant="heading-strong-xl"
      marginBottom="24"
    >
      {language === "fr"
        ? "Projets similaires"
        : "Related projects"}
    </Heading>
  );
}