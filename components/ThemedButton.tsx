import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import Text from './Text';

interface Props {
    onPress: Function,
    text: string,
    height?: number,
    width?: number,
    style?: Object
}

const ThemedButton: React.FC<Props> = ({ onPress, text, style, height, width }) =>
    <TouchableOpacity
        onPress={() => onPress()}
        style={{
            backgroundColor: 'lightblue',
            borderRadius: 5,
            width: Dimensions.get('window').width * (width || .5),
            maxWidth: 400,
            height: Dimensions.get('window').height * (height || .1),
            alignItems: 'center',
            justifyContent: 'center',
            ...style
        }}
    >
        <Text>{text}</Text>
    </TouchableOpacity>

export default ThemedButton;