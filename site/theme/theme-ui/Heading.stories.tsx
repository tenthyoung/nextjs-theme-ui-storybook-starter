import React from "react";
import { Box, Heading } from "theme-ui";
import { Stack } from "../../components/Stack";

export default {
  title: "theme/Heading",
  parameters: {
    component: Heading,
    componentSubtitle: "Heading component from Theme UI",
  },
};

export const usage = () => <Heading>Heading</Heading>;

export const headings = () => (
  <Stack direction="vertical">
    <Heading as="h1" variant="h1">
      Heading 1
    </Heading>
    <Heading as="h2" variant="h2">
      Heading 2
    </Heading>
    <Heading as="h3" variant="h3">
      Heading 3
    </Heading>
    <Heading as="h4" variant="h4">
      Heading 4
    </Heading>
    <Heading as="h5" variant="h5">
      Heading 5
    </Heading>
    <Heading as="h6" variant="h6">
      Heading 6
    </Heading>
  </Stack>
);
