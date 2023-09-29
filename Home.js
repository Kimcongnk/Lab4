import React, { useState, useEffect } from 'react';
import HttpComponent from './HttpComponent';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Text,
  Alert,
  Animated,
  Easing
} from 'react-native';

const App = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert('Button pressed', 'You pressed the button');
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  };

  const TouchableComponent =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  const [scaleAnim] = useState(new Animated.Value(1));

  return (
    <View style={styles.container}>
      <HttpComponent />

      <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, marginVertical: 10, borderRadius: 5 }}>
        <View>
          <Text style={{ color: 'white' }}>Touchable Opacity</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableHighlight
        onPress={handlePress}
        underlayColor="lightblue"
        style={{backgroundColor: 'blue', padding: 10, marginVertical: 10, borderRadius: 5,
        }}
      >
        <View>
          <Text style={{ color: 'white' }}>Touchable Highlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableComponent onPress={handlePress}>
        <View style={{backgroundColor: 'blue', padding: 10, marginVertical: 10, borderRadius: 5
        }}>
          <Text style={{ color: 'white' }}>
            {Platform.OS === 'android'
              ? 'Touchable Native Feedback'
              : 'TouchableOpacity'}
          </Text>
        </View>
      </TouchableComponent>

      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          backgroundColor: 'blue',
          padding: 10,
        }}
      >
        <Text onPress={handlePress} style={{ color: 'white' }}>
          Animated Component
        </Text>
      </Animated.View>

      <TouchableWithoutFeedback onPress={() => { navigation.navigate('Profile') }}>
        <View style={{ backgroundColor: 'blue', padding: 10, marginVertical: 10, borderRadius: 5,
        }}>
          <Text style={{ color: 'white' }}>Touchable Without Feedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;
