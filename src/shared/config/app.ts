export const APP_NAME = 'FORBAS';
export const APP_TEL = '+7 (999) 123-45-67';
export const SUPPORT_EMAIL = 'support@example.com';

const START_YEAR = 2020;
const CURRENT_YEAR = new Date().getFullYear();

export const COPYRIGHT =
  START_YEAR === CURRENT_YEAR
    ? `© ${START_YEAR}`
    : `© ${START_YEAR}–${CURRENT_YEAR}`;
