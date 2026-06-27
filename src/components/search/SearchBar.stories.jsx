import { fn } from 'storybook/test';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    placeholder: 'Search for a text string',
    onSearch: fn(),
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text with no real meaning, indicating what can be entered in the input field',
    },
    onSearch: {
      action: 'search',
      description: 'Callback that is executed when the user types into the input field',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to customise the selector’s styler',
    },
  },
};

export const SearchBarDefault = {
  args: {
    placeholder: 'Custom placeholder',
  },
};