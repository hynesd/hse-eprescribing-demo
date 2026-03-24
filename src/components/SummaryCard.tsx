import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

interface SummaryCardProps {
  title: string;
  subtitle: string;
  accentColor: string;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  onPress?: () => void;
  actionLabel?: string;
  onActionPress?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  subtitle,
  accentColor,
  iconName,
  onPress,
  actionLabel,
  onActionPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: accentColor }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.content}>
        <View style={[styles.iconWrap, { backgroundColor: accentColor + '20' }]}>
          <Ionicons name={iconName} size={22} color={accentColor} />
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {actionLabel ? (
          <TouchableOpacity onPress={onActionPress} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={[styles.action, { color: accentColor }]}>{actionLabel}</Text>
          </TouchableOpacity>
        ) : (
          <Ionicons name="chevron-forward" size={20} color={theme.colors.tertiaryGrey} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: theme.fontSize.body,
    fontWeight: '700',
    color: theme.colors.black,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondaryGrey,
  },
  action: {
    fontSize: theme.fontSize.small,
    fontWeight: '600',
  },
});

export default SummaryCard;
