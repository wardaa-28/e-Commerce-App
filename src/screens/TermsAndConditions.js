import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import newTheme from '../utils/Constants'

const TermsAndConditions = () => {
  return (
    <View style={{flex:1,padding:10,backgroundColor:newTheme.color}}>
      <Text style={styles.textBox}>These Terms govern the use of this Application, and,
      any other related Agreement or legal relationship with the Owner
      in a legally binding way.</Text>
     <Text style={{fontFamily:newTheme.semiBold,color:newTheme.primary,fontSize:20}}>The User must read this document carefully</Text>
     <Text style={styles.textBox} >By registering, Users agree to be fully responsible for all activities that occur under their username and password.
     Users are required to immediately and unambiguously inform the Owner via the contact details indicated in this document, if they think their personal information, including but not limited to User accounts, access credentials or personal data, have been violated, unduly disclosed or stolen.</Text>
     <Text style={styles.textBox}>
     Any applicable statutory limitation or exception to copyright shall stay unaffected
     </Text>
    </View>
  )
}

export default TermsAndConditions

const styles = StyleSheet.create({
    textBox:{fontFamily:newTheme.medium,color:newTheme.main,fontSize:18,marginTop:10}
})