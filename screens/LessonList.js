import React, {useState, useEffect} from "react";
import { TouchableOpacity, StyleSheet, Text , SafeAreaView, FlatList,ImageBackground} from 'react-native';
import { Image, View } from "react-native-animatable";
import Icon, { Icons } from '../components/Icons';
import LessonProgress from './LessonProgress';

const ListLesson = [
    {
      id: 1,
      title: 'Lesson 1',
      id_Topic: 1
    },
    {
      id: 2,
      title: 'Lesson 2',
      id_Topic: 1
    },
    {
      id: 3,
      title: 'Lesson 3',
      id_Topic: 1
    },
    {
      id: 4,
      title: 'Lesson 4',
      id_Topic: 1
    },
    {
      id: 5,
      title: 'Lesson 5',
      id_Topic: 1
    },
    {
      id: 6,
      title: 'Lesson 6',
      id_Topic: 1
    },
    {
        id: 7,
        title: 'Lesson 7',
        id_Topic: 1
      },
      {
        id: 8,
        title: 'Lesson 8',
        id_Topic: 1
      },
      {
        id: 9,
        title: 'Lesson 9',
        id_Topic: 1
      },
      {
        id: 10,
        title: 'Lesson 10',
        id_Topic: 1
      },

  ];
  const Item = ({item, onPress, backgroundColor, textColor}) => (

    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      <Icon style={styles.icon} type={Icons.AntDesign} name="checksquare" color="#3d43fc" />
    </TouchableOpacity>
  );
export default LessonList = ({navigation, route}) => {
    console.log("####State NEW:")
    console.log(route);
    console.log("####=======")
    let params = route.params


    let parentStack = navigation.getParent().getParent();

    parentStack.setOptions({ 
        headerShown:true,
        headerTitle: () => (
            <View style={{
             flexDirection:"row",
             width:360,
             height:50,
             marginStart:-16,
             alignItems:"center"
              }}>
             <TouchableOpacity style={{
                 marginLeft:10,
                 flex:.45,
             }}
             onPress={() => {
                navigation.getParent()?.setOptions({ 
                tabBarStyle: { display: 'flex' },
                tabBarVisible: true,
                headerShown:false
                });
                parentStack.setOptions({
                    headerTitle: () => (
                        <View style={{
                         flexDirection:"row",
                         width:360,
                         height:50,
                         marginStart:-16,
                         alignItems:"center"
                          }}>
                         <TouchableOpacity style={{
                             marginLeft:10,
                             flex:.45,
                         }}>
                                             <Image
                                     style={{ 
                                         width: 40, height: 40, 
                                         borderRadius:30
                                     }}
                                 source={require('../assets/img/avt.png')}
                             />
                         </TouchableOpacity>
                         
                          <TouchableOpacity style={{
                             backgroundColor:"#9dacc420",
                             height:45,
                             borderRadius:20,
                             alignItems:"center",
                             justifyContent:"center",
                             flex:1,
                             }} 
                             onPress={() => {}}>
                             <Text style={{
                                 color:"#0000FF",
                                 fontStyle:"normal",
                                 fontWeight:"bold",
                                 fontSize:20,
                                 }}>English Anytime</Text>
                              
                         </TouchableOpacity>
         
                            <TouchableOpacity
                            style={{
                             color:"#0000FF",
                             flex:.2,
                             marginStart:50
                             
                             }}
                            >
                            <Icon type={Icons.FontAwesome5} name="bars" color="#db5d14" />
                            </TouchableOpacity>
                        </View>
                       )
                 
                })
                navigation.goBack()
            
            }}
             >
                                 <Image
                         style={{ 
                             width: 40, height: 40, 
                             borderRadius:30
                         }}
                     source={require('../assets/img/left_back.png')}
                 />
             </TouchableOpacity>
             
              <TouchableOpacity style={{
                 backgroundColor:"#9dacc420",
                 height:45,
                 borderRadius:20,
                 alignItems:"center",
                 justifyContent:"center",
                 flex:1,
                 }} 
                 onPress={() => {}}>
                 <Text style={{
                     color:"#0000FF",
                     fontStyle:"normal",
                     fontWeight:"bold",
                     fontSize:20,
                     }}>{params.TopicName}</Text>
                  
             </TouchableOpacity>

                <TouchableOpacity
                style={{
                 color:"#0000FF",
                 flex:.2,
                 marginStart:50
                 
                 }}
                >
                <Icon type={Icons.FontAwesome5} name="bars" color="#db5d14" />
                </TouchableOpacity>
            </View>
           )

        });
  ////
  ///
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#68a1fc' : '#4cfca7';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
            <Item
                item={item}
                onPress={() => {
                setSelectedId(item.id)
                navigation.navigate("LessonProgress",{idLesson:item.id})
                //navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
                //console.log(item.title)
                //navigation.navigate('LessonList',{TopicName:item.id})
                }}
                backgroundColor={backgroundColor}
                textColor={color}
            />
    );
  }
    return (
      <ImageBackground 
      source={require("../assets/img/Roman_Coliseum.png")}
      style={styles.container_flatlist}
      >
      <SafeAreaView style={styles.flatlist}>
      <FlatList
        data={ListLesson}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        vertical={true}
      />
    </SafeAreaView>
      </ImageBackground>
    )


}
const styles = StyleSheet.create(
    {
        container:{
            alignContent:"center",
            justifyContent:"center",
            backgroundColor:"#FF00FF"
        },
        text:{
            color:"#000000",
            
        },
        flatlist:{
            marginTop:15
        },
        container_flatlist: {
            width:400,
            height:660,
            
        },
        item:{
            alignContent:"center",
            justifyContent:"center",
            padding: 20,
            width:330,
            height:70,
            marginLeft:17,
            marginBottom:15,
            borderRadius:10,
            flex:1,
            flexDirection:"row"
        }, 
        title:{
            textAlign:"center",
            flex:.99,
            marginLeft:20,
            fontSize:20,
            fontWeight:"bold"
        },
        icon:{

        },
    }
)