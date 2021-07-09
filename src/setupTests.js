import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';

configure({adapter: new Adapter()});

// eslint-disable-next-line
jest.mock('react-native-snap-carousel', () => jest.fn());
// eslint-disable-next-line
jest.mock('native-base', () => jest.fn());
// eslint-disable-next-line
jest.mock('react-native-picker-select', () => jest.fn());
