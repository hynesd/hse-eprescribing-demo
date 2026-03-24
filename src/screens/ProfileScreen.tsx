import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';
import { currentUser } from '../data/mockData';

const profileItems = [
  { icon: 'person-outline' as const, label: 'Personal Details', value: currentUser.firstName + ' ' + currentUser.lastName },
  { icon: 'card-outline' as const, label: 'PPS Number', value: '****' + currentUser.ppsNumber.slice(-2) },
  { icon: 'calendar-outline' as const, label: 'Date of Birth', value: currentUser.dateOfBirth },
  { icon: 'shield-checkmark-outline' as const, label: 'MyGovID Status', value: 'Verified ✓' },
  { icon: 'notifications-outline' as const, label: 'Notifications', value: 'Enabled' },
  { icon: 'language-outline' as const, label: 'Language', value: 'English (Ireland)' },
];

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{currentUser.initials}</Text>
          </View>
          <Text style={styles.name}>
            {currentUser.firstName} {currentUser.lastName}
          </Text>
          <View style={styles.verifiedBadge}>
            <Ionicons name="shield-checkmark" size={14} color={theme.colors.darkGreen} />
            <Text style={styles.verifiedText}>MyGovID Verified</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Account Details</Text>

        <View style={styles.card}>
          {profileItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                <View style={styles.iconWrap}>
                  <Ionicons name={item.icon} size={20} color={theme.colors.darkGreen} />
                </View>
                <View style={styles.rowText}>
                  <Text style={styles.rowLabel}>{item.label}</Text>
                  <Text style={styles.rowValue}>{item.value}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color={theme.colors.tertiaryGrey} />
              </TouchableOpacity>
              {index < profileItems.length - 1 && <View style={styles.separator} />}
            </React.Fragment>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.85}>
          <Ionicons name="log-out-outline" size={20} color={theme.colors.red} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>HSE Health App · Demo v1.0.0</Text>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: theme.spacing.l,
    marginBottom: theme.spacing.m,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.m,
  },
  avatarText: {
    color: theme.colors.white,
    fontWeight: '800',
    fontSize: theme.fontSize.large,
  },
  name: {
    fontSize: theme.fontSize.large,
    fontWeight: '800',
    color: theme.colors.black,
    marginBottom: theme.spacing.s,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    backgroundColor: theme.colors.lightestGreen,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: 99,
  },
  verifiedText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.darkGreen,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: theme.fontSize.small,
    fontWeight: '700',
    color: theme.colors.primaryGrey,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: theme.spacing.m,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    marginBottom: theme.spacing.l,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    gap: theme.spacing.m,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.lightestGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flex: 1,
  },
  rowLabel: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    marginBottom: 2,
  },
  rowValue: {
    fontSize: theme.fontSize.body,
    fontWeight: '600',
    color: theme.colors.black,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.lighterGray,
    marginHorizontal: theme.spacing.m,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.s,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#FFF3F5',
    marginBottom: theme.spacing.m,
  },
  logoutText: {
    fontSize: theme.fontSize.body,
    fontWeight: '600',
    color: theme.colors.red,
  },
  version: {
    textAlign: 'center',
    fontSize: theme.fontSize.small,
    color: theme.colors.tertiaryGrey,
  },
});

export default ProfileScreen;
