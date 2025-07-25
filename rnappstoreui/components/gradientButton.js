import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton(props) {
    return (
        <LinearGradient
            colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244,0.9)']}
            end={{ x: 1, y: 1 }}
            start={{ x: 0.1, y: 0.2 }}
            className={`rounded-full ${props.containerClass}`}
            style={{
                borderRadius: 9999,
            }}
        >
            <TouchableOpacity className={`rounded-full p-3 px-4 ${props.buttonClass}`}>
                <Text className="font-bold text-white">{props.value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}
