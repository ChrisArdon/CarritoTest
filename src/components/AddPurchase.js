import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import moment from "moment";
import firebase from "../utils/firebase";
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling:true});
const db = firebase.firestore(firebase);

export default function AddPurchase(props){
    const {user, setShowList, setReloadData} = props;
    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState({});
}

const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
};

const onSubmit = () => {
    let errors = {};
    if(!formData.product || !formData.price){
        if(!formData.product) errors.product = true;
        if(!formData.price) errors.price = true;
    }
    else{
        const data = formData;
        db.collection(user.id).add(data).then(() => {
            setReloadData(true);
            setShowList(true);
        }).catch(() => {
            setFormError({product:true, price:true});
        });
    }
    setFormError(errors);

    return(
        <>
        <View style={styles.container}>
            <TextInput style={[styles.input, formError.product && {borderColor:'#C2A5B5'}]}
            placeholder='Producto'
            placeholderTextColor="#292D70"
            onChange={(e) => onChange(e, 'product')}></TextInput>

            <TextInput style={[styles.input, formError.price && {borderColor:'#C2A5B5'}]}
            placeholder='Price'
            placeholderTextColor="#292D70"
            onChange={(e) => onChange(e, 'price')}></TextInput>

            <TouchableOpacity onPress={onSubmit}>
                <Text style={styles.addButton}>Crear Compra</Text>
            </TouchableOpacity>
        </View>        
        </>
    );
}

const styles = StyleSheet.create({});