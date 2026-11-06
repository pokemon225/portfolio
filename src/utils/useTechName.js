import { useTranslation } from 'react-i18next';

// Translates descriptive skill/technology names via "tech-names" in the
// locale file. Product names (PyTorch, AWS, ...) aren't listed, so they fall
// back to the original English.
export const useTechName = () => {
  const { t } = useTranslation();
  const names = t('tech-names', { returnObjects: true });
  return name => (typeof names === 'object' && names[name]) || name;
};
