import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingTop: 25,
        flexDirection: 'row',
        marginHorizontal: 20,
        width: '100%'
    },
    indexContainer:{
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index:{
color:'#fff',
fontSize: 20,
    },
    taskContainer:{
        backgroundColor: '#3E3364',
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task:{
        color:'#fff',
        width:'90%',
        fontSize: 16,
    },
    delete:{
        marginLeft:10,
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
    },
    

})