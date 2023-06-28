import React from "react";
import { Box, BoxPanda } from "@welcome-ui/box";
import { Badge, BadgePanda } from "@welcome-ui/badge";

export const App: React.FC = () => {
  return (
    <main>
      <div>
        <Box
          alignItems="center"
          backgroundColor="primary-500"
          color="dark-900"
          display="flex"
          h="50px"
          justifyContent="center"
          mt="3xl"
        >
          Box
        </Box>
        <BoxPanda
          alignItems="center"
          backgroundColor="primary-500"
          color="dark-900"
          display="flex"
          h="50px"
          justifyContent="center"
          mt="3xl"
        >
          BoxPanda
        </BoxPanda>
      </div>
      <BoxPanda mt="50px" display="flex" alignItems="center" gap="sm" px="md">
        <Badge size="sm">Badge</Badge>
        <BadgePanda size="sm">BadgePanda</BadgePanda>
        <Badge variant="primary" size="md">
          Badge
        </Badge>
        <BadgePanda variant="primary" size="md">
          BadgePanda
        </BadgePanda>
        <Badge disabled variant="primary" size="md">
          Badge
        </Badge>
        <BadgePanda disabled variant="primary" size="md">
          BadgePanda
        </BadgePanda>
      </BoxPanda>
    </main>
  );
};
