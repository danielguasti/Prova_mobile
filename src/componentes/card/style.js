import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: '25%',
      width: '80%',
      backgroundColor: '#43e1ff',  
      borderRadius: 15,
      marginTop: 10,
    },
    foto: {
        height: '100%',
        width: '40%',
        padding: 10,

    },
    img: {
        height: '100%',
        width: '100%',
    },
    texto: {
        height: '100%',
        width: '60%',
        padding: 10,
    },
    titulo: { 
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    atributos: {
        margin: 2,
        fontWeight: 'bold',


    },
  });

  export default styles;