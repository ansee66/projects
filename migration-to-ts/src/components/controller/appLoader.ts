import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'bddc22702afe4e8886647616e2cb31cf',
    });
  }
}

export default AppLoader;
