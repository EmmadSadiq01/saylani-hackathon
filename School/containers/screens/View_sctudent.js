import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

function Studetns() {
  return (
    <ScrollView style={styles.container}>
     <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Students
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>M.EMMAD SADIQ</Text>
            <Text style={styles.cardDetails}>
              Higher School
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Junaid Ahmed</Text>
            <Text style={styles.cardDetails}>
              Intermediate
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Umaid Sadiq</Text>
            <Text style={styles.cardDetails}>
              B. Com
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Arsalan Ahmed</Text>
            <Text style={styles.cardDetails}>
              Higher Class
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Faiq</Text>
            <Text style={styles.cardDetails}>
              Intermidiate
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Ali Hasaan</Text>
            <Text style={styles.cardDetails}>
              Intermidiate
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../images/student.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Hamza</Text>
            <Text style={styles.cardDetails}>
              Matric
            </Text>
          </View>
        </View>
      </View>

      {/* <View style={styles.donate}>
        <Text style={styles.donate_text}>Donate Your Blood</Text>
        <Button title="Donate Your Blood" />
      </View>
      <View style={styles.donate}>
        <Text style={styles.donate_text}>Search Your Blood Group</Text>
        <Button title="Donate Your Blood" />
      </View>
      <View style={styles.donate}>
        <Text style={styles.donate_text}>All Available Blood Groups</Text>
        <Button title="Donate Your Blood" style={styles.donate_button} />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  donate: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    height: 100,
    backgroundColor: "#de5528",
  },
  donate_text: {
    fontSize: 24,
  },
  donate_button: {
    flex: 1,
    backgroundColor: "red",
  },
  //   =======slider========
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slider: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 9,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  //   buttons
  buttons: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  btn_container: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  donate_btn: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#de5528",
    borderRadius: 50,
  },
  btn_text: {
    textAlign: "center",
    fontSize: 18,
    color: "#de5528"

  },
  //   CARDS

  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
export default Studetns;
