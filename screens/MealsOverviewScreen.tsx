import { useNavigation, useRoute } from '@react-navigation/native';
import {FlatList, StyleSheet , Text , View} from 'react-native'
import { MEALS , CATEGORIES} from '../data/dummy-data';
import { useEffect , useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
export interface MealsOverwiewScreenProps  {

}

const MealsOverwiewScreen : React.FC <MealsOverwiewScreenProps>= () =>{
    const route = useRoute();
    const navigation = useNavigation();
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) =>{
      return mealItem.categoryIds.indexOf(catId) >=0;
    });

      useLayoutEffect(()=>{

        const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
 
      navigation.setOptions({
        title : categoryTitle
     })
 
    },[catId , navigation])
 return <MealsList displayedMeals={displayedMeals}/>

}

export default MealsOverwiewScreen;

