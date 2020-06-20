//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Button } from 'react-native';
import axios from 'axios';
// create a component
class Cobabitcoin extends Component {


    constructor(props) {
        super(props);
        this.state = {
            hargabitcoin: 0,
            hargarupiah: 0,
            buttonexchange:0,
        };
    }



    componentDidMount() {
        axios.get('https://indodax.com/api/btc_idr/ticker')
            .then((response) => {
                console.log(response.data.ticker.buy)
                this.setState({
                    hargabitcoin: response.data.ticker.buy
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }


    showdata(){
        if(this.state.buttonexchange === 1){
            return <Text>abc</Text>
        }
       
    }
    


    render() {
        return (
            <View >
                <Text>Cobabitcoin</Text>

                <Button
                title='Ubah'
                onPress={()=>this.setState({buttonexchange:1})}
                />

        <View>{this.showdata()}</View>

                <TextInput style={{ borderColor: 'black', borderWidth: 2 }}
                    value={this.state.hargarupiah}
                    onChangeText={(hargarupiah) => this.setState({ hargarupiah })}
                />
                <Text>{this.state.hargarupiah / parseInt(this.state.hargabitcoin)}</Text>
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
export default Cobabitcoin;
