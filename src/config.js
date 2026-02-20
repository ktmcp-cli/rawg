import Conf from 'conf';

const config = new Conf({
  projectName: 'ktmcp-rawg',
  defaults: {
    apiKey: null,
    baseUrl: null
  }
});

export function getConfig() {
  return {
    apiKey: config.get('apiKey'),
    baseUrl: config.get('baseUrl')
  };
}

export function setConfig(key, value) {
  config.set(key, value);
}

export function isConfigured() {
  return !!config.get('apiKey');
}
