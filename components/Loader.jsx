import { ActivityIndicator,View,  StyleSheet} from "react-native";

const Loader = ({ selected, onPress }) => {
    return (
     <View style={styles.body}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={30}/>
      </View>
     </View>
    );
  };

const styles = StyleSheet.create({
    body:{
        zIndex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(52, 52, 52, 0.4)',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'
    },
    loaderContainer:{
      width:'8%',
      height:'12%',
      alignItems:'center',
        justifyContent:'center',
      backgroundColor:'rgba(52, 52, 52, 0.7)',
      borderRadius:10,
    }
})
  export default Loader;