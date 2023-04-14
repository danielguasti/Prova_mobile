import { Button, Image, Text, View } from "react-native";
import styles from "./style";

export default function Card(props){

    return (
        <View style={styles.container}>
            <View style={styles.foto}>
                <Image style={styles.img} source={{
                    uri: props.card.urlimg
                }}/>

            </View>
            <View style={styles.texto}>
                <Text style={styles.titulo}>{props.card.titulo}</Text>

                <Text style={styles.atributos}>{props.card.atributo1}</Text>

                <Text style={styles.atributos}>{props.card.atributo2}</Text>

                <Text style={styles.atributos}>{props.card.atributo3}</Text>


                <Button title='trocar'></Button>

            </View>
        </View>
    )
}