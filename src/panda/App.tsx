import React from "react";
import { ButtonPanda } from "@welcome-ui/button";

export const App: React.FC = () => {
  return (
    <div>
      <a href="/">back</a>
      <h1>Panda</h1>
      <ButtonPanda variant="primary">Primary</ButtonPanda>
    </div>
  );
};
