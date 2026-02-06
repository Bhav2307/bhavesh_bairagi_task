import { Platform, StyleSheet } from 'react-native';
import Dim from '../../utils/dimentions';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexGrow : 1,
    padding: Dim.Normalize(16),
    paddingBottom: Dim.Normalize(30),
    backgroundColor: Colors.WhiteSmoke,
  },
  headerCard: {
    backgroundColor: Colors.White,
    borderRadius: Dim.Normalize(16),
    padding: Dim.Normalize(20),
    marginBottom: Dim.Normalize(16),
            shadowColor: Platform.OS == 'android' ? '#000' : Colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.9,
    shadowRadius: 4.65,
    elevation: Platform.OS == 'android' ? 4 : 9,
  },

  name: {
    fontSize: Dim.Normalize(22),
    fontWeight: '700',
  },

  username: {
    color: Colors.lightCharcoal,
    marginVertical: Dim.Normalize(4),
  },

  email: {
    marginTop: Dim.Normalize(6),
    color: Colors.darkCharcoal,
  },

  card: {
    backgroundColor:Colors.White,
    borderRadius: Dim.Normalize(14),
    padding: Dim.Normalize(16),
    marginBottom: Dim.Normalize(14),
        shadowColor: Platform.OS == 'android' ? '#000' : Colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.9,
    shadowRadius: 4.65,
    elevation: Platform.OS == 'android' ? 4 : 9,
  },

  sectionTitle: {
    fontSize: Dim.Normalize(16),
    fontWeight: '600',
    marginBottom: 10,
  },

  row: {
    fontSize: Dim.Normalize(14),
    color: Colors.darkCharcoal,
    marginBottom: 6,
  },

  companyName: {
    fontSize: Dim.Normalize(15),
    fontWeight: '600',
    marginBottom: 6,
  },

  quote: {
    fontStyle: 'italic',
    color: Colors.lightCharcoal,
    marginBottom: 6,
  },
});