import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrescriptionCard from '../components/PrescriptionCard';
import theme from '../theme';
import { readyPrescriptions } from '../data/mockData';

const ReadyForDispensingScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.banner}>
          <View style={styles.bannerIcon}>
            <Ionicons name="medical" size={22} color={theme.colors.darkGreen} />
          </View>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>{readyPrescriptions.length} prescriptions ready</Text>
            <Text style={styles.bannerSubtitle}>
              Collect from your nominated pharmacy
            </Text>
          </View>
        </View>

        {readyPrescriptions.map((rx) => (
          <PrescriptionCard key={rx.id} prescription={rx} />
        ))}

        <View style={styles.info}>
          <Ionicons name="information-circle-outline" size={16} color={theme.colors.secondaryGrey} />
          <Text style={styles.infoText}>
            Prescriptions are held at your nominated pharmacy for 28 days from issue date.
          </Text>
        </View>
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
  banner: {
    backgroundColor: theme.colors.lightestGreen,
    borderRadius: 12,
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
    marginBottom: theme.spacing.m,
  },
  bannerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: '700',
    color: theme.colors.darkGreen,
  },
  bannerSubtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.green,
    marginTop: 2,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.xs,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: theme.spacing.m,
  },
  infoText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    flex: 1,
    lineHeight: 20,
  },
});

export default ReadyForDispensingScreen;
