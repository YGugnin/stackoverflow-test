import { environment } from '../../environments/environment';

export const APP_CONFIG = {
  appTitle:   'Stackoverflow test',
  apiUrl:     'https://api.stackexchange.com/2.3', //no sense do it for reach env (for now :)
  apiKey:     null, // exampe: 'U4DMV*8nvpm3EOpvf69Rxw((' - you will blocked after 300 requests
  apiFilter:  '!95kkh65WFZ)RhgpIx)CICUjWUcI0zc7mF5moTK(msTJOtjUZmFore2f2z5RGtW8a5o1fOtSuXjBXbXbnQWAoExQo_fU89xxwPx)Gi', //for context body
  production: environment.production
};
