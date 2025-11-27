// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import Home from "../Pages/Feed";
// import Profile from "../Pages/Perfil/profile";
// import Favoritos from "../Pages/favoritos/favoritos";
// import TabButton from "../Components/tabButton";

// import { Ionicons } from "@expo/vector-icons";

// export default function AppTabs() {
//   const [activeTab, setActiveTab] = useState("Home");

//   const renderScreen = () => {
//     switch (activeTab) {
//       case "Home": return <Home />;
//       case "Profile": return <Profile />;
//       case "Favoritos": return <Favoritos />;
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         {renderScreen()}
//       </View>

      
//       <View style={styles.tabContainer}>
//         <TabButton
//           icon={<Ionicons name="home" size={22} color={activeTab === "Home" ? "#2563eb" : "#6b7280"} />}
//           label="Home"
//           isActive={activeTab === "Home"}
//           onPress={() => setActiveTab("Home")}
//         />

//         <TabButton
//           icon={<Ionicons name="person" size={22} color={activeTab === "Profile" ? "#2563eb" : "#6b7280"} />}
//           label="Perfil"
//           isActive={activeTab === "Profile"}
//           onPress={() => setActiveTab("Profile")}
//         />

//         <TabButton
//           icon={<Ionicons name="settings" size={22} color={activeTab === "Settings" ? "#2563eb" : "#6b7280"} />}
//           label="Configurações"
//           isActive={activeTab === "Settings"}
//           onPress={() => setActiveTab("Settings")}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tabContainer: {
//     flexDirection: "row",
//     height: 60,
//     backgroundColor: "#f8fafc",
//     borderTopWidth: 1,
//     borderColor: "#e5e7eb",
//   },
// });
