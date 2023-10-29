import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containertheme1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8C8C8C',
        paddingTop: 250,
        paddingBottom: 250
    },

    containertheme2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5A3C8',
        paddingTop: 250,
        paddingBottom: 250
    },

    buttonTheme1: {
        marginTop: 50, 
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'red',
    },

    buttonTheme2: {
        marginTop: 50, 
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ED0D92'
    },

    group : {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 5,
        marginBottom: 20
    },

    numericInput: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },

    weightInput: {
        textAlign: 'center',
        backgroundColor: '#F2F1F2',
        justifyContent: 'center',
        fontSize: 15,
        borderRadius: 10,
        borderColor: '#0E000A',
        borderWidth: 1,
        width: 50,
        padding: 2,
        marginTop: 10,
        marginBottom: 25
    },

    labeltheme1: {
        fontFamily: 'Metal',
        fontSize: 25,
    },

    labeltheme2: {
        fontFamily: 'Agbalumo',
        color: '#0E000A',
        fontSize: 20
    },

    title: {
        fontSize: 30,
        fontWeight:'bold',
        padding: 15
    },

    green : {
        color: 'green',
        fontSize: 25,
        padding: 10,
        marginTop: 25
    },

    yellow : {
        color: 'yellow',
        fontSize: 30,
        padding: 10,
        marginTop: 25
    },

    red : {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 25
    }
});