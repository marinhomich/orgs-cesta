import React from "react";
import {StyleSheet, View} from "react-native";
import Index from "./components/Topo";
import Detalhes from "./components/Detalhes";

export default function Cesta({topo, detalhes}) {
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
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})
