// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

const HomeStack = createNativeStackNavigator();



const initialState ={
categories:[]
}

const reducer = (state = initialState) =>{
  return state
}

const store = createStore(reducer)

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
        categories:''
    }
}
  // initialState = {
  //   categories : this.state.categories
  // }

  // reducer= (state = initialState) => {
  //   return state
  // }

  // store = createStore(reducer)

  componentDidMount() {
    axios.get("https://v2.jokeapi.dev/categories")
      .then(res => {
        const categories = res.data.categories;
        // console.log(categories);
        this.setState({ categories });
        // console.log(this.state.categories)
      })
  }


render(){
  return(
<Provider store={store}>
    <NavigationContainer>
      <HomeStack.Navigator>
            <HomeStack.Screen 
            name="Home" 
            component={Home}/>    
      </HomeStack.Navigator>
    </NavigationContainer>
 </Provider>
  )
}
}