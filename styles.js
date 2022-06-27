import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerButtons: {
        margintTop: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        color: "white",
        fontSize: 60,
        fontWeight: "bold",
        backgroundColor: 'rgb(0,0,0)',
        marginBottom: 10,
        textAlign: 'center',
    },
    text:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    game: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 400,
    },
    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'black',
    },
    piedra: {
        flex:1,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        margin: 10
    },
    image: {
        flex: 1,
        justifyContent:"center",
        width: '100%',
    },
    buttons: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
    },
    imageBack: {
        flex: 1,
        width: '100%',
        justifyContent:"center",
        alignItems: "center",
    }
})

export default styles;