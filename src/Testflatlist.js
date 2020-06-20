//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

// create a component
class Testflatlist extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }

    }

    componentDidMount() {
        // return fetch('https://api.kawalcorona.com/indonesia/provinsi/')
        //   .then((response) => response.json())
        //   .then((responseJson) => {

        //     console.log(responseJson)
        //     this.setState({
        //       isLoading: false,
        //       dataSource: responseJson.movies,
        //     }, function(){

        //     });

        //   })
        //   .catch((error) =>{
        //     console.error(error);
        //   });


        // axios.get('https://reactnative.dev/movies.json')
        axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
            .then((response) => {

                console.log(response.data)

                this.setState({
                    dataSource: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }


    render() {
        return (
            <View>
                <Text>Testflatlist</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <View>
                        <Text>{item.attributes.Provinsi}</Text>
                        <Text>{item.attributes.Kasus_Meni}</Text>
                    </View>}

                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Testflatlist;
