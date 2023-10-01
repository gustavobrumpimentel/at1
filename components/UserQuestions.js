import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserQuestions = ({ questions, productId }) => {
  console.log(questions)

  const filteredQuestions = questions.filter(question => question.productId === productId);

  return (
    <View style={styles.container}>
      {filteredQuestions.map(question => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.userName}>{question.userName}</Text>
          <Text style={styles.date}>{question.date}</Text>
          <Text style={styles.question}>{question.question}</Text>
          <Text style={styles.answer}>{question.answer}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  questionContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#555',
    marginBottom: 5,
  },
  question: {
    marginBottom: 5,
  },
  answer: {
    fontWeight: 'bold',
  },
});

export default UserQuestions;
