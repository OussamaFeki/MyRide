import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import RadioOption from '../../../../../components/common/RadioOption';

function Language() {
  const [selectedOption, setSelectedOption] = useState(null);
  const suggestedOptions = ['English (US)', 'English (UK)'];
  const languageOptions = [
    'Mandarin',
    'Hindi',
    'Spanish',
    'French',
    'Arabic',
    'Bengali',
    'Russian',
    'Indonesian',
  ];

  const handlePress = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <ScrollView>
      {/* Suggested Section */}
      <View>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Suggested</Text>
        {suggestedOptions.map((option, index) => (
          <RadioOption
            key={index}
            title={option}
            press={handlePress}
            selected={selectedOption}
          />
        ))}
      </View>

      {/* Language Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Language</Text>
        {languageOptions.map((option, index) => (
          <RadioOption
            key={index}
            title={option}
            press={handlePress}
            selected={selectedOption}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Language;