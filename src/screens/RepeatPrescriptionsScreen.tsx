import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrescriptionCard from '../components/PrescriptionCard';
import Button from '../components/Button';
import theme from '../theme';
import { repeatPrescriptions } from '../data/mockData';

const RepeatPrescriptionsScreen: React.FC = () => {
  const handleRenewalRequest = (medicationName: string, prescriberName: string) => {
    Alert.alert(
      'Renewal Request Sent',
      `Renewal request sent to ${prescriberName}. You'll be notified when your prescription is ready.`,
      [{ text: 'OK' }],
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.infoBanner}>
          <Ionicons name="information-circle" size={20} color={theme.colors.purple} />
          <Text style={styles.infoText}>
            These prescriptions are due for renewal. Request a renewal from your prescriber.
          </Text>
        </View>

        {repeatPrescriptions.map((rx) => (
          <View key={rx.id}>
            <PrescriptionCard prescription={rx} />
            <Button
              title="Request Renewal"
              onPress={() => handleRenewalRequest(rx.medicationName, rx.prescriberName)}
              style={styles.renewBtn}
            />
          </View>
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
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.s,
    backgroundColor: '#EDE7FF',
    borderRadius: 10,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
  },
  infoText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.darkPurple,
    flex: 1,
    lineHeight: 20,
  },
  renewBtn: {
    marginTop: -theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
});

export default RepeatPrescriptionsScreen;
