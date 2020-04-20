//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import axios from 'axios';

// create a component
class Jawabaratscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positifjawabarat: '',
            sembuhjawabarat: '',
            provinsijawabarat: '',
            meninggaljawabarat: '',
        };
    }

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/indonesia/provinsi')
            .then((response) => {
                console.log(response.data[1].attributes.Provinsi);
                this.setState({
                    provinsijawabarat: response.data[1].attributes.Provinsi,
                    sembuhjawabarat: response.data[1].attributes.Kasus_Semb,
                    positifjawabarat: response.data[1].attributes.Kasus_Posi,
                    meninggaljawabarat: response.data[1].attributes.Kasus_Meni,
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
                <Image style={{ width: '63%', height: '45%', alignSelf: 'center', marginTop: '5%' }} source={require('../image/jawabarat.png')} />
                <View style={{ borderColor: 'blue', borderWidth: 3, margin: 30, borderRadius: 50 }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 50 }}>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Provinsi : '+this.state.provinsijawabarat}</Text>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Positif : '+this.state.positifjawabarat}</Text>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Sembuh : '+this.state.sembuhjawabarat}</Text>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'Meninggal : '+this.state.meninggaljawabarat}</Text>
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
export default Jawabaratscreen;
