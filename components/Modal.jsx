// CustomModal.js
import React,{useState} from 'react';
import { Modal, View, Text, Button, StyleSheet, FlatList, Pressable } from 'react-native';
import { MODAL_TYPE_TASK_LABEL } from '../constant/constant';
import LabelComponent from './LabelComponent';
import { CATEGORIES_LABEL } from '../constant/constant';
const CustomModal = ({ visible, type, onClose, onAction }) => {
  const [selectedCategory,setSelectedCategory] = useState({})
  const selectCategory =(category)=>{
    setSelectedCategory(category)
  }
  const renderContent = () => {
    switch (type) {
      case MODAL_TYPE_TASK_LABEL:
        return (
          <View style={styles.content}>
            <View style={styles.modalHeader}>
            <Text style={styles.title}>Select the categories</Text>
            <Pressable onPress={() => {
    
    onAction();
    onClose();
  }}>
              <Text style={{fontSize:25,color:'red'}}>X</Text>
            </Pressable>
            </View>
            <View style={{height:'50%'}}>
              
            <FlatList
            data={CATEGORIES_LABEL}
            // showsHorizontalScrollIndicator={false}
            style={styles.flatList}
            renderItem={({item}) => <LabelComponent data={item} changeSelectedcategory={selectCategory} selectedCategory={selectedCategory}/> } />
            </View>
            <Pressable title="Login" style={styles.button}onPress={() => {
    
              onAction(selectedCategory);
              onClose();
            }}>
              <Text>Select</Text>
            </Pressable>
          </View>
        );
      case 'logout':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Logout</Text>
            <Button title="Logout" onPress={() => {
              // Handle logout logic here
              onAction();
              onClose();
            }} />
          </View>
        );
    //   case 'info':
    //     return (
    //       <View style={styles.content}>
    //         <Text style={styles.title}>About the App</Text>
    //         <Text>This is an awesome app that does amazing things!</Text>
    //         <Button title="Got it" onPress={() => {
    //           onAction();
    //           onClose();
    //         }} />
    //       </View>
    //     );
      default:
        return (
          <View style={styles.content}>
           
            <Pressable title="Login" style={styles.button}onPress={() => {
    
              onAction();
              onClose();
            }}>
              <Text>Select</Text>
            </Pressable>
          </View>
        );
    }
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {renderContent()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: '40%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  content: {
    width: '100%',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'550'
  },
  button:{
    width:'30%',
    height:'15%',
    alignSelf:'center',
    backgroundColor:'#FE8D27',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    color:'white'
  }

});

export default CustomModal;
