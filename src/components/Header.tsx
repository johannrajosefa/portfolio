"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Fade,
  Flex,
  Line,
  Row,
  ToggleButton,
} from "@once-ui-system/core";

import {
  routes,
  display,
  person,
  about,
  blog,
  work,
  gallery,
} from "@/resources";

import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  language: "en" | "fr";
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  language,
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const locale = language === "fr" ? "fr-CA" : "en-CA";

      const timeString = new Intl.DateTimeFormat(
        locale,
        options
      ).format(now);

      setCurrentTime(timeString);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, language]);

  const label =
    language === "fr"
      ? "Heure actuelle :"
      : "My current time:";

  return (
    <>
      {label} {currentTime}
    </>
  );
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  const { language } = useLanguage();

  const navLabels = {
    en: {
      about: "About",
      projects: "Projects",
      blog: "Blog",
      gallery: "Gallery",
    },
    fr: {
      about: "À propos",
      projects: "Projets",
      blog: "Blog",
      gallery: "Galerie",
    },
  };

  const labels = navLabels[language];

  const locationLabel =
    language === "fr"
      ? "Canada / Est"
      : "Canada / Eastern";

  return (
    <>
      <Fade
        s={{ hide: true }}
        fillWidth
        position="fixed"
        height="80"
        zIndex={9}
      />

      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />

      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        {/* LEFT SIDE — LOCATION */}
        <Row
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          {display.location && (
            <Row s={{ hide: true }}>
              {locationLabel}
            </Row>
          )}
        </Row>

        {/* CENTER — NAVIGATION */}
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {/* HOME */}
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}

              <Line
                background="neutral-alpha-medium"
                vert
                maxHeight="24"
              />

              {/* ABOUT */}
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={labels.about}
                      selected={pathname === "/about"}
                    />
                  </Row>

                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}

              {/* PROJECTS */}
              {routes["/work"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      label={labels.projects}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>

                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                </>
              )}

              {/* BLOG */}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      label={labels.blog}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>

                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}

              {/* GALLERY */}
              {routes["/gallery"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      label={labels.gallery}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>

                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                </>
              )}

              {/* LANGUAGE TOGGLE */}
              {display.themeSwitcher && (
                <>
                  <Line
                    background="neutral-alpha-medium"
                    vert
                    maxHeight="24"
                  />

                  <LanguageToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>

        {/* RIGHT SIDE — CURRENT TIME */}
        <Flex
          fillWidth
          horizontal="end"
          vertical="center"
        >
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && (
                <TimeDisplay
                  timeZone="America/Toronto"
                  language={language}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};