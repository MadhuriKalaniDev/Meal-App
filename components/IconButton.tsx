
import { Pressable, StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons'

export interface IconButtonProps {
    onPress:() => void;
    icon: string;
    color?: string
}


const IconButton: React.FC<IconButtonProps> = ({onPress, icon, color}) =>{
   return <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.pressed] : null}>
   <Ionicons name={icon} size={24} color={color}>
   </Ionicons>
   </Pressable>
}
export default IconButton


const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
})