import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PharmacyCard from '../components/PharmacyCard';
import Button from '../components/Button';
import theme from '../theme';
import { nominatedPharmacy as defaultPharmacy, alternativePharmacies, Pharmacy } from '../data/mockData';

const NominatedPharmacyScreen: React.FC = () => {
  const [currentPharmacy, setCurrentPharmacy] = useState<Pharmacy>(defaultPharmacy);
  const [showChangeView, setShowChangeView] = useState(false);

  const handleSelectPharmacy = (pharmacy: Pharmacy) => {
    Alert.alert(
      'Change Nominated Pharmacy',
      `Change nominated pharmacy to ${pharmacy.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            setCurrentPharmacy(pharmacy);
            setShowChangeView(false);
          },
        },
      ],
    );
  };

  if (showChangeView) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.changeHeader}>
          <TouchableOpacity onPress={() => setShowChangeView(false)} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={theme.colors.darkGreen} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.changeTitle}>Select a Pharmacy</Text>
          <Text style={styles.changeSubtitle}>
            Choose a new nominated pharmacy from the list below
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          {alternativePharmacies.map((pharmacy) => (
            <TouchableOpacity
              key={pharmacy.id}
              onPress={() => handleSelectPharmacy(pharmacy)}
              activeOpacity={0.85}
            >
              <View style={styles.selectableCard}>
                <PharmacyCard pharmacy={pharmacy} showDetails={false} />
                <View style={styles.selectBadge}>
                  <Text style={styles.selectText}>Select</Text>
                  <Ionicons name="chevron-forward" size={16} color={theme.colors.darkPurple} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionTitle}>Current Nominated Pharmacy</Text>

        <PharmacyCard pharmacy={currentPharmacy} showDetails={true} />

        <View style={styles.mapPlaceholder}>
          <Ionicons name="location" size={32} color={theme.colors.secondaryGrey} />
          <Text style={styles.mapText}>Map View</Text>
          <Text style={styles.mapSubtext}>{currentPharmacy.address}</Text>
        </View>

        <Text style={styles.noteText}>
          Your nominated pharmacy will receive all your electronic prescriptions from your prescriber.
        </Text>

        <Button
          title="Change Pharmacy"
          onPress={() => setShowChangeView(true)}
          variant="outline"
          style={styles.changeBtn}
          textStyle={{ color: theme.colors.darkPurple }}
        />
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
  sectionTitle: {
    fontSize: theme.fontSize.small,
    fontWeight: '700',
    color: theme.colors.primaryGrey,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: theme.spacing.m,
  },
  mapPlaceholder: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 12,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.m,
    gap: theme.spacing.xs,
  },
  mapText: {
    fontSize: theme.fontSize.body,
    fontWeight: '600',
    color: theme.colors.secondaryGrey,
  },
  mapSubtext: {
    fontSize: theme.fontSize.small,
    color: theme.colors.tertiaryGrey,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.l,
  },
  noteText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    lineHeight: 20,
    marginBottom: theme.spacing.m,
    paddingHorizontal: theme.spacing.xs,
  },
  changeBtn: {
    borderColor: theme.colors.darkPurple,
  },
  changeHeader: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.m,
    paddingBottom: theme.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.m,
  },
  backText: {
    fontSize: theme.fontSize.body,
    color: theme.colors.darkGreen,
    fontWeight: '500',
  },
  changeTitle: {
    fontSize: theme.fontSize.large,
    fontWeight: '800',
    color: theme.colors.black,
    marginBottom: theme.spacing.xs,
  },
  changeSubtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
  },
  selectableCard: {
    marginBottom: theme.spacing.m,
  },
  selectBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing.xs,
    paddingTop: theme.spacing.s,
    paddingRight: theme.spacing.xs,
  },
  selectText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.darkPurple,
    fontWeight: '600',
  },
});

export default NominatedPharmacyScreen;
