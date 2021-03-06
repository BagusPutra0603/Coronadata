//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import StarRating from 'react-native-star-rating';

// create a component
class Firstscreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            positifdata: '',
            sembuhdata: '',
            negaradata: '',
            meninggaldata: '',
            starCount: 3,
            gantifragment: 1,
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/indonesia/')
            .then((response) => {

                this.setState({
                    positifdata: response.data[0].positif,
                    sembuhdata: response.data[0].sembuh,
                    negaradata: response.data[0].name,
                    meninggaldata: response.data[0].meninggal,
                })
            })
            .catch((error) => {
                console.log(error);
            });


    }


    Stardata() {
        if (this.state.page === 1) {
            return <Text>buruk</Text>;
        } else if (this.state.starCount === 2) {
            return <Text>BAGUS</Text>;
        }
    }

    klikdatapositif() {

        if (this.state.gantifragment === 3) {
            this.setState({
                gantifragment: (this.state.gantifragment + 0)
            })
        } else {
            this.setState({
                gantifragment: (this.state.gantifragment + 1)
            })
        }

    }

    klikdatanegatif() {
        if (this.state.gantifragment === 1) {
            this.setState({
                gantifragment: (this.state.gantifragment + 0)
            })
        } else {
            this.setState({
                gantifragment: (this.state.gantifragment - 1)
            })
        }

    }


    render() {

        let datastar = '';

        if (this.state.starCount == 1) {
            datastar = 'Buruk'
        } else if (this.state.starCount == 2) {
            datastar = 'Agak Buruk'
        } else if (this.state.starCount == 3) {
            datastar = 'Standar'
        } else if (this.state.starCount == 4) {
            datastar = 'Agak Baik'
        } else {
            datastar = 'Baik'
        }


        console.log(this.state.gantifragment)

        return (

            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 15, textAlign: 'center', paddingTop: '5%', color: 'green', fontWeight: 'bold' }}>API KAWAL CORONA (BY IDA BAGUS PUTRA MANUABA)</Text>
                    <Image style={{ width: '40%', height: '20%', alignSelf: 'center', marginTop: '5%' }} source={require('../image/burunggaruda.jpg')} />
                    <View style={{ borderColor: 'blue', borderWidth: 3, marginVertical: '2%', borderRadius: 50, marginHorizontal: '2%' }}>
                        <View style={{ backgroundColor: 'red', borderRadius: 50 }}>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Negara : ' + this.state.negaradata}</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Positif : ' + this.state.positifdata}</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Sembuh : ' + this.state.sembuhdata}</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{'Meninggal : ' + this.state.meninggaldata}</Text>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: '10%' }}>
                        <View style={{ borderColor: 'red', borderWidth: 3, borderRadius: 35 }}>
                            <View style={{ backgroundColor: 'blue', borderRadius: 30 }}>
                                <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Bagaimanan Penilaian anda tentang apilikasi ini</Text>
                                <StarRating
                                    emptyStarColor='white'
                                    fullStarColor='#FFD700'
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />

                                <Text style={{ alignSelf: 'center', fontSize: 20, color: 'white' }}>{datastar}</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={{ color: 'red', fontSize: 0, marginTop: '2%', textAlign: 'center', marginBottom: '2%' }}>PILIH PROVINSI</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Bantenscreen')}>
                            <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                                <Text style={{ color: '#5F9EA0' }}>
                                    BANTEN
                        </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Jakartascreen')}>
                            <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: 'purple', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                                <Text style={{ color: 'purple' }}>
                                    DKI
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Jawabaratscreen')}>
                            <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: 'orange', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                                <Text style={{ color: 'orange' }}>
                                    JABAR
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Teststate')}>
                        <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                            <Text style={{ color: '#5F9EA0' }}>
                                Test Pindah
                        </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.klikdatapositif()}>
                        <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                            <Text style={{ color: '#5F9EA0' }}>
                                +
                        </Text>
                        </View>
                    </TouchableOpacity>

                    {this.state.gantifragment === 1 ? <Text>aaaaa</Text> : null}
                    {this.state.gantifragment === 2 ? <Text>bbbbb</Text> : null}
                    {this.state.gantifragment === 3 ? <Text>ccccc</Text> : null}


                    <TouchableOpacity onPress={() => this.klikdatanegatif()}>
                        <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                            <Text style={{ color: '#5F9EA0' }}>
                                -
                        </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cobabitcoin')}>
                        <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                            <Text style={{ color: '#5F9EA0' }}>
                                Bitcoin
                        </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Testflatlist')}>
                        <View style={{ marginHorizontal: 20, paddingVertical: 10, borderColor: '#5F9EA0', borderWidth: 1, borderRadius: 50, paddingHorizontal: 30 }}>
                            <Text style={{ color: '#5F9EA0' }}>
                                Flatlist
                        </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>

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
export default Firstscreen;
