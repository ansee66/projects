import { Options, Endpoint } from '../../types/index';

class Loader {
  options: Options;

  constructor(readonly baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(
    { endpoint, options = {} }: { endpoint: Endpoint; options?: Options },
    callback = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load<T>('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (res.ok) {
      return res;
    } else {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
  }

  makeUrl(endpoint: Endpoint, options?: Options): string {
    const urlOptions: Options = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: string, endpoint: Endpoint, callback: (data: T) => void, options?: Options) {
    fetch(this.makeUrl(endpoint, options), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
