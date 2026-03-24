import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

type PrescriptionsLandingScreenProps = {
  navigation: any;
};

const sections = [
  {
    title: 'Ready for Dispensing',
    subtitle: '2 prescriptions ready for collection',
    icon: 'medical' as const,
    color: theme.colors.green,
    screen: 'ReadyForDispensing',
  },
  {
    title: 'Dispensed Prescriptions',
    subtitle: '3 historical prescriptions',
    icon: 'checkmark-circle' as const,
    color: theme.colors.tertiaryGrey,
    screen: 'Dispensed',
  },
  {
    title: 'Repeat Prescriptions',
    subtitle: '1 prescription needs renewal',
    icon: 'refresh-circle' as const,
    color: theme.colors.purple,
    screen: 'RepeatPrescriptions',
  },
];

const PrescriptionsLandingScreen: React.FC<PrescriptionsLandingScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>My Prescriptions</Text>
        <Text style={styles.subtitle}>Manage all your HSE prescriptions in one place</Text>
      </View>

      <View style={styles.list}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.screen}
            style={[styles.card, { borderLeftColor: section.color }]}
            onPress={() => navigation.navigate(section.screen)}
            activeOpacity={0.85}
          >
            <View style={[styles.iconWrap, { backgroundColor: section.color + '20' }]}>
              <Ionicons name={section.icon} size={24} color={section.color} />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>{section.title}</Text>
              <Text style={styles.cardSubtitle}>{section.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.tertiaryGrey} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.lighterGray,
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.l,
    paddingBottom: theme.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: '800',
    color: theme.colors.black,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
  },
  list: {
    padding: theme.spacing.m,
    gap: theme.spacing.m,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderLeftWidth: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: '700',
    color: theme.colors.black,
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
  },
});

export default PrescriptionsLandingScreen;
