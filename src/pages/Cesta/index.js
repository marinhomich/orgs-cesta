import React from "react";
import {Image, StyleSheet, Dimensions, Text, View} from "react-native";

import Texto from '../../components/texto'

import logo from '../../../assets/logo.png'
import Index from "./components/Topo";
import Detalhes from "./components/Detalhes";

export default function Cesta({topo, detalhes}){
    return (
       <>
           <Index {...topo}/>
           <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
           </View>
       </>
    )
}

const estilos = StyleSheet.create({
    cesta:{
      paddingVertical: 8,
      paddingHorizontal: 16
    },
})
