import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ContactItem from '../../../../components/common/ContactItem';

const contactData = [
  {
    id: '1',
    name: 'Darron Kulikowski',
    state: 'Outgoing',
    date: 'Dec 20, 2024',
  },
  {
    id: '2',
    name: 'Tanner Stafford',
    state: 'Incoming',
    date: 'Dec 07, 2024',
  },
  {
    id: '3',
    name: 'Pedro Huard',
    state: 'Outgoing',
    date: 'Nov 19, 2024',
  },
  {
    id: '4',
    name: 'Marielle Wigington',
    state: 'Missed',
    date: 'Nov 12, 2024',
  },
  {
    id: '5',
    name: 'Annabel Rohan',
    state: 'Outgoing',
    date: 'Oct 23, 2024',
  },
  {
    id: '6',
    name: 'Titus Kitamura',
    state: 'Incoming',
    date: 'Oct 05, 2024',
  },
  {
    id: '7',
    name: 'Marielle Wigington',
    state: 'Missed',
    date: 'Nov 12, 2024',
  },
  {
    id: '8',
    name: 'Titus Kitamura',
    state: 'Incoming',
    date: 'Oct 05, 2024',
  },
];

function Inbox() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contactData}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <ContactItem 
            name={item.name} 
            state={item.state} 
            date={item.date} 
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default Inbox;