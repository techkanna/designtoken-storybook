// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Color from './color.component';

export default {
  title: 'Components/Color',
  component: Color,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Color> = (args: Color) => ({
  component: Color,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const SecondaryOne = Template.bind({});
SecondaryOne.args = {
  color: 'secondary-1'
};

export const SecondaryTwo = Template.bind({});
SecondaryTwo.args = {
  color: 'secondary-2'
};

export const ExtraOne = Template.bind({});
ExtraOne.args = {
  color: 'extra-1'
};

export const ExtraTwo = Template.bind({});
ExtraTwo.args = {
  color: 'extra-2'
};

export const ExtraThree = Template.bind({});
ExtraThree.args = {
  color: 'extra-3'
};
