//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';


// create a component
class Teststate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gantiangka: 0,
        };
    }


    tambah() {
        if (this.state.gantiangka === 10) {
            this.setState({
                gantiangka: (this.state.gantiangka + 0)
            })
        }
        else {
            this.setState({
                gantiangka: (this.state.gantiangka + 1)
            })
        }
    }

    kurang() {
        if (this.state.gantiangka === 0) {
            this.setState({
                gantiangka: (this.state.gantiangka - 0)
            })
        }
        else {
            this.setState({
                gantiangka: (this.state.gantiangka - 1)
            })
        }
    }

    componentDidMount() {

        axios.get('https://api.kawalcorona.com/sembuh')
            .then((res) => {
                // do something with Google res
                console.log(res.data['value'])
                console.log(res.data['name'])
                return axios.get('https://api.kawalcorona.com/meninggal');
            })
            .then((res) => {
                // do something with Apple res
                console.log(res + 'Kedua')
            })
            .catch((err) => {
                // handle err
                console.log(err)
            });

    }

    render() {


        return (
            <View >
                <Text>Teststate</Text>
                <Button
                    title='Klik +'
                    onPress={() => this.tambah()}
                />

                <Button
                    title='Klik -'
                    onPress={() => this.kurang()}
                />
                <Text>{'angkanya adalah : ' + this.state.gantiangka}</Text>

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
export default Teststate;
