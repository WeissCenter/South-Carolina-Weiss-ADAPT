import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  // NgxLoggerLevels: TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
  logLevel: NgxLoggerLevel.OFF,
  API_URL: 'https://qk48uaklwc.execute-api.us-east-1.amazonaws.com/sc-prod/',
  VAPID_KEY: 'BNA-ooUHx_LgEu77FEVS3-FzanH_zZeYwXRIT996LFjtLbAV-Yd427Yq9r1D0-pdy9XQMbP6DjLtPjlQnYL9I_w',
  cognitoRegion: 'us-east-1',
  cognitoDomainName: 'sc-prod-adaptadmin',
  s3PublicAssetsDomainName: 'sc-prod-adaptpublicassetsbucket',
  clientId: '7qahjnhdg67aoqsfe8kt1mtlph',
  contentRoot: 'assets/text',
  contentFileName: 'admin-content-text.json',
  appDomain: 'adapt-admin.ed.sc.gov',  //'ose-adapt.ade.arkansas.gov',
  enforceLogin: true,
  envLabel: 'LOCAL',
  enforceRole: true,
  callbackUrl: 'https://adapt-admin.ed.sc.gov/auth/redirect',  //'https://ose-adapt.ade.arkansas.gov/auth/redirect',
  Cognito: {
    userPoolId: 'us-east-1_Nv1AL04T7',
    userPoolClientId: '7qahjnhdg67aoqsfe8kt1mtlph',
  },
  loginContent: 'assets/content-labels.json',
  pagesContent: 'assets/text/admin-content-text.json',
  organizationName: '(OSE) Office of Special Education',

  // #### State logo custom settings and footer
  logoStyleClass: 'sc_logo_re-size', // AR: width-card-lg, SC: sc_logo_re-size
  logoPath: 'assets/shared/logos/states/sc', // generic logos: 'assets/shared/logos/generic'
  logoExtension: 'png',
  copyrightText: 'The State of South Carolina.',
  //################################
};
