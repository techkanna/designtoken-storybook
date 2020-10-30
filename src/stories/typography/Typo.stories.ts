// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Typos from './typo.component';

export default {
  title: 'Components/Typography',
  component: Typos
} as Meta;

const Template: Story<Typos> = (args: Typos) => ({
  component: Typos,
  props: args,
});

export const Typo = Template.bind({});
Typo.args = {
};

// export const SecondaryOne = Template.bind({});
// SecondaryOne.args = {
//   color: 'secondary-1'
// };

// export const SecondaryTwo = Template.bind({});
// SecondaryTwo.args = {
//   color: 'secondary-2'
// };

// export const ExtraOne = Template.bind({});
// ExtraOne.args = {
//   color: 'extra-1'
// };

// export const ExtraTwo = Template.bind({});
// ExtraTwo.args = {
//   color: 'extra-2'
// };

// export const ExtraThree = Template.bind({});
// ExtraThree.args = {
//   color: 'extra-3'
// };
