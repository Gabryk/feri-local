import { StyleSheet } from 'react-native'
import { scale, moderateScale, verticalScale } from 'utils/scaling'

export default StyleSheet.create({
  container: {
    height: 1,
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    backgroundColor: '#c9c9c9'
  },
})