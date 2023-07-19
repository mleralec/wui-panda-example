import React from "react";
import { BoxPanda } from "@welcome-ui/box";
import { TextPanda } from "@welcome-ui/text";
import { BadgePanda } from "@welcome-ui/badge";
import { ButtonPanda, buttonStyles } from "@welcome-ui/button";

export const App: React.FC = () => {
  return (
    <BoxPanda maxW="800px" mx="auto" pt="5xl">
      <a href="/">back</a>
      <TextPanda variant="h1" textTransform="uppercase">
        Panda
      </TextPanda>
      <BoxPanda display="flex" gap="10px" my="3xl">
        <ButtonPanda variant="primary" backgroundColor="tomato">
          Primary with custom bg
        </ButtonPanda>
        <ButtonPanda variant="secondary">Secondary</ButtonPanda>
        <ButtonPanda variant="tertiary">Tertiary</ButtonPanda>
        <ButtonPanda variant="ghost">Ghost</ButtonPanda>
        <ButtonPanda disabled>Disabled</ButtonPanda>
        <ButtonPanda variant="primary-success">Primary Success</ButtonPanda>
        <ButtonPanda variant="primary-danger">Primary Danger</ButtonPanda>
      </BoxPanda>
      <BoxPanda display="flex" gap="10px" my="3xl">
        <BadgePanda>1</BadgePanda>
        <BadgePanda>99+</BadgePanda>
        <BadgePanda variant="primary">Primary</BadgePanda>
        <BadgePanda variant="primary" disabled>
          Disabled
        </BadgePanda>
      </BoxPanda>
      <BoxPanda my="3xl">
        <TextPanda lines={1}>
          1 line Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          quis viverra lectus, vel tristique turpis. Vivamus magna nulla,
          elementum in feugiat feugiat, egestas eget nibh. Ut ac justo vitae
          dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
          suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu
          consequat risus imperdiet. Phasellus at metus cursus, fringilla tortor
          eu, scelerisque quam. Donec efficitur porta elit ac malesuada.
        </TextPanda>
        <TextPanda my="0" variant="h1">
          h1
        </TextPanda>
        <TextPanda my="0" variant="h2">
          h2
        </TextPanda>
        <TextPanda my="0" variant="h3">
          h3
        </TextPanda>
        <TextPanda my="0" variant="h3">
          h4
        </TextPanda>
        <TextPanda my="0" variant="h3">
          h5
        </TextPanda>
        <TextPanda my="0" variant="h3">
          h6
        </TextPanda>
        <TextPanda my="0" variant="lg">
          lg
        </TextPanda>
        <TextPanda my="0" variant="md">
          md
        </TextPanda>
        <TextPanda my="0" variant="sm">
          sm
        </TextPanda>
        <TextPanda my="0" variant="subtitle-sm">
          subtitle-md
        </TextPanda>
        <TextPanda my="0" variant="subtitle-sm">
          subtitle-sm
        </TextPanda>
      </BoxPanda>
      <BoxPanda>
        <a
          className={buttonStyles({ variant: "secondary" })}
          href="https://www.welcome-ui.com/"
          target="_blank"
        >
          Link as Button
        </a>
      </BoxPanda>
    </BoxPanda>
  );
};
