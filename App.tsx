//https://www.youtube.com/watch?v=bIQII7gTXDE&list=PLY3ncAV1dSVA9ltOEMgzT8ZTZiccpOUkX

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import DayListItem from './src/components/core/DayListItem';

const days = [...Array(24)].map((val, index) => index + 1);
console.log(days)

export default function App() {


  return (
    <View style={styles.container}>
     
  <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item })=> <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',

    

  
  },
  content: {
    gap:10,
    padding:50
  },

  column:{
    gap:10,
  },

  box: {
    backgroundColor: '#F9EDE3',
   /*  width:100,
    height:100, */

    flex: 1,
    aspectRatio:1,

    borderWidth:StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius:20,

    justifyContent:'center',
    alignItems:'center'
    
  },

  text: {
    color:'#9b4521',
    fontSize:50,

  }
});
