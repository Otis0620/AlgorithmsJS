import { helloWorld } from './index';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toEqual('hello world');
  });
});
