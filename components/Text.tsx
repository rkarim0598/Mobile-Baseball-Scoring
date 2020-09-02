import React from 'react';
import { Text as RNText } from 'react-native';

interface Props {
    size: number;
    style?: object,
    color?: string
}

export default function Text<Props>(props) {
    return <RNText style={{ fontFamily: 'Quando_400Regular', color: props.color || '#333333', fontSize: props.size, ...props.style }}>{props.children}</RNText>
}