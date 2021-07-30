import LoginStore from './login';
import PageStore from './page';

class RootStore {
  constructor() {
    this.pageStore = new PageStore(this);
    this.loginStore = new LoginStore(this);
  }
}

export default new RootStore();