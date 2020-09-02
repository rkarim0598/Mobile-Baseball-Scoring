import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { View, TouchableOpacity } from 'react-native';
import Text from '../components/Text';
import ThemedButton from '../components/ThemedButton';

interface Props {
    navigation: Object
}

interface RowProps {
    disabled?: boolean
}

const Row: React.FC<RowProps> = () => {
    return (
        <View
            style={{
                width: '100%',
                height: '10%',
                borderWidth: 1,
                borderTopWidth: 0,
                borderBottomWidth: 1,
                borderColor: 'lightblue',
            }}
        >
            <Text color={'white'}>Hey</Text>
        </View>
    )
}
const NewGame: React.FC<Props> = (props) => {
    return <ScreenWrapper>
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}
        >
            <Text size={20} color='lightblue'>Away Team Lineup</Text>
            <View
                style={{
                    height: '70%',
                    width: '90%',
                    borderTopWidth: 1,
                    borderColor: 'lightblue',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Row disabled={true} />
                {Array.from({ length: 9 }).map((num: number) =>
                    <Row key={num} />
                )}
            </View>
            <ThemedButton
                onPress={() => { }}
                text={'Next'}
                height={0.08}
            />
        </View>
    </ScreenWrapper>
}

export default NewGame