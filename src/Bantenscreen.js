//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';


// create a component
class Bantenscreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            positifbanten: '',
            sembuhbanten: '',
            provinsibanten: '',
            meninggalbanten: '',
        };
    }

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/indonesia/provinsi')
            .then((response) => {
                
                this.setState({
                    provinsibanten: response.data[5].attributes.Provinsi,
                    sembuhbanten: response.data[5].attributes.Kasus_Semb,
                    positifbanten: response.data[5].attributes.Kasus_Posi,
                    meninggalbanten: response.data[5].attributes.Kasus_Meni,
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{ fontSize: 20, textAlign: 'center', color: 'green', fontWeight: 'bold' }}>API KAWAL CORONA (BY IDA BAGUS PUTRA MANUABA)</Text>
                <Image style={{ width: '36%', height: '25%', alignSelf: 'center', marginTop: '5%' }} source={require('../image/banten.png')} />
                <View style={{ borderColor: 'blue', borderWidth: 3, margin: 20, borderRadius: 50 }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 50 }}>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Provinsi : '+this.state.provinsibanten}</Text>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Positif : '+this.state.positifbanten}</Text>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Sembuh : '+this.state.sembuhbanten}</Text>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Meninggal : '+this.state.meninggalbanten}</Text>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                            <Text style={{ color: '#5F9EA0' }}>
                                BANTEN
                        </Text>
                        </View>
                    </TouchableOpacity> */}
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
export default Bantenscreen;
