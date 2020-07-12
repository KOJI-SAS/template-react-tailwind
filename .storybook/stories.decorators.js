import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withStorySource } from "@storybook/addon-storysource";

addDecorator(withA11y);
addDecorator(withKnobs);

const Padding = storyFn => <div className="bg-gray-100 p-4">{storyFn()}</div>;
addDecorator(Padding);
