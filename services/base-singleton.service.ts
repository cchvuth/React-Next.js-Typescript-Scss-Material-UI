// Extend to use this class
export default class SingletonService {
  static instance: SingletonService;

  data: any = {};

  static getInstance(): SingletonService {
    if (this.instance == null) {
      this.instance = new SingletonService();
    }
    return this.instance;
  }
}
