import { StyleSheet } from 'react-native';

const globalStyles = 

StyleSheet.create({
  container: {
    padding: '5%',
    height:'100%',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {

    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 1.75,
    borderWidth: 2,
    borderColor: '#A4A59B',
    shadowColor: '#41403e',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    fontSize: 16,
    lineHeight: 23,
    padding: 12,
    // transition: 'all 15ms',
    marginBottom: '1%',
  },
  buttonPressed: {
    backgroundColor: "blue", // Change the color when pressed
  },
  buttonText: {
    paddingTop: "15%",
    textAlign:'center',
    fontFamily: 'Caveat_400Regular',
    color: "black",
    fontSize: 24,
  },
  card: {
    // width: '46%', // Adjust according to your grid layout
    // height: 150, // Adjust height as needed
    margin: "2%",

    elevation: 4,
  },
  checkbox: {
    height: '25%',
    width: '25%'
  },
  checkboxCon: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    width:'60%',
    marginBottom: "1%"


  },
  clickedCard: {
    opacity: 0.5, // Change opacity when clicked
  },
  lottie:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1000,
  },
  picker: {
    width: 200,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 1.75,
    textAlign:'center',
    fontFamily: 'Caveat_400Regular',
    fontSize: 24,
    marginBottom:'1.5%+'
  },
  text: {
    textAlign: 'center', 
    fontFamily: 'Caveat_400Regular',
    fontSize: 32,
    color: '#333',
  },
});

export default globalStyles;


