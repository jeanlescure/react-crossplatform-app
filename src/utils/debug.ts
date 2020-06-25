import env from 'config';

const {DEBUG_LOG} = env;

const SPECIFIC_KEYS: string[] = [
  // 'Root.globalState',
];

class Debug {
  log(key: string, ...rest: any) {
    console.log('DEBUG_LOG', DEBUG_LOG);
    console.log('SPECIFIC_KEYS.length', SPECIFIC_KEYS.length);
    if (
      DEBUG_LOG &&
      (SPECIFIC_KEYS.length === 0 || SPECIFIC_KEYS.includes(key))
    ) {
      console.log(`DEBUG [${key}]:`, ...rest);
    }
  }
}

export default new Debug();
