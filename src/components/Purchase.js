import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Purchase(props){
    const {purchase, deletePurchase} = props;
    const pasat = purchase.days > 0 ? true: false;

    const infoDay = () => {
        if(purchase.days === 0){
            return <Text style={{color:"#A9741A"}}>Derecho a Devolucion</Text>
        }
        else{
            const days = -purchase.days;
            return(
                <View style={styles.textCurrent}>
                    <Text>{days}</Text>
                    <Text>{days === 1 ? 'Dia' : 'Dias'}</Text>
                </View>
            );
        }
    }

    return(
        <TouchableOpacity
        style={[
            styles.card,
            pasat ? styles.pasat : purchase.days === 0 ? styles.actual : styles.current,
        ]}
        onPress={() => deletePurchase(purchase)}>
            <Text style={styles.userName}>{purchase.product}{purchase.price}</Text>
            {pasat ? <Text style={{color:'#fff'}}>Pasado</Text>:infoDay} 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

});