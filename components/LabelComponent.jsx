import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function LabelComponent({ data,changeSelectedcategory,selectedCategory }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Pressable 
      style={[styles.body, isHovered && styles.bodyHovered, selectedCategory?.id===data.id && styles.bodySelected]}
      onPress={() => {
        changeSelectedcategory(data)
      }}
      onHoverIn={(e) => setIsHovered(true)}  
      onHoverOut={(e) => setIsHovered(false)}
    >
      <View style={[styles.circle, { backgroundColor: data.color }]} />
      <Text>{data.type}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  body: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  bodyHovered: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light background color when hovered
  },
  bodySelected:{
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  circle: {
    width: 12,            // Diameter of the circle
    height: 12,           // Diameter of the circle
    borderRadius: 6,      // Half of the diameter to make it a circle
    backgroundColor: 'blue', // Default circle color
    marginHorizontal: 10,
  },
})
