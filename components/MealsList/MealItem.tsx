import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";
export interface MealItemProps {
  title: string;
  imageUrl: any;
  duration: string;
  complexity: string;
  affordability: string;
  id:any;
}
const MealItem: React.FC<MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id
}) => {
    const navigation = useNavigation();
    
    const selectMealItemHandler  = () =>{
        navigation.navigate('MealDetail',{mealId:id});
    }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:'#ccc'}} 
    onPress={selectMealItemHandler}
      style={({pressed})=> [pressed? styles.buttonPressed : null]}>
        <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
           <MealDetails duration={duration} complexity={complexity} affordability={affordability} textStyle={undefined} />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white", //for shadow to work in ios we need to add bg colour
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed:{
    opacity:0.5
  },
  innerContainer:{
    overflow:'hidden',
    shadowRadius: 10,
  }
});
