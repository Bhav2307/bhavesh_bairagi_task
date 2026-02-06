import styles from './style';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Heading, SubHeading } from '../../components/atoms/text';
import Colors from '../../utils/colors';

export interface SplashProps {
  navigation?: any;
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
          navigation.replace('UserList')

    }, 3000);
  }, [])
  
  return (
    <View style={styles.mainContainer}>
      {/* Name */}
      <Animatable.View
        animation="fadeInUp"
        duration={800}
        delay={200}
        useNativeDriver
        style={styles.infoContainer}
      >
        <Heading color={Colors.PrimaryColor} fontSize={20} >Bhavesh Bairagi</Heading>
        <Animatable.View
          animation="fadeInUp"
          duration={800}
          delay={600}
          useNativeDriver
        >
          <SubHeading fontSize={15} style={styles.subTxt}>
            Full Stack & React Native Developer
          </SubHeading>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          duration={800}
          delay={1000}
          useNativeDriver
        >
          <SubHeading fontSize={15}  style={styles.subTxt}>
            React Native • React JS •  Node JS • TypeScript
          </SubHeading>
        </Animatable.View>

        {/* Experience */}
        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={1400}
          useNativeDriver
        >
          <SubHeading fontSize={15}  style={styles.subTxt}>
            4.5+ Years Experience | Mobile & Web Applications
          </SubHeading>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default Splash;
