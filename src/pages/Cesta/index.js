import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Index from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Itens from "./components/Itens";

export default function Cesta({topo, detalhes, itens}) {
    return (
        <ScrollView>
            <Index {...topo}/>
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
                <Itens {...itens}/>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})
