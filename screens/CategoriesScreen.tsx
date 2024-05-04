import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen:  React.FC = () =>{
    const navigation = useNavigation();
    

    const renderItem = ({item}) =>{

        const pressHandler = () =>{
            navigation.navigate("MealsOverview" , {categoryId: item.id});
        }
        return <CategoryGridTile title={item.title} color={item.color} 
        onPress={pressHandler} />
        
    }
   return <FlatList
   data={CATEGORIES}
   keyExtractor={(item) => item.id}
   renderItem={renderItem}
   numColumns={2}
   />
}

export default CategoriesScreen;