import {Text, View, StyleSheet} from 'react-native'

export interface MealDetailsProps{
   duration:string;
   complexity:string;
   affordability:string;
   style?:any;
   textStyle:any;
}


const MealDetails: React.FC<MealDetailsProps> = ({duration,complexity,affordability, style, textStyle}) =>{
  return  <View style={[styles.details, style]}>
    <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
    <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
  </View>
}

export default MealDetails;

const styles= StyleSheet.create({
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
      },
      details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center",
      },
})