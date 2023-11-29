import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    width: '90%'
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'center'
  },
  nameBox: {
    borderWidth: 1,
    borderColor: 'rgba(187, 190, 191, .5)',
    minWidth: '30%',
    minHeight: 50,
    padding: 10,
    margin: 10
  },
  box: {
    borderWidth: 1,
    borderColor: 'rgba(187, 190, 191, .5)',
    width: '80%',
    minHeight: 50,
    padding: 10,
    margin: 10
  },

  boxTitle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  updateButton: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 300
  },
  errorText: {
    color: 'red',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20
  }
})
