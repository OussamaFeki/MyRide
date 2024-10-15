import React from 'react';
import { ScrollView } from 'react-native';
import Avatarupload from '../../../../components/common/Avatarupload';
import CustomText from '../../../../components/common/CustomText';
import Section from '../../../../components/common/SectionAndItem';

function Profile() {
  return (
    <ScrollView>
      <Avatarupload />
      <CustomText text='User Name' position='center' />
      
      <Section
        icon="user"
        title="Edit Profile"
        next='EditProfile'
      />
     <Section
        icon="bell"
        title="Notification"
        next='Notification'
      />
      <Section
        icon="credit-card"
        title="Payment"
        next='Payment'
      />
      <Section
        icon="shield"
        title="Security"
        next='Security'
      />
      <Section
        icon="globe"
        title="Language"
        next='Language'
      />
      <Section
        icon="lock"
        title="Privacy Police"
        next='PrivacyPolice'
      />
      <Section
        icon="users"
        title="Invite Friends"
        next='InviteFriends'
      />
      <Section
        icon="log-out"
        title="Log out"
        next='Log out'
      />
    </ScrollView>
  );
}

export default Profile;
