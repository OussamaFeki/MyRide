import React from 'react';
import { ScrollView } from 'react-native';
import Avatarupload from '../../../../components/common/Avatarupload';
import CustomText from '../../../../components/common/CustomText';
import SectionAndItem from '../../../../components/common/SectionAndItem';

function Profile() {
  return (
    <ScrollView>
      <Avatarupload />
      <CustomText text='User Name' position='center' />
      
      <SectionAndItem
        icon="user"
        title="Edit Profile"
        content={['Change Password', 'Update Info', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
     <SectionAndItem
        icon="bell"
        title="Notification"
        content={['Change Password', 'Update Email', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
      <SectionAndItem
        icon="credit-card"
        title="Payment"
        content={['Change Password', 'Update Email', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
      <SectionAndItem
        icon="shield"
        title="Security"
        content={['Change Password', 'Update Email', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
      <SectionAndItem
        icon="globe"
        title="language"
        content={['Change Password', 'Update Email', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
      <SectionAndItem
        icon="lock"
        title="Privacy Police"
        content={['Change Password', 'Update Email', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
      <SectionAndItem
        icon="users"
        title="Invite Friends"
        content={['Change Password', 'Update Email', 'Delete Account']} // Corrected prop name from "contents" to "content"
      />
    </ScrollView>
  );
}

export default Profile;
