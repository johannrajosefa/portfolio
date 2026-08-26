import {
  Column,
  Heading,
  Schema,
} from "@once-ui-system/core";

import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { WorkContent } from "@/components/work/WorkContent";

export async function generateMetadata() {
  // Use English as the default metadata.
  // The visible page content is translated client-side.
  return {
    title: work.en.title,
    description: work.en.description,
  };
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <WorkContent />

      <Projects />
    </Column>
  );
}