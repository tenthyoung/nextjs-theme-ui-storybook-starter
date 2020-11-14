import React from "react";
import { Link, Heading } from "theme-ui";
import { Stack } from "../../components/Stack";

export default {
  title: "theme/Link",
  parameters: {
    component: Link,
    componentSubtitle: "Link component from Theme UI",
  },
};

export const usage = () => <Link href="https://google.com">Click Me</Link>;

export const variants = () => (
  <Stack direction="vertical">
    <Link href="https://google.com">Click Me</Link>

    <Heading as="h2" variant="h2">
      <Link variant="heading" href="https://google.com">
        Click Me
      </Link>
    </Heading>
  </Stack>
);
