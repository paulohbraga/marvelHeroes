import React from 'react';
import {Animated, Image, StyleSheet} from 'react-native';

export function HeroImage(props) {
  return (
    <Animated.View
      style={{
        width: props.imgAnimatedWidth,
        height: props.heightAnimated,
      }}>
      <Image
        source={{
          uri: `${props.thumbnail.path}.${props.thumbnail.extension}`,
        }}
        style={styles.img}
      />
    </Animated.View>
  );
}

export const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: 'yellow',
    borderWidth: 2,
  },
});
