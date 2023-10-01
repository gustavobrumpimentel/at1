import React from 'react';
import { View } from 'react-native';
import UserComments from '../components/UserComments';
import data from '../data';

const UserCommentsScreen = ({ route }) => {
  const { product } = route.params
  const comments = data.comments
  const productId = product.id

  console.log(productId)
  
  return (
    <View>
      <UserComments comments={comments} productId={productId} />
    </View>
  );
};

export default UserCommentsScreen;
