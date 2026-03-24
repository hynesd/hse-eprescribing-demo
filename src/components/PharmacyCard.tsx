import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Pharmacy } from '../data/mockData';
import theme from '../theme';

interface PharmacyCardProps {
  pharmacy: Pharmacy;
  showDetails?: boolean;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ pharmacy, showDetails = false }) => {
  return (
    <View style={styles.card}>
      <View style={styles.nameRow}>
        <View style={styles.iconCircle}>
          <Ionicons name="medical" size={20} color={theme.colors.darkGreen} />
        </View>
        <Text style={styles.name}>{pharmacy.name}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="location-outline" size={14} color={theme.colors.secondaryGrey} />
        <Text style={styles.detail}>{pharmacy.address}</Text>
      </View>

      {showDetails && pharmacy.phone && (
        <View style={styles.row}>
          <Ionicons name="call-outline" size={14} color={theme.colors.secondaryGrey} />
          <Text style={styles.detail}>{pharmacy.phone}</Text>
        </View>
      )}

      {showDetails && pharmacy.openingHours && (
        <View style={styles.row}>
          <Ionicons name="time-outline" size={14} color={theme.colors.secondaryGrey} />
          <Text style={styles.detail}>{pharmacy.openingHours}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: theme.spacing.m,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
    gap: theme.spacing.s,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.s,
    marginBottom: theme.spacing.xs,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.lightestGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: theme.fontSize.body,
    fontWeight: '700',
    color: theme.colors.black,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.xs,
  },
  detail: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    flex: 1,
    lineHeight: 20,
  },
});

export default PharmacyCard;
