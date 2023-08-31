import React from "react";
import { LinkPanda } from "@welcome-ui/link";
import { TextPanda } from "@welcome-ui/text";
import { BadgePanda } from "@welcome-ui/badge";
import { ButtonPanda } from "@welcome-ui/button";
import { AccordionPanda, useAccordion } from "@welcome-ui/accordion";
import { RightIconPanda } from "@welcome-ui/icons";
import { styled } from "@welcome-ui/panda/jsx";
import { button } from "@welcome-ui/panda/recipes";

const ButtonLink = styled("a", button);

export const App: React.FC = () => {
  const accordion = useAccordion();

  return (
    <styled.div maxW="800px" mx="auto" py="5xl">
      <a href="/">back</a>
      <TextPanda variant="h1" textTransform="uppercase">
        Panda
      </TextPanda>
      <ButtonLink variant="primary" shape="circle">
        Test
      </ButtonLink>
      <styled.div>
        <styled.div>Hello World</styled.div>
        <styled.div textStyle="h1">Box with textStyle="h1"</styled.div>
        <styled.div textStyle="subtitle-md">
          Box with textStyle="subtitle-md"
        </styled.div>
      </styled.div>
      <styled.div display="flex" gap="xl" my="xxl">
        <LinkPanda variant="primary">Link Primary</LinkPanda>
        <LinkPanda variant="secondary">Link Secondary</LinkPanda>
      </styled.div>
      <AccordionPanda
        icon={<RightIconPanda />}
        title="Accordion"
        store={accordion}
        backgroundColor="primary-500"
      >
        Content
      </AccordionPanda>
      <styled.div display="flex" gap="10px" my="3xl">
        <ButtonPanda variant="primary" backgroundColor="tomato">
          Primary with custom bg
        </ButtonPanda>
        <ButtonPanda variant="secondary">Secondary</ButtonPanda>
        <ButtonPanda variant="tertiary">Tertiary</ButtonPanda>
        <ButtonPanda variant="ghost">Ghost</ButtonPanda>
        <ButtonPanda disabled>Disabled</ButtonPanda>
        <ButtonPanda variant="primary-success">Primary Success</ButtonPanda>
        <ButtonPanda variant="primary-danger">Primary Danger</ButtonPanda>
      </styled.div>
      <styled.div display="flex" gap="10px" my="3xl">
        <BadgePanda>1</BadgePanda>
        <BadgePanda>99+</BadgePanda>
        <BadgePanda variant="primary">Primary</BadgePanda>
        <BadgePanda variant="primary" disabled>
          Disabled
        </BadgePanda>
      </styled.div>
      <styled.div my="3xl">
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
        <TextPanda my="0" variant="subtitle-md">
          subtitle-md
        </TextPanda>
        <TextPanda my="0" variant="subtitle-sm">
          subtitle-sm
        </TextPanda>
      </styled.div>
      <styled.div>
        <ButtonLink
          href="https://www.welcome-ui.com/"
          target="_blank"
          variant="primary-info"
        >
          Link as Button
        </ButtonLink>
      </styled.div>
    </styled.div>
  );
};
