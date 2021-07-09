import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSaga from './sagas';
import rootReducer from './reducers';
import Reactotron from '../ReactotronConfig';

const logger = createLogger();

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

let composed = compose(applyMiddleware(logger, sagaMiddleware));

if (process.env.NODE_ENV !== 'test') {
  composed = compose(applyMiddleware(logger, sagaMiddleware), Reactotron.createEnhancer());
}

const store = createStore(rootReducer, composed);

export class StoreService {
  static _store;

  static setStore(newStore) {
    this._store = newStore;
  }

  static connectStore(Component) {
    return props => (
      <Provider store={this._store}>
        <Component {...props} />
      </Provider>
    );
  }

  static connect(mapStateToProps, mapDispatchToProps, mergeProps = undefined) {
    return Component =>
      this.connectStore(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component));
  }
}

sagaMiddleware.run(rootSaga);
StoreService.setStore(store);
