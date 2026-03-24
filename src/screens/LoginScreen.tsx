import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../components/Button';
import theme from '../theme';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Main: undefined;
};

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.darkGreen} />
          </TouchableOpacity>

          <View style={styles.header}>
            <View style={styles.myGovLogo}>
              <Text style={styles.myGovText}>myGovID</Text>
            </View>
            <Text style={styles.title}>Log in with MyGovID</Text>
            <Text style={styles.subtitle}>
              Use your MyGovID credentials to access your health records securely
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                style={styles.input}
                placeholder="your@email.ie"
                placeholderTextColor={theme.colors.tertiaryGrey}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordWrap}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Enter your password"
                  placeholderTextColor={theme.colors.tertiaryGrey}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeBtn}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={22}
                    color={theme.colors.secondaryGrey}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.forgotWrap}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <Button
              title="Log in"
              onPress={() => navigation.navigate('Main')}
              style={styles.loginBtn}
            />

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity
              style={styles.biometricsBtn}
              onPress={() => navigation.navigate('Main')}
              activeOpacity={0.85}
            >
              <Ionicons name="finger-print" size={28} color={theme.colors.darkPurple} />
              <Text style={styles.biometricsText}>Use Biometrics</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.l,
    paddingBottom: theme.spacing.xl,
  },
  backBtn: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.l,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: theme.spacing.xl,
    alignItems: 'center',
  },
  myGovLogo: {
    backgroundColor: theme.colors.blue,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: 8,
    marginBottom: theme.spacing.m,
  },
  myGovText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: theme.fontSize.body,
  },
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '800',
    color: theme.colors.black,
    textAlign: 'center',
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
    textAlign: 'center',
    lineHeight: 20,
  },
  form: {
    gap: theme.spacing.m,
  },
  field: {
    gap: theme.spacing.xs,
  },
  label: {
    fontSize: theme.fontSize.small,
    fontWeight: '600',
    color: theme.colors.primaryGrey,
  },
  input: {
    borderWidth: 1.5,
    borderColor: theme.colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: 14,
    fontSize: theme.fontSize.body,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
  passwordWrap: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeBtn: {
    position: 'absolute',
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  forgotWrap: {
    alignSelf: 'flex-end',
    marginTop: -theme.spacing.s,
  },
  forgotText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.blue,
    fontWeight: '500',
  },
  loginBtn: {
    marginTop: theme.spacing.s,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.lightGray,
  },
  dividerText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.tertiaryGrey,
  },
  biometricsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.s,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.darkPurple,
  },
  biometricsText: {
    fontSize: theme.fontSize.body,
    fontWeight: '600',
    color: theme.colors.darkPurple,
  },
});

export default LoginScreen;
