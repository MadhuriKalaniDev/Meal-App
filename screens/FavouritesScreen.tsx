import {Text , View , StyleSheet} from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import {useSelector} from 'react-redux'

const FavouritesScreen: React.FC = () =>{

  //this was for context 
  //const favouriteMealContext = useContext(FavoritesContext)
  //const favouriteMeals  = MEALS.filter((meals) => favouriteMealContext.ids.includes(meals.id))

  const favouriteMealIds = useSelector((state) =>state.favouriteMeals. ids)
  const favouriteMeals  = MEALS.filter((meals) => favouriteMealIds.ids.includes(meals.id))
  
  if(favouriteMeals.length ===0 )
  {
    return<View style={styles.rootConrtainer}>
      <Text style={styles.text}> You have no Favourite Meals yet</Text>
    </View>
  }
  
   return <MealsList displayedMeals={favouriteMeals}/> 

}

export default FavouritesScreen


const styles = StyleSheet.create({
  rootConrtainer:{
    flex:1,
    justifyContent:'center',
    alignItems : 'center'
  },
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    color : 'white'

  }
})