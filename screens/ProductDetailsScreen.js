import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const seller = product.seller

  return (
    <View>
      <ProductDetails product={product} />
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View>
          <Text>Abrir Menu</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View>
          <View>
            <Button
              title="Especificações"
              onPress={() => {
                navigation.navigate('Specifications', { product });
              }}
            />
            <Button
              title="Vendedor"
              onPress={() => {
                navigation.navigate('SellerInfo', { seller });
              }}
            />
            <Button
              title="Comentários"
              onPress={() => {
                navigation.navigate('UserComments', { product });
              }}
            />
            <Button
              title="FAQ"
              onPress={() => {
                navigation.navigate('UserQuestions', { product });
              }}
            />
            <Button
              title="Fechar"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductDetailsScreen;
