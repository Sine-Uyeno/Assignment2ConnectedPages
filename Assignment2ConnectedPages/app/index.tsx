import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Index() {

  const repeat = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#16221e"
      }}
    >
      
      <TouchableOpacity style={styles.search}>
        <Text style={[styles.text, styles.middle]}>Search in Mail</Text>
      </TouchableOpacity>
      <ScrollView style={styles.mailArea}>
        <Text style={[styles.text, styles.minorSpacing]}>Primary</Text>
        <View style={styles.organize}>
          {repeat.map((value) => (
            <TouchableOpacity style={styles.buttons} key={value}>
            <View>
              <Image source={require('../assets/images/pfpicon.png')} style={styles.icon}></Image>
            </View>
            <View>
              <Text style={styles.text}>John Doe</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipis...</Text>
            </View>
            <View>
              <Text style={styles.text}>October 28</Text>
              <Image source={require('../assets/images/staricon.png')} style={styles.star}></Image>
            </View>
          </TouchableOpacity>
          ))}
          

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mailArea: {
    padding: 10,
  },
  organize: {
    flex: 1,
    flexGrow: 1
  },
  buttons: {
          flexDirection: "row",
          backgroundColor: "#242731",
          padding: 30,
          margin: 0,

          color: "#cacacaff",
          
          fontFamily: 'sans',
  },
  search: {
          backgroundColor: "#303c38",
          padding: 20,
          margin: 30,
          borderRadius: 20,
          color: "#cacacaff",
          
          fontFamily: 'sans',
  },
  text: {
    color: "#cacacaff",
    fontFamily: 'tahoma',
    marginLeft: 20,
    fontSize: 10,
    flexWrap: "wrap"
  },
  middle: {
    textAlign: "center",
    fontSize: 20
  },
  icon: {
    width: 40,
    height: 40
  },
  star: {
    marginLeft: 45,
    marginTop: 15,
    width: 20,
    height: 20
  },
  minorSpacing: {
    marginBottom: 10
  }

});
