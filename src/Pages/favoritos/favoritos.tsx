import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MapPin, Heart } from 'lucide-react-native';
import { AppContext } from '../../Contexts/AppContext';

const FavoritesScreen = () => {
  const { favorites, toggleFavorite } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cidades Salvas</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MapPin size={48} color="#999" />
          <Text style={styles.emptyText}>Nenhum favorito ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.city}>{item.name}</Text>
                <Text style={styles.details}>
                  {item.sys.country} • {Math.round(item.main.temp)}°C
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => toggleFavorite(item)}
                style={styles.heartButton}
              >
                <Heart size={22} color="red" fill="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 24,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    marginTop: 8,
    color: "#777",
    fontSize: 14,
  },
  card: {
    backgroundColor: "#fff",
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    elevation: 3,
  },
  city: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 13,
    color: "#555",
  },
  heartButton: {
    padding: 6,
  }
});
