"use client";

import { Column } from "@once-ui-system/core";
import { useLanguage } from "@/components/LanguageContext";

interface LanguageAwareProjectContentProps {
  englishContent: React.ReactNode;
  frenchContent: React.ReactNode;
}

export function LanguageAwareProjectContent({
  englishContent,
  frenchContent,
}: LanguageAwareProjectContentProps) {
  const { language } = useLanguage();

  return (
    <>
      <Column
        style={{
          display: language === "en" ? "block" : "none",
          width: "100%",
        }}
      >
        {englishContent}
      </Column>

      <Column
        style={{
          display: language === "fr" ? "block" : "none",
          width: "100%",
        }}
      >
        {frenchContent}
      </Column>
    </>
  );
}