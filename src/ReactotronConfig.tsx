import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

const reactotron = Reactotron.configure({
  name: 'Sneaker City',
})
  .use(reactotronRedux())
  .use(sagaPlugin({except: ['']}))
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate|logs/,
    },
  })
  .connect();

console.tron = reactotron.log!;

export default reactotron;
