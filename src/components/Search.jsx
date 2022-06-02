import { View, TextInput } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

export default function Search() {
    return (
        <View >
            <FontAwesome name='search' size={25}/>
            <TextInput placeholder='="Restaurant food'/>
        </View>
    )
}
