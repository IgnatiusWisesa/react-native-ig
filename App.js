/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/component/Header'
import Albumlist from './src/component/AlbumList'

const App=()=>{
  return(
    <>
      <View style={{flex:5}}>
        <Header headerText={'Albums'} />
        <Albumlist />
      </View>
    </>
  )
}

export default App;
