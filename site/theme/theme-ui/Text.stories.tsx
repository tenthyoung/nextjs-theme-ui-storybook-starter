import React from "react";
import { Text, Box } from "theme-ui";
import { Stack } from "../../components/Stack";

export default {
  title: "theme/Text",
  parameters: {
    component: Text,
    componentSubtitle: "Text component from Theme UI",
  },
};

export const usage = () => <Text>Text</Text>;

export const onLightBackground = () => (
  <Box p={4}>
    <Text as="p" variant="p">
      Doggo ipsum borkf borking doggo ur givin me a spook fat boi what a nice floof, adorable doggo
      snoot lotsa pats. Sub woofer dat tungg tho waggy wags fat boi, ur givin me a spook he made
      many woofs dat tungg tho, I am bekom fat h*ck. Wrinkler long woofer many pats much ruin diet
      h*ck, fluffer shooberino long doggo. very taste wow.
    </Text>
  </Box>
);

export const onDarkBackground = () => (
  <Box p={4} bg="black">
    <Text as="p" variant="p" color="lightGray">
      Doggo ipsum borkf borking doggo ur givin me a spook fat boi what a nice floof, adorable doggo
      snoot lotsa pats. Sub woofer dat tungg tho waggy wags fat boi, ur givin me a spook he made
      many woofs dat tungg tho, I am bekom fat h*ck. Wrinkler long woofer many pats much ruin diet
      h*ck, fluffer shooberino long doggo. very taste wow.
    </Text>
  </Box>
);

export const smallOnLightBackground = () => (
  <Box p={4}>
    <Text as="p" variant="p">
      Doggo ipsum borkf borking doggo ur givin me a spook fat boi what a nice floof, adorable doggo
      snoot lotsa pats. Sub woofer dat tungg tho waggy wags fat boi, ur givin me a spook he made
      many woofs dat tungg tho, I am bekom fat h*ck.
    </Text>
    <Text as="small" variant="small">
      Wrinkler long woofer many pats much ruin diet h*ck, fluffer shooberino long doggo. very taste
      wow.
    </Text>
  </Box>
);

export const smallOnDarkBackground = () => (
  <Box p={4} bg="black">
    <Text as="p" variant="p" color="lightGray">
      Doggo ipsum borkf borking doggo ur givin me a spook fat boi what a nice floof, adorable doggo
      snoot lotsa pats. Sub woofer dat tungg tho waggy wags fat boi, ur givin me a spook he made
      many woofs dat tungg tho, I am bekom fat h*ck.
    </Text>
    <Text as="small" variant="small" color="lightGray">
      Wrinkler long woofer many pats much ruin diet h*ck, fluffer shooberino long doggo. very taste
      wow.
    </Text>
  </Box>
);

export const modifiers = () => (
  <Stack direction="vertical">
    <Text as="p" variant="p" sx={{ textTransform: "uppercase", letterSpacing: "wide" }}>
      All Caps
    </Text>
    <Text as="p" variant="p" sx={{ fontWeight: "bold" }}>
      Bold
    </Text>
    <Text as="p" variant="p" sx={{ fontStyle: "italic" }}>
      Italic
    </Text>
  </Stack>
);
