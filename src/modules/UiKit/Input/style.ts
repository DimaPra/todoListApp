import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
   },
    containerItems:{
    
    },

    containerInput:{
        borderColor: '#fff',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 20,
    }
});