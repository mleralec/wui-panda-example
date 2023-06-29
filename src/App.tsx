import React from "react";
import { Box, BoxPanda } from "@welcome-ui/box";
import { Badge, BadgePanda } from "@welcome-ui/badge";
import { Button } from "@welcome-ui/button";
import { AlertIcon } from "@welcome-ui/icons";

import { ButtonPanda } from "./components/Button";

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
      <BoxPanda
        mt="50px"
        display="flex"
        alignItems="center"
        gap="sm"
        px="md"
        flexWrap="wrap"
      >
        <Badge size="sm">Badge sm</Badge>
        <BadgePanda size="sm">BadgePanda sm</BadgePanda>
        <Badge variant="primary" size="md">
          Badge primary md
        </Badge>
        <BadgePanda variant="primary" size="md">
          BadgePanda primary md
        </BadgePanda>
        <Badge disabled variant="primary">
          Badge disabled
        </Badge>
        <BadgePanda disabled variant="primary">
          BadgePanda disabled
        </BadgePanda>
        <Badge>1</Badge>
        <BadgePanda>1</BadgePanda>
      </BoxPanda>
      <BoxPanda
        my="5xl"
        display="flex"
        alignItems="center"
        gap="sm"
        px="3xl"
        flexWrap="wrap"
      >
        <Button>Default</Button>
        <ButtonPanda>Default</ButtonPanda>
        <Button variant="primary-danger" size="sm">
          Primary Danger sm
        </Button>
        <ButtonPanda variant="primary-danger" size="sm">
          Primary Danger sm
        </ButtonPanda>
        <Button variant="tertiary">Tertiary</Button>
        <ButtonPanda variant="tertiary">Tertiary</ButtonPanda>
        <Button variant="secondary">
          <span>2</span>
          <span>items</span>
        </Button>
        <ButtonPanda variant="secondary">
          <span>2</span>
          <span>items</span>
        </ButtonPanda>
        <Button variant="tertiary" disabled>
          Disabled
        </Button>
        <ButtonPanda variant="tertiary" disabled>
          Disabled
        </ButtonPanda>
        <Button variant="secondary-success">Secondary success</Button>
        <ButtonPanda variant="secondary-success">Secondary success</ButtonPanda>
        <Button variant="primary-info" shape="circle">
          <AlertIcon />
        </Button>
        <ButtonPanda variant="primary-info" shape="circle">
          <AlertIcon />
        </ButtonPanda>
        <Button variant="primary-warning" size="lg">
          <AlertIcon />
          <span>Icon</span>
        </Button>
        <ButtonPanda variant="primary-warning" size="lg">
          <AlertIcon />
          <span>Icon</span>
        </ButtonPanda>
      </BoxPanda>
    </main>
  );
};
