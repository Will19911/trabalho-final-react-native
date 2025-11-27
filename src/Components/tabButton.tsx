import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const TabButton = ({ icon, label, isActive, onPress }: TabButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={styles.container}
    >
      <View style={{ opacity: isActive ? 1 : 0.4 }}>
        {icon}
      </View>
      <Text style={[styles.text, isActive && styles.activeText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center", 
    paddingVertical: 4, 
  },
  text: {
    fontSize: 11, 
    color: "#6b7280",
    marginTop: 2, 
  },
  activeText: {
    color: "#2563eb",
    fontWeight: "bold",
  },
});
