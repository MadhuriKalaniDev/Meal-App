import { useNavigation, useRoute } from "@react-navigation/native";
import {Text , View, Image, StyleSheet, ScrollView ,Button} from 'react-native'
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect  } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import {useSelector, useDispatch} from 'react-redux'
import { addFavourite , removeFavourite } from "../store/redux/favourites";

export interface MealDetailScreenProps {

}

const MealDetailScreen: React.FC<MealDetailScreenProps> = () =>{

   
 const route = useRoute();
 const navigation = useNavigation();
  
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

 // const favouriteMealsCtx  = useContext(FavoritesContext);
  //const mealIsFavourite  = favouriteMealsCtx.ids.includes(mealId)


  const favouriteMealIds  = useSelector((state)=> state.favouriteMeals.ids)
   const mealIsFavourite  = favouriteMealIds.ids.includes(mealId)
   const dispatch =  useDispatch()


  const changeFavouriteStatusHandler  = () =>{
   //   if(mealIsFavourite)
   //   {
   //    favouriteMealsCtx.removeFavourite(mealId)
   //   }
   //   else{
   //    favouriteMealsCtx.addFavourite(mealId)
   //   }

      if(mealIsFavourite)
     {
       dispatch(removeFavourite({id: mealId}))
     }
     else{
       dispatch(addFavourite({id:mealId}))
     }

  }
  useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : () =>{
                return <IconButton onPress={changeFavouriteStatusHandler} 
                icon={mealIsFavourite ? 'star' : 'star-outline'} 
                color="white"/>
            }})
  },[navigation , changeFavouriteStatusHandler])
  return <ScrollView style={styles.rootContainer}>
    <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <View>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText} />
    </View>
    <View style={styles.listOuterContainer}>
    <View style={styles.listContainer}>
    <SubTitle title="Ingredients"></SubTitle>
     <List data={selectedMeal.ingredients}/>
    <SubTitle title="Steps"></SubTitle>
    <List data={selectedMeal.steps}/>
    </View>
    </View>
  </ScrollView>

}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
  marginBottom:32
    }
    ,
     image:{
        width:'100%',
        height:350
     },
     title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign :'center',
        color:"white"
     },
     detailText:{
        color:"white"
     },

     listContainer:{
        width:"80%"
     },
     listOuterContainer:{
        alignItems:'center'
     }
    
    
})