import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Prescription } from '../data/mockData';
import StatusBadge from './StatusBadge';
import theme from '../theme';

interface PrescriptionCardProps {
  prescription: Prescription;
}

const borderColors: Record<string, string> = {
  ready: theme.colors.green,
  dispensed: theme.colors.tertiaryGrey,
  repeat: theme.colors.purple,
};

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({ prescription }) => {
  const borderColor = borderColors[prescription.status];

  const dateLabel =
    prescription.status === 'dispensed'
      ? 'Dispensed'
      : prescription.status === 'repeat'
      ? 'Last dispensed'
      : 'Issued';

  const dateValue =
    prescription.status === 'dispensed'
      ? prescription.dateDispensed
      : prescription.status === 'repeat'
      ? prescription.lastDispensed
      : prescription.dateIssued;

  return (
    <View style={[styles.card, { borderLeftColor: borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.medicationName}>
          {prescription.medicationName}{' '}
          <Text style={styles.dosage}>
            {prescription.dosage} {prescription.form}
          </Text>
        </Text>
        <StatusBadge status={prescription.status} />
      </View>

      <View style={styles.row}>
        <Ionicons name="person-outline" size={14} color={theme.colors.secondaryGrey} />
        <Text style={styles.detail}>
          {prescription.prescriberName}, {prescription.prescriberClinic}
        </Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="calendar-outline" size={14} color={theme.colors.secondaryGrey} />
        <Text style={styles.detail}>
          {dateLabel}: {dateValue}
        </Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="storefront-outline" size={14} color={theme.colors.secondaryGrey} />
        <Text style={styles.detail}>{prescription.pharmacyName}</Text>
      </View>

      {prescription.status === 'repeat' && prescription.refillsRemaining !== undefined && (
        <View style={styles.refillRow}>
          <Text style={styles.refillText}>
            {prescription.refillsRemaining} of {prescription.totalRefills} refills remaining
          </Text>
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
    marginBottom: theme.spacing.m,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
    gap: theme.spacing.s,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: theme.spacing.s,
  },
  medicationName: {
    fontSize: theme.fontSize.body,
    fontWeight: '700',
    color: theme.colors.black,
    flex: 1,
    flexWrap: 'wrap',
  },
  dosage: {
    fontWeight: '400',
    color: theme.colors.primaryGrey,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  detail: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    flex: 1,
  },
  refillRow: {
    backgroundColor: '#FFF3F5',
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  refillText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.red,
    fontWeight: '600',
  },
});

export default PrescriptionCard;
