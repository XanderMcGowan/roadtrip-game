import React, { useState } from "react";
import { useMute } from '../components/MuteContext';
import { IconButton } from "react-native-paper";
import { Audio } from 'expo-av';


const MuteButton = () => {
    
  const [iconName, setIconName] = useState('volume-high');
  const { isMuted, toggleMute } = useState(false);

  // const muteButton = () => {
  //   toggleIcon()
  //   console.log("button is pressed");
  // };


  const toggleIcon = () => {
    const newIconName = iconName === 'volume-high' ? 'volume-mute' : 'volume-high'; // Toggle between two icons
    setIconName(newIconName);
  };

  return(
    <IconButton 
        mode="outlined"
        onPress={toggleMute}
        icon={toggleIcon}
        ></IconButton>
  )
}

export default MuteButton