//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import axios from 'axios';

// create a component
class Jakartascreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positifjakarta: '',
            sembuhjakarta: '',
            provinsijakarta: '',
            meninggaljakarta: '',
        };
    }

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/indonesia/provinsi')
            .then((response) => {
                console.log(response.data[5].attributes.Provinsi);
                this.setState({
                    provinsijakarta: response.data[0].attributes.Provinsi,
                    sembuhjakarta: response.data[0].attributes.Kasus_Semb,
                    positifjakarta: response.data[0].attributes.Kasus_Posi,
                    meninggaljakarta: response.data[0].attributes.Kasus_Meni,
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: '5%', color: 'green', fontWeight: 'bold' }}>API KAWAL CORONA (BY IDA BAGUS PUTRA MANUABA)</Text>
                <Image style={{ width: '63%', height: '45%', alignSelf: 'center', marginTop: '5%' }} source={require('../image/dkijakarta.png')} />
                <View style={{ borderColor: 'blue', borderWidth: 3, margin: 30, borderRadius: 50 }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 50 }}>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Provinsi : '+this.state.provinsijakarta}</Text>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Positif : '+this.state.positifjakarta}</Text>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Sembuh : '+this.state.sembuhjakarta}</Text>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Meninggal : '+this.state.meninggaljakarta}</Text>
                    </View>
                </View>
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
export default Jakartascreen;
