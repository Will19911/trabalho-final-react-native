import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  data: any;
  isFavorite: boolean;
  onToggleFav: (data: any) => void;
}

const WeatherCard: React.FC<Props> = ({ data, isFavorite, onToggleFav }) => {
  if (!data) return null;

  return (
    <View style={styles.card}>

      {/* Header */}
      <View style={styles.rowTop}>
        <View>
          <View style={styles.row}>
            <Text style={styles.city}>{data.name}</Text>
            <View style={styles.countryTag}>
              <Text style={styles.countryText}>{data.sys.country}</Text>
            </View>
          </View>
          <Text style={styles.description}>{data.weather[0].description}</Text>
        </View>

        <TouchableOpacity onPress={() => onToggleFav(data)} style={styles.favButton}>
          <Icon 
            name="heart" 
            size={26} 
            color={isFavorite ? "#FF4D4D" : "#FFF"} 
          />
        </TouchableOpacity>
      </View>

      {/* Temperatura */}
      <View style={styles.tempContainer}>
        <Text style={styles.temp}>{Math.round(data.main.temp)}°</Text>
      </View>

      {/* Status extra */}
      <View style={styles.bottomBox}>
        
        <View style={styles.infoBox}>
          <Icon name="wind" size={20} color="#D0E7FF" />
          <Text style={styles.infoValue}>{data.wind.speed} km/h</Text>
          <Text style={styles.infoLabel}>Vento</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoBox}>
          <Icon name="droplet" size={20} color="#D0E7FF" />
          <Text style={styles.infoValue}>{data.main.humidity}%</Text>
          <Text style={styles.infoLabel}>Umidade</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoBox}>
          <Icon name="sun" size={20} color="#D0E7FF" />
          <Text style={styles.infoValue}>{Math.round(data.main.feels_like)}°</Text>
          <Text style={styles.infoLabel}>Sensação</Text>
        </View>

      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#1D4ED8',
      borderRadius: 20,
      padding: 20,
      marginVertical: 10,
      overflow: 'hidden',
      
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
    },
  
    rowTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  
    city: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFF',
    },
  
    countryTag: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
  
    countryText: {
      fontSize: 12,
      color: '#FFF',
    },
  
    description: {
      fontSize: 14,
      color: '#C7D9FF',
      marginTop: 4,
      textTransform: 'capitalize'
    },
  
    favButton: {
      padding: 8,
      backgroundColor: 'rgba(255,255,255,0.15)',
      borderRadius: 50,
    },
  
    tempContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
  
    temp: {
      fontSize: 70,
      fontWeight: 'bold',
      color: '#FFF',
    },
  
    bottomBox: {
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderRadius: 14,
      padding: 14,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    infoBox: {
      alignItems: 'center',
      flex: 1,
    },
  
    infoValue: {
      marginTop: 4,
      fontSize: 14,
      color: '#FFF',
      fontWeight: '600',
    },
  
    infoLabel: {
      fontSize: 11,
      color: '#C7D9FF',
    },
  
    divider: {
      width: 1,
      backgroundColor: 'rgba(255,255,255,0.25)',
      marginHorizontal: 8,
    },
  });
  
