import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

type StatusType = 'ready' | 'dispensed' | 'repeat';

interface StatusBadgeProps {
  status: StatusType;
}

const labels: Record<StatusType, string> = {
  ready: 'Ready for Collection',
  dispensed: 'Dispensed',
  repeat: 'Renewal Needed',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <View style={[styles.badge, styles[status]]}>
      <Text style={[styles.text, styles[`${status}Text` as keyof typeof styles]]}>
        {labels[status]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: 99,
  },
  ready: {
    backgroundColor: theme.colors.lightestGreen,
  },
  dispensed: {
    backgroundColor: theme.colors.lighterGray,
  },
  repeat: {
    backgroundColor: '#EDE7FF',
  },
  text: {
    fontSize: theme.fontSize.small,
    fontWeight: '600',
  },
  readyText: {
    color: theme.colors.darkGreen,
  },
  dispensedText: {
    color: theme.colors.secondaryGrey,
  },
  repeatText: {
    color: theme.colors.darkPurple,
  },
});

export default StatusBadge;
