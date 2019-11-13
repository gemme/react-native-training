/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * typescript
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BookList from './src/components/BookList';
import {Provider} from 'react-redux';

import {initStore, reducer} from './src/redux-store';

const store = initStore(reducer);
class App extends Component<Props, State> {
  render() {
   return (
    <Provider store={store}>
        <BookList/>
     </Provider>
     );
  }
}


export default App;
