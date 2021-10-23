import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { wrap } from 'jest-runtime/node_modules/@types/yargs';
import { connect } from 'react-redux';
import axios from 'axios';




const renderItem = ({item}) => (
<Text style={{marginVertical:8}}>{item}</Text>
);

// const Item = ({item}) => (
//     <View>
//         <Text>{item.categories}</Text>
//     </View>
// );

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        // backgroundColor:"blue",
    }
})



class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            categories:''
        }
    }

    componentDidMount() {
        axios.get("https://v2.jokeapi.dev/categories")
          .then(res => {
            const categories = res.data.categories;
            // console.log(categories.categories[0]);
            this.setState({ categories });
            console.log(this.state.categories)
          })
      }

    

    render(){
    return(
    <View style={styles.container}>
        <Text>Home</Text>
        {/* <ScrollView> */}
            <FlatList
                data={this.state.categories}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                // numColumns={5}
            />
        {/* </ScrollView> */}
    </View>
    );
    }
}
    
function mapStateToProps(state){
    return{
        DATA: state.categories
    }
}

export default connect(mapStateToProps)(Home);