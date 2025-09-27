import { UI_LIBRARY_VERSION } from '../index';

describe('@others/ui', () => {
  it('should export version constant', () => {
    expect(UI_LIBRARY_VERSION).toBe('0.1.0');
  });

  it('should be defined', () => {
    expect(UI_LIBRARY_VERSION).toBeDefined();
  });
});
