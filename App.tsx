import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DocumentPicker from 'react-native-document-picker';

// DocumentPicker: may aik method hota hay 'pick' ka, ya hamara file file manager khol deta hay jaha say hum document ko pick kr saktay hay.
// ... DocumentPicker: may error a saktay is leyee hum isay 'try catch' may rakhain gay. 
// ... DocumentPicker: error catch krnay ka bhi specific method deta hay 'isCancel' 
// ... isCancel: without uploading cancel krdeya yaha wo error ayee ga.
// ... iger aisa nhi hay to 'else' wala error display krwa dain gay.

// pick: kay ander phla option hota hay type ka, yani kay kis type kay document mughay allow krnay hay.
// allowMultipleSelection: true: ka matlab hay k aik waqt may aik types ki bohat sari file upload kr saktay hay.
// .pickSingle: ya sirf hamari single file hi upload krwata hay.

export default function App():JSX.Element {

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true
      });
       
      // for single upload
        //  const doc = await DocumentPicker.pickSingle({
        //   type: [DocumentPicker.types.images],
        // })
      console.log(doc)
    } catch(err) {
      if(DocumentPicker.isCancel(err)) 
        console.log("User cancelled the upload", err);
      else 
        console.log(err)
    }
  }

  return (
    <View>
      <Text
        style={styles.text}>
        Document Picker
      </Text>
      <View style={styles.button}>
        <Button title="Select Document" onPress={selectDoc} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 40
  },
  text: {
    color: 'black',
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 40,
  }
})