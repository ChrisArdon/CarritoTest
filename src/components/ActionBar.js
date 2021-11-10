import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import firebase from "../utils/firebase";

export default function ActionBar(props){
    const {showList, setShowList} = props;

    //Boton cerrar sesion
    return(
        <View style={styles.viewFooter}>
            <View style={styles.viewClose}>
                <Text style={styles.text} onPress={() => firebase.auth().signOut()}>Cerrar Sesion</Text>
            </View>

            <View style={styles.viewAdd}>
                <Text style={styles.text} onPress={() => setShowList(!showList)}>
                    {showList ? 'Nueva compra' : 'Cancelar compra'}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});