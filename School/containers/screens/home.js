import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
  Image
} from 'react-native';
import { Container, Header, Content, Button, Icon, Text, Row } from 'native-base';
import { AuthContext } from '../../components/context';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';
// import { Content, Thumbnail} from 'native-base';

const Home = ({ navigation }) => {
  // const { signOut } = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.actor}>
            <Image
              source={require('../images/avatar.png')}
              style={styles.image}
            />
            <Text style={styles.text_actor}>Welcome As Admin</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.btn_container}>

            <Button iconLeft style={styles.btn}  onPress={()=>{navigation.navigate("Studetns")}}>
              <Icon name='eye-outline' />
              <Text>Manage Students</Text>
            </Button>
            <Button iconLeft style={styles.btn} onPress={()=>{navigation.navigate("Conpany")}}>
              <Icon name='eye-outline' />
              <Text>Manage Compnay</Text>
            </Button>

            <Button iconLeft style={styles.btn} onPress={()=>{navigation.navigate("Studetns")}}>
              <Icon name='eye-outline' />
              <Text>View Students</Text>
            </Button>
            <Button iconLeft style={styles.btn} onPress={()=>{navigation.navigate("Conpany")}}>
              <Icon name='eye-outline' />
              <Text>View Compnay</Text>
            </Button>
            <Button iconLeft style={styles.btn} >
              <Icon name='add-outline' />
              <Text>Add Student</Text>
            </Button>
            <Button iconLeft style={styles.btn}>
              <Icon name='add-outline' />
              <Text>Add Company</Text>
            </Button>
            <Button iconLeft style={styles.btn} onPress={() => navigation.navigate("Login")}>
              <Icon name='add-outline' />
              <Text>Log Out</Text>
            </Button>
          </View>

          {/* <Button
            title="Go to Second Screens"
            onPress={() => navigation.navigate("Second")}
          />
          <Button
            title="Log Out"
            onPress={() => { signOut() }}
          /> */}
        </View>

      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center"
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  actor: {
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2
  },
  text_actor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: "uppercase"
  },
  btn_container: {
    flexDirection: "column",
    marginBottom: 10,
    width:250,
    padding:10
  },
  btn: {
    // marginRight: 20,
    width:'70%',
    paddingHorizontal:30,
    marginBottom: 10,
    width:'100%'
    // width:'100%',
  }
}
)