import { Column } from "@once-ui-system/core";
import { CustomMDX } from "@/components";

interface ProjectContentProps {
  content: string;
}

export function ProjectContent({ content }: ProjectContentProps) {
  return (
    <Column
      style={{ margin: "auto" }}
      as="article"
      maxWidth="xs"
    >
      <CustomMDX source={content} />
    </Column>
  );
}