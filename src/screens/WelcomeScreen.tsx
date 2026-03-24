import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../components/Button';
import theme from '../theme';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Main: undefined;
};

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[theme.colors.darkGreen, '#014038', '#01302C']}
      style={styles.gradient}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.logoSection}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>HSE</Text>
            </View>
            <Text style={styles.appTitle}>Health App</Text>
            <Text style={styles.tagline}>Your health, in your hands</Text>
          </View>

          <View style={styles.actions}>
            <Button
              title="Log in with MyGovID"
              onPress={() => navigation.navigate('Login')}
              style={styles.primaryBtn}
            />
            <Button
              title="Continue without logging in"
              onPress={() => navigation.navigate('Main')}
              variant="outline"
              style={styles.secondaryBtn}
              textStyle={{ color: theme.colors.white }}
            />
          </View>

          <Text style={styles.footer}>
            By continuing, you agree to the{' '}
            <Text style={styles.footerLink}>Terms of Service</Text> and{' '}
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.l,
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.l,
  },
  logoSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBox: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.m,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  logoText: {
    fontSize: 38,
    fontWeight: '900',
    color: theme.colors.white,
    letterSpacing: 2,
  },
  appTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.white,
    marginBottom: theme.spacing.s,
  },
  tagline: {
    fontSize: theme.fontSize.body,
    color: theme.colors.lightGreen,
    opacity: 0.9,
  },
  actions: {
    gap: theme.spacing.m,
    marginBottom: theme.spacing.l,
  },
  primaryBtn: {
    backgroundColor: theme.colors.darkPurple,
  },
  secondaryBtn: {
    borderColor: 'rgba(255,255,255,0.6)',
  },
  footer: {
    textAlign: 'center',
    fontSize: theme.fontSize.small,
    color: 'rgba(255,255,255,0.55)',
  },
  footerLink: {
    color: theme.colors.lightGreen,
  },
});

export default WelcomeScreen;
