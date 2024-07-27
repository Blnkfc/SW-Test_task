import '@testing-library/jest-dom'
import 'whatwg-fetch';

import { TextEncoder, TextDecoder } from 'util';
import { mockReactFlow } from './mockReactFlow';

global.TextEncoder = TextEncoder;
//@ts-ignore
global.TextDecoder = TextDecoder;

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  
  global.ResizeObserver = ResizeObserver