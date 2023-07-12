import React from "react";
import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import { Button } from "@welcome-ui/button";
import { Badge } from "@welcome-ui/badge";

export const App: React.FC = () => {
  return (
    <Box maxW="1200px" mx="auto" pt="5xl">
      <a href="/">back</a>
      <Text variant="h1" textTransform="uppercase">
        xstyled
      </Text>
      <Box display="flex" gap="10px" my="3xl">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="disabled">Disabled</Button>
        <Button variant="primary-success">Primary Success</Button>
        <Button variant="primary-danger">Primary Danger</Button>
      </Box>
      <Box display="flex" gap="10px" my="3xl">
        <Badge>1</Badge>
        <Badge>99+</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="primary" disabled>
          Disabled
        </Badge>
      </Box>
      <Box my="3xl">
        <Text variant="h1" my="0">
          h1
        </Text>
        <Text my="0" variant="h2">
          h2
        </Text>
        <Text my="0" variant="h3">
          h3
        </Text>
        <Text my="0" variant="h3">
          h4
        </Text>
        <Text my="0" variant="h3">
          h5
        </Text>
        <Text my="0" variant="h3">
          h6
        </Text>
        <Text my="0" variant="lg">
          lg
        </Text>
        <Text my="0" variant="md">
          md
        </Text>
        <Text my="0" variant="sm">
          sm
        </Text>
        <Text my="0" variant="subtitle-sm">
          subtitle-md
        </Text>
        <Text my="0" variant="subtitle-sm">
          subtitle-sm
        </Text>
      </Box>
    </Box>
  );
};
