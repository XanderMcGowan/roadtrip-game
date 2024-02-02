import { StyleSheet } from 'react-native';

const globalStyles = 

StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    marginBottom: '10%',
  },
  buttonPressed: {
    backgroundColor: "#D1D3C4", // Change the color when pressed
  },
  buttonText: {
    fontFamily: 'Caveat_400Regular',
    color: "black",
    fontSize: 16,
  },
  picker: {
    width: 200,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontFamily: 'Caveat_400Regular',
    fontSize: 32,
    color: '#333',
  },
});

export default globalStyles;


