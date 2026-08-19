"use client";

import { Heading } from "@once-ui-system/core";
import { work } from "@/resources";
import { useLanguage } from "@/components/LanguageContext";

export function WorkContent() {
  const { language } = useLanguage();

  const content = work[language];

  return (
    <Heading
      marginBottom="l"
      variant="heading-strong-xl"
      align="center"
    >
      {content.title}
    </Heading>
  );
}