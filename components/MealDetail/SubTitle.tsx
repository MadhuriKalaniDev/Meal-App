import {View, Text , StyleSheet} from 'react-native'

export interface subTitleProps{
title?: string;
}
const subTitle : React.FC<subTitleProps> = ({title}) =>{

    return <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{title}</Text>
    </View>

}
export default subTitle;

const styles = StyleSheet.create({
    subTitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
     },
     subTitleContainer:{
        marginHorizontal : 12,
        marginVertical:4,
       padding:6,
       borderBottomColor : '#e2b497',
       borderBottomWidth : 2

    }
})