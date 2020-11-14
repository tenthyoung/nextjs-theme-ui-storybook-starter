import React from "react";
import { Box, Text } from "theme-ui";
import { Stack } from "../../components/Stack";
import { Spacer } from "../../components/Spacer";

export default {
  title: "theme/spaces",
};

export const usage = () => (
  <Box>
    <Stack direction="horizontal" align="center">
      <Box sx={{ width: "t.sm" }}>
        <Text variant="p">t.xs</Text>
      </Box>
      <Box bg="primary" sx={{ height: "t.xs", width: "t.xs" }} />
    </Stack>

    <Spacer />

    <Stack direction="horizontal" align="center">
      <Box sx={{ width: "t.sm" }}>
        <Text variant="p">t.sm</Text>
      </Box>
      <Box bg="primary" sx={{ height: "t.xs", width: "t.sm" }} />
    </Stack>

    <Spacer />

    <Stack direction="horizontal" align="center">
      <Box sx={{ width: "t.sm" }}>
        <Text variant="p">t.md</Text>
      </Box>
      <Box bg="primary" sx={{ height: "t.xs", width: "t.md" }} />
    </Stack>

    <Spacer />

    <Stack direction="horizontal" align="center">
      <Box sx={{ width: "t.sm" }}>
        <Text variant="p">t.lg</Text>
      </Box>
      <Box bg="primary" sx={{ height: "t.xs", width: "t.lg" }} />
    </Stack>

    <Spacer />

    <Stack direction="horizontal" align="center">
      <Box sx={{ width: "t.sm" }}>
        <Text variant="p">t.xl</Text>
      </Box>
      <Box bg="primary" sx={{ height: "t.xs", width: "t.xl" }} />
    </Stack>

    <Spacer />
    <Stack direction="horizontal" align="center">
      <Box sx={{ width: "t.sm" }}>
        <Text variant="p">t.2xl</Text>
      </Box>
      <Box bg="primary" sx={{ height: "t.xs", width: "t.2xl" }} />
    </Stack>
  </Box>
);
