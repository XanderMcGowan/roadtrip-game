import { StyleSheet } from 'react-native';

const homeStyles = 

StyleSheet.create({
    backgroundImage: {
        flex: 1,
        // resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // zIndex:'-1'
      },

      button: {
        textAlign: 'center',
        height: '12%',
        width:'50%',
        marginBottom: "2%", 
        borderWidth: 4, // Border width
        borderColor: '#0c0f14', // Border color
        backgroundColor: 'white'

      },

      buttonLabelStyle: {
        fontSize: 18, 
        fontFamily: "Overpass_400Regular" 
      },

      container: {
        // backgroundColor:'red',
        width: '100%',
        paddingTop: '80%',
        marginBottom:'10%',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: "center",
        // flexDirection: "column",
        // flexWrap: "wrap",
        // borderWidth: 5, // Border wi
        // borderColor: 'black', // Border color
      },
    
    
    containerHome:{
        flexDirection: "column",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
      },

      text: {
        textAlign: 'center', 
        fontFamily: 'Overpass_400Regular',
        fontSize: 32,
        color: 'white',
      },

})

export default homeStyles;