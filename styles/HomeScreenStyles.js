import { StyleSheet } from 'react-native';


const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  toggleContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  toggleButton: {
    width: 50,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#ccc',
    padding: 3,
    justifyContent: 'center',
  },
  toggleIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  indicatorLight: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
  },
  indicatorDark: {
    backgroundColor: '#f5dd4b',
    alignSelf: 'flex-end',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    borderColor: '#80deea',
    borderWidth: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00796b',
    marginBottom: 20,
    textAlign: 'center',
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ffab91',
    marginBottom: 15,
  },
  petName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ff7043',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  dailyTasksButton: {
    backgroundColor: '#4db6ac',
  },
  profileButton: {
    backgroundColor: '#ff7043',
  },
  settingsButton: {
    backgroundColor: '#42a5f5',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  toggleContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    marginRight: 10,
    color: '#ffffff',
  },
  toggleButton: {
    width: 50,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#444',
    padding: 3,
    justifyContent: 'center',
  },
  toggleIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  indicatorLight: {
    backgroundColor: '#888',
    alignSelf: 'flex-start',
  },
  indicatorDark: {
    backgroundColor: '#f5dd4b',
    alignSelf: 'flex-end',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    borderColor: '#333333',
    borderWidth: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#bb86fc',
    marginBottom: 20,
    textAlign: 'center',
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#03dac6',
    marginBottom: 15,
  },
  petName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ff7043',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  dailyTasksButton: {
    backgroundColor: '#03dac6',
  },
  profileButton: {
    backgroundColor: '#bb86fc',
  },
  settingsButton: {
    backgroundColor: '#3700b3',
  },
});

export { darkStyles, lightStyles };
