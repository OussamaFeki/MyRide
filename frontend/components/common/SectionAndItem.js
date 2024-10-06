import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
function SectionAndItem({ icon, title, content = [] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <ListItem onPress={() => setExpanded(!expanded)}>
        <Icon name={icon} size={24} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
        </ListItem.Content>
        <Icon name={expanded ? 'chevron-down' : 'chevron-right'} size={24} />
      </ListItem>
      {expanded && (
        <View> 
          {content.map((item, index) => (
            <ListItem key={index} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      )}
    </View>
  );
}

export default SectionAndItem;
