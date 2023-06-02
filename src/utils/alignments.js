import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from 'utils/scaling'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  bg: {
    backgroundColor: 'red',
  },
  rCenter: {
    justifyContent: 'center'
  },
  rTop: {
    justifyContent: 'flex-start'
  },
  cCenter: {
    alignItems: 'center'
  },
  hSpacer: {
    maxWidth: scale(16)
  },
  vSpacer: {
    minHeight: scale(16),
    maxHeight: scale(16)
  },
  section: {
    paddingHorizontal:  scale(16)
  }
})
