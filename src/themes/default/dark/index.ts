import colors from '../colors';

export default {
  app: {
    flex: 1,
    backgroundColor: colors.brandColors[3],
  },
  stackScreen: {
    backgroundColor: colors.brandColors[3],
  },
  screen: {
    backgroundColor: colors.brandColors[3],
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'stretch',
  },
  screenCentered: {
    backgroundColor: colors.brandColors[3],
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  containerCentered: {
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.darkGray,
    padding: 10,
  },
  title: {
    color: colors.white,
    fontSize: 25,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.lightGray,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    color: colors.brandColors[2],
    fontSize: 15,
  },
  textInput: {
    color: colors.brandColors[2],
    padding: 3,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 2,
    margin: 3,
    marginBottom: 12,
  },
  link: {
    color: colors.brandColors[0],
  },
  disabledText: {
    color: colors.mediumGray,
  },
  button: {
    borderRadius: 2,
    marginBottom: 12,
    backgroundColor: colors.info,
    color: colors.white,
  },
  alert: {
    backgroundColor: colors.alert,
    color: colors.white,
  },
  error: {
    backgroundColor: colors.error,
    color: colors.white,
  },
  warning: {
    backgroundColor: colors.warning,
    color: colors.white,
  },
  success: {
    backgroundColor: colors.success,
    color: colors.white,
  },
  info: {
    backgroundColor: colors.info,
    color: colors.white,
  },
  alertText: {
    color: colors.alert,
  },
  errorText: {
    color: colors.error,
  },
  warningText: {
    color: colors.warning,
  },
  successText: {
    color: colors.success,
  },
  infoText: {
    color: colors.info,
  },
  modalBackground: {
    backgroundColor: colors.black,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: colors.lightGray,
    marginBottom: 10,
  },
};
