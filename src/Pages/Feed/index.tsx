import React, { useState, useEffect, useCallback, useContext } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ActivityIndicator, 
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { AppContext } from '../../Contexts/AppContext';
import useNetworkStatus from '../../Hooks/useNetworkStatus';
import { BASE_URL, MOCK_WEATHER } from '../../Services/api';
import WeatherCard from '../../Components/weatherCard';
import Icon from 'react-native-vector-icons/Feather';

const Feed = () => {
  const { apiKey, favorites, toggleFavorite } = useContext(AppContext);
  const isOnline = useNetworkStatus();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fixCityName = (s: string) => s.trim();

  const fetchWeather = useCallback(async (searchCity: string) => {
    setLoading(true);
    setError('');
    Keyboard.dismiss();

    if (!isOnline || !apiKey) {
      setTimeout(() => {
        setWeatherData({...MOCK_WEATHER, name: searchCity || "Simulação"});
        setLoading(false);
        if(!apiKey) setError("Modo Simulação — configure a API Key");
        if(!isOnline) setError("Sem conexão — modo offline");
      }, 800);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(searchCity)}&units=metric&lang=pt_br&appid=${apiKey}`);

      if (!response.ok) throw new Error('Cidade não encontrada');
      const data = await response.json();
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, [apiKey, isOnline]);

  useEffect(() => {
    fetchWeather('Brasilia');
  }, []);

  const isFav = weatherData && favorites.some(f => f.name === weatherData.name);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>Descubra o Clima</Text>
        <Text style={styles.subtitle}>Onde você quer checar hoje?</Text>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Buscar cidade..."
            value={city}
            onChangeText={setCity}
            returnKeyType="search"
            onSubmitEditing={() => fetchWeather(fixCityName(city))}

          />
        </View>

        {error.length > 0 && (
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>{error}</Text>
          </View>
        )}

        {loading ? (
          <ActivityIndicator size="large" color="#1877F2" style={{ marginTop: 30 }} />
        ) : (
          weatherData && (
            <View style={styles.cardWrapper}>
              <WeatherCard 
                data={weatherData} 
                isFavorite={isFav} 
                onToggleFav={toggleFavorite} 
              />
            </View>
          )
        )}

        <Text style={styles.sectionTitle}>Populares</Text>
        <View style={styles.popularContainer}>
          {['Londres', 'Nova York', 'Tóquio', 'Paris'].map((c) => (
            <TouchableOpacity 
              key={c}
              style={styles.cityButton}
              onPress={() => fetchWeather(fixCityName(c))}

            >
              <Text style={styles.cityText}>{c}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  scrollContent: {
    padding: 18,
    paddingBottom: 130, 
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },

  searchIcon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },

  input: {
    flex: 1,
    height: 46,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 38,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD'
  },

  warningBox: {
    backgroundColor: '#FFE1C6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 14,
  },

  warningText: {
    color: '#C05A0E',
    fontSize: 14,
  },

  
  cardWrapper: {
    marginTop: 10,
    marginBottom: 25,
  },

  sectionTitle: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444',
  },

  popularContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },

  cityButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },

  cityText: {
    fontSize: 14,
    color: '#333',
  }
});
