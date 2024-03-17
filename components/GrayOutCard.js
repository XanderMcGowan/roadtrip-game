import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, TouchableRipple } from 'react-native-paper';

const GrayOutCardOnClick = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <View style={styles.container}>
      <TouchableRipple onPress={handleClick} style={{ borderRadius: 8 }}>
        <Card
          style={[
            styles.card,
            isClicked && styles.clickedCard // Apply clicked style if isClicked is true
          ]}
        >
          <Card.Content>
            <Text>This card grays out when clicked.</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: 300,
    elevation: 4,
  },
  clickedCard: {
    opacity: 0.5, // Change opacity when clicked
  },
});

export default GrayOutCardOnClick;