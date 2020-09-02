import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ThemedButton from '../components/ThemedButton';
import Text from '../components/Text';

interface Props {
    navigation: {
        navigate: Function
    }
}

const Home: React.FC<Props> = ({ navigation }) => {
    return (
        <ScreenWrapper>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ThemedButton
                    onPress={() => navigation.navigate('New Game')}
                    text={'Score New Game'}
                    style={{
                        marginBottom: 10
                    }}
                />
                <ThemedButton
                    onPress={() => navigation.navigate('New Game')}
                    text={'View Scored Games'}
                />
            </View>
        </ScreenWrapper>
    );
}

export default Home;