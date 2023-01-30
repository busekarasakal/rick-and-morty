export const ENV_PRODUCTION = 'production';
export const ENV_DEVELOPMENT = 'development';
export const ENV_TEST = 'test';

export const APP_ENV = import.meta.env.MODE || ENV_DEVELOPMENT;
export const VITE_API_URL = import.meta.env.VITE_API_URL;

export const PLACE_HOLDER_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
