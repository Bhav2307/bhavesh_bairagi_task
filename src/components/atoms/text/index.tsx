import React, { useMemo } from 'react';
import styles from './style';
import {
  Text,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import Dim from '../../../utils/dimentions';

export interface Props {
  style?: StyleProp<TextStyle> | any;
  children: any;
  onTextPress?: (e: GestureResponderEvent) => void;
  line?: number;
  duration?: number;
  fontSize?: number | null | undefined;
  color?: string | null | undefined;
}

const arePropsEqual = (prevProps: Props, nextProps: Props): boolean => {
  const isStyleEqual =
    prevProps.style === nextProps.style ||
    (prevProps.style?.fontSize === nextProps.style?.fontSize &&
      prevProps.style?.color === nextProps.style?.color &&
      prevProps.style?.margin === nextProps.style?.margin);

  return (
    prevProps.children === nextProps.children &&
    prevProps.onTextPress === nextProps.onTextPress &&
    prevProps.line === nextProps.line &&
    prevProps.fontSize === nextProps.fontSize &&
    prevProps.color === nextProps.color &&
    isStyleEqual
  );
};

export const Heading: React.FC<Props> = React.memo((props: Props) => {
  const {
    style,
    children,
    onTextPress,
    line,
    fontSize = null,
    color = null,
  } = props;
  const textStyle = useMemo(() => {
    const sizeStyle = fontSize ? { fontSize: Dim.Normalize(fontSize) } : {};
    const colorStyle = color ? { color } : {};
    return [styles.mainHeading, sizeStyle, colorStyle, style];
  }, [fontSize, color, style]);
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={line}
      onPress={onTextPress}
      style={textStyle}
    >
      {children}
    </Text>
  );
}, arePropsEqual);
export const SubHeading: React.FC<Props> = React.memo((props: Props) => {
  const {
    style,
    children,
    onTextPress,
    line,
    fontSize = null,
    color = null,
  } = props;
  const textStyle = useMemo(() => {
    const sizeStyle = fontSize ? { fontSize: Dim.Normalize(fontSize) } : {};
    const colorStyle = color ? { color } : {};
    return [styles.subHeading, sizeStyle, colorStyle, style];
  }, [fontSize, color, style]);
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={line}
      onPress={onTextPress}
      style={textStyle}
    >
      {children}
    </Text>
  );
}, arePropsEqual);
export const SimpleText: React.FC<Props> = React.memo((props: Props) => {
  const {
    style,
    children,
    onTextPress,
    line,
    fontSize = null,
    color = null,
  } = props;
  const textStyle = useMemo(() => {
    const sizeStyle = fontSize ? { fontSize: Dim.Normalize(fontSize) } : {};
    const colorStyle = color ? { color } : {};
    return [styles.simpleText, sizeStyle, colorStyle, style];
  }, [fontSize, color, style]);
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={line}
      onPress={onTextPress}
      style={textStyle}
    >
      {children}
    </Text>
  );
}, arePropsEqual);
export const SmallText: React.FC<Props> = React.memo((props: Props) => {
  const {
    style,
    children,
    onTextPress,
    line,
    fontSize = null,
    color = null,
  } = props;
  const textStyle = useMemo(() => {
    const sizeStyle = fontSize ? { fontSize: Dim.Normalize(fontSize) } : {};
    const colorStyle = color ? { color } : {};
    return [styles.smallText, sizeStyle, colorStyle, style];
  }, [fontSize, color, style]);
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={line}
      onPress={onTextPress}
      style={textStyle}
    >
      {children}
    </Text>
  );
}, arePropsEqual);

