"use client";

import { Button } from "@once-ui-system/core";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
const { language, toggleLanguage } = useLanguage();

return (
    <Button
    variant="secondary"
    size="s"
    onClick={toggleLanguage}
    >
    {language === "en" ? "FR" : "EN"}
    </Button>
);
}