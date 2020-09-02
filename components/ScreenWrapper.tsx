import React from 'react';
import { View } from 'react-native';

interface Props {
    children: React.ReactNode
}

const ScreenWrapper: React.FC<Props> = (props) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#333333'
            }}
        >
            {props.children}
        </View>
    )
}

export default ScreenWrapper;