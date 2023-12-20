import React , {useState, useEffect}from "react";
import {Image, FlatList,Text, TouchableOpacity, View, Button,StatusBar, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { HomeScreenStyle } from ".";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import axios from "axios";
import getApis from "../getApis/getApis";






const ListTopic = [
  {
    id: 1,
    title: 'Xin Chào',
    photo: "Roman_Coliseum.png"
  },
  {
    id: 2,
    title: 'Gia Đình',
    photo: "The_Eiffel_Tower.png"
  },
  {
    id: 3,
    title: 'Thời Tiết',
    photo: "The_Statue_Of_Liberty.png"
  },
  {
    id: 4,
    title: 'Quốc Gia',
    photo: "The_Statue_Of_Liberty.png"
  },
  {
    id: 5,
    title: 'Du lịch',
    photo: "God_Jesu.png"
  },
  {
    id: 6,
    title: 'Giao Thông',
    photo: "Haghia_Sophia.png"
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => {
  let e = "../assests/img/" + item.photo
  console.log("EEEEEEEEEEEEEEEEEEEEE:"+e)
  let l = "../assets/img/Haghia_Sophia.png"
  let source = require(e)
  //console.log("ssssssssssssssssssss:"+source)
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      {/* <Image style={styles.img}
  
        source={source        }
      /> */}
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
}
export default HomeScreen = ({navigation} ) => {

  //let test  = getApis();
  //console.log("@@@DATA:", test);
  // const response  = await axios.get("http://localhost:3001/api/topics");
  // const arrData = Object.values(response);
  // console.log(arrData);
  //const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  // const url = "http://localhost:3000/api/lessons"
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // console.log("$$$====Use Fetch:")
  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error("ERRORRRRRRRRR:"+error))
  //     .finally(() => setLoading(false));
  // }, []);
  // console.log("###DATA"+data.message);
  

  //
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
          console.log(item.title)
          navigation.navigate('LessonList',{TopicName:item.id})
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  }
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.flatlist}>
      <FlatList
        data={ListTopic}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </SafeAreaView>
      </View>
    )
}
const styles = StyleSheet.create(
  {
    text: {
      fontSize: 42,
    },
    container: {
     width:400,
    },
    flatlist:{
      marginTop:15
    },
    item: {
      textAlign:"center",
      justifyContent:"center",
      padding: 20,
      width:330,
      height:575,
      marginHorizontal: 16,
      borderRadius:20,
      marginEnd:55
    },
    img:{
      borderRadius:10,
      width:292,
      height:300
    },
    title: {
      fontSize: 35,
      textAlign:"center",
      fontWeight:"bold"

    },
    header: {
      position:"absolute",
      backgroundColor:"#ff00ff",
      width: 350,
      height:50,
      borderRadius:20,
      right:5,
      left:5,
      top:5
    },
  }
)