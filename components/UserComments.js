import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserComments = ({ comments, productId }) => {
  const filteredComments = comments.filter(comment => comment.productId === productId);

  return (
    <View style={styles.container}>
      {filteredComments.map(comment => (
        <View key={comment.id} style={styles.commentContainer}>
          <Text style={styles.userName}>{comment.userName}</Text>
          <Text style={styles.date}>{comment.date}</Text>
          <Text style={styles.comment}>{comment.comment}</Text>
          <Text style={styles.rating}>{comment.rating}/5</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  commentContainer: {
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
  comment: {
    marginBottom: 5,
  },
  rating: {
    fontWeight: 'bold',
  },
});

export default UserComments;
