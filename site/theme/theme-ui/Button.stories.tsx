import React from "react";
import { Button, Box } from "theme-ui";
import { Stack } from "../../components/Stack";

export default {
  title: "theme/Button",
  parameters: {
    component: Button,
    componentSubtitle: "Button component from Theme UI",
  },
};

export const usage = () => <Button>Click Me</Button>;

export const variants = () => (
  <Stack direction="horizontal" space={8}>
    <Box>
      <Box>Primary</Box>
      <Button variant="primary">Click Me</Button>
    </Box>
    <Box>
      <Box>Secondary</Box>
      <Button variant="secondary">Click Me</Button>
    </Box>
    <Box>
      <Box>Secondary Outline</Box>
      <Button variant="secondary-outline">Click Me</Button>
    </Box>
    <Box>
      <Box>Ghost</Box>
      <Button variant="ghost">Click Me</Button>
    </Box>
    <Box sx={{ height: "100%" }}>
      <Box>Link</Box>
      <Button variant="link">Click Me</Button>
    </Box>
  </Stack>
);

export const disabled = () => (
  <Stack direction="horizontal" space={8}>
    <Box>
      <Box>Primary</Box>
      <Button variant="primary" disabled>
        Click Me
      </Button>
    </Box>
    <Box>
      <Box>Secondary</Box>
      <Button variant="secondary" disabled>
        Click Me
      </Button>
    </Box>
    <Box>
      <Box>Secondary Outline</Box>
      <Button variant="secondary-outline" disabled>
        Click Me
      </Button>
    </Box>
    <Box>
      <Box>Ghost</Box>
      <Button variant="ghost" disabled>
        Click Me
      </Button>
    </Box>
  </Stack>
);
