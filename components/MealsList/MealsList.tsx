import {Text, StyleSheet, FlatList, View} from 'react-native'
import MealItem from './MealItem'

export interface MealsListProps {
    displayedMeals : any
}

const MealsList: React.FC<MealsListProps> = ({displayedMeals}) =>{
    const renderItem = ({item}) =>{
        return <MealItem id={item.id} title={item.title} imageUrl={item.imageUrl} duration={item.duration} complexity={item.complexity} affordability={item.affordability}/>
    }

  return  <View style={styles.container}>
      <FlatList data={displayedMeals} 
      keyExtractor={(item) => item.id}
      renderItem={renderItem} ></FlatList>
  </View>
}

export default MealsList



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})