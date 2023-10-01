import React from 'react';
import { View } from 'react-native';
import UserQuestions from '../components/UserQuestions';
import data from '../data';

const UserQuestionsScreen = ({ route }) => {
  const { product } = route.params
  const questions = data.questions
  const productId = product.id

  console.log(productId)
  
  return (
    <View>
      <UserQuestions questions={questions} productId={productId} />
    </View>
  );
};

export default UserQuestionsScreen;
