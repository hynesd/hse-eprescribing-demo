import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SummaryCard from '../components/SummaryCard';
import theme from '../theme';
import { currentUser, nominatedPharmacy } from '../data/mockData';

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.greeting}>Hello, {currentUser.firstName} 👋</Text>
            <Text style={styles.subtitle}>Here's your health summary</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{currentUser.initials}</Text>
          </View>
        </View>

        <View style={styles.alertBanner}>
          <Ionicons name="notifications" size={18} color={theme.colors.darkPurple} />
          <Text style={styles.alertText}>You have 2 prescriptions ready for collection</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Access</Text>

        <SummaryCard
          title="Prescriptions Ready"
          subtitle="2 prescriptions ready for collection"
          accentColor={theme.colors.green}
          iconName="medical"
          onPress={() => navigation.navigate('Prescriptions', { screen: 'ReadyForDispensing' })}
        />

        <SummaryCard
          title="Repeat Prescriptions"
          subtitle="1 repeat prescription needs renewal"
          accentColor={theme.colors.purple}
          iconName="refresh-circle"
          onPress={() => navigation.navigate('Prescriptions', { screen: 'RepeatPrescriptions' })}
        />

        <SummaryCard
          title="Nominated Pharmacy"
          subtitle={nominatedPharmacy.name + ', ' + nominatedPharmacy.address.split(',')[0]}
          accentColor={theme.colors.blue}
          iconName="storefront"
          onPress={() => navigation.navigate('MyPharmacy')}
          actionLabel="Change"
          onActionPress={() => navigation.navigate('MyPharmacy')}
        />

        <Text style={styles.sectionTitle}>Recent Activity</Text>

        <View style={styles.activityCard}>
          <View style={styles.activityRow}>
            <View style={[styles.dot, { backgroundColor: theme.colors.tertiaryGrey }]} />
            <View style={styles.activityText}>
              <Text style={styles.activityTitle}>Atorvastatin 40mg dispensed</Text>
              <Text style={styles.activityDate}>10 Mar 2026 · Hickey's Pharmacy</Text>
            </View>
          </View>
          <View style={styles.activityRow}>
            <View style={[styles.dot, { backgroundColor: theme.colors.tertiaryGrey }]} />
            <View style={styles.activityText}>
              <Text style={styles.activityTitle}>Salbutamol 100mcg dispensed</Text>
              <Text style={styles.activityDate}>28 Feb 2026 · McCabe's Pharmacy</Text>
            </View>
          </View>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
    paddingTop: theme.spacing.s,
  },
  greeting: {
    fontSize: theme.fontSize.large,
    fontWeight: '800',
    color: theme.colors.black,
  },
  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    marginTop: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: theme.fontSize.body,
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.s,
    backgroundColor: '#EDE7FF',
    borderRadius: 10,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    marginBottom: theme.spacing.l,
  },
  alertText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.darkPurple,
    fontWeight: '500',
    flex: 1,
  },
  sectionTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: '700',
    color: theme.colors.primaryGrey,
    marginBottom: theme.spacing.m,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  activityCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: theme.spacing.m,
    gap: theme.spacing.m,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.m,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 4,
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: theme.fontSize.small,
    fontWeight: '600',
    color: theme.colors.black,
  },
  activityDate: {
    fontSize: 12,
    color: theme.colors.tertiaryGrey,
    marginTop: 2,
  },
});

export default HomeScreen;
