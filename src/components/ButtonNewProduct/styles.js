import { StyleSheet } from 'react-native'
import { scale, moderateScale, verticalScale } from 'utils/scaling'

export default StyleSheet.create({
  container: {
    marginTop: scale(16),
    alignItems: 'center',
    maxHeight: scale(64)
  },
  colBtn: {
    flexDirection: 'row-reverse',
    marginLeft: scale(8)
  },
  btn: {
    width: scale(64),
    height: scale(64)
  },
  btnIcon: {
    fontSize: scale(52)
  }
})
