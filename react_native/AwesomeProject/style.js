export default class Style {
  static Colors = {
    red: { color: 'red' },
    blue: { color: 'blue' }
  };
  static BackgroundColor = {
    red: { backgroundColor: 'red' },
    blue: { backgroundColor: 'blue' }
  };
  static Size = {
    w100: { weight: 100 },
    w200: { weight: 200 },
    h100: { height: 100 },
    h200: { height: 200 }
  };
  static TextAlign = {
    center: { textAlign: 'center' },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' }
  };
  static Flex = (i) => {
    return { flex: i }
  };
  static Main = {
    flex: 1,
    backgroundColor: 'powderblue',
  };
  static CMain = {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'powderblue'
  }
  static Sub = {
    flex: 1,
    backgroundColor: '#000'
  }
}
