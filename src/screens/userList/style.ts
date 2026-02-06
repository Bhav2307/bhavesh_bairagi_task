import { Platform, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import Dim from '../../utils/dimentions';
const SIZE = Dim.Normalize(60);

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  productCard: {
    width: Dim.Width(90),
    backgroundColor: Colors.White,
    margin: 5,
    borderRadius: Dim.Normalize(10),
    padding: Dim.Normalize(10),
    shadowColor: Platform.OS == 'android' ? '#000' : Colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.9,
    shadowRadius: 4.65,
    elevation: Platform.OS == 'android' ? 4 : 9,
  },
  noDataTxt: {
    marginTop: Dim.Normalize(200),
    width: '100%',
    textAlign: 'center',
  },
  name: {
    fontSize: Dim.Normalize(17),
    fontWeight: '700',
  },
  username: {
    color: '#666',
    marginBottom: Dim.Normalize(8),
  },
  divider: {
    height: Dim.Normalize(1),
    backgroundColor: '#eee',
    marginVertical: Dim.Normalize(10),
  },
  userDetailTxt: {
    marginBottom: Dim.Normalize(7.5),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dim.Width(90),
    height: Dim.Normalize(48),
    backgroundColor: Colors.White,
    borderRadius: Dim.Normalize(12),
    paddingHorizontal: Dim.Normalize(14),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignSelf: 'center',
    marginTop: Dim.Normalize(20),
  },

  searchIcon: {
    fontSize: Dim.Normalize(16),
    marginRight: Dim.Normalize(8),
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: Dim.Normalize(14),
    color: '#000',
  },
});

export default styles;
