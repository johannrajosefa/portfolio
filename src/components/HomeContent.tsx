"use client";

import {
Heading,
Text,
Button,
Avatar,
RevealFx,
Column,
Badge,
Row,
} from "@once-ui-system/core";

import { useLanguage } from "./LanguageContext";
import { home, about, person } from "@/resources";

export function HomeContent() {
const { language } = useLanguage();

const content = home[language];

const aboutLabel = language === "en" ? "About" : "À propos";

return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
    <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
        {content.featured.display && (
            <RevealFx
            fillWidth
            horizontal="center"
            paddingTop="16"
            paddingBottom="32"
            paddingLeft="12"
            >
            <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={content.featured.href}
              >
                <Row paddingY="2">
                  {content.featured.title}
                </Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {content.headline}
            </Heading>
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {content.subline}
            </Text>
          </RevealFx>

          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="center"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}

                {aboutLabel}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}