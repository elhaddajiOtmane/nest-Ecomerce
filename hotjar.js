import Hotjar from '@hotjar/browser';

const siteId = 5044480; 
const hotjarVersion = 6;

if (typeof window !== 'undefined') {
  Hotjar.init(siteId, hotjarVersion);
}
