import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PrescriptionCard from '../components/PrescriptionCard';
import theme from '../theme';
import { dispensedPrescriptions } from '../data/mockData';

const DispensedScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionLabel}>
          {dispensedPrescriptions.length} historical records
        </Text>
        {dispensedPrescriptions.map((rx) => (
          <PrescriptionCard key={rx.id} prescription={rx} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.lighterGray,
  },
  scroll: {
    padding: theme.spacing.m,
    paddingBottom: theme.spacing.xl,
  },
  sectionLabel: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    marginBottom: theme.spacing.m,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
});

export default DispensedScreen;
