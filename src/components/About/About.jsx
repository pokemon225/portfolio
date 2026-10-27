import { StyledAboutSection } from '../../styles/About/AboutLayout/StyledAboutLayout';
import { StyledAboutTextContainer } from '../../styles/About/AboutText/StyledAboutTextContainer';
import { StyledAboutPortrait } from '../../styles/About/AboutText/StyledAboutPortrait';
import {
  StyledTimelineContainer,
  StyledTimeline,
} from '../../styles/About/AboutTimeline/StyledAboutTimeline';
import { picturesTextVariants } from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useGlobalContext } from '../../Context/Context';

const About = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <StyledAboutSection pageTheme={theme}>
        <StyledSectionHeading lang={lang}>
          <h2 id='about'> {t('about-heading')}</h2>
        </StyledSectionHeading>

        <StyledTimelineContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <StyledTimeline>
            {['experience', 'education'].map(section => {
              const entries = t(section, { returnObjects: true });
              return (
                <div key={section}>
                  <h3>{t(`${section}-heading`)}</h3>
                  <ol>
                    {Array.isArray(entries) &&
                      entries.map(entry => (
                        <li key={`${entry.role}-${entry.period}`}>
                          <h4>{entry.role}</h4>
                          <p>
                            {entry.company}
                            {entry.location && ` · ${entry.location}`}
                          </p>
                          <small>{entry.period}</small>
                        </li>
                      ))}
                  </ol>
                </div>
              );
            })}
          </StyledTimeline>
        </StyledTimelineContainer>

        <StyledAboutTextContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <StyledAboutPortrait>
            <source type='image/webp' srcSet='/rasters/daiki-yamamoto.webp' />
            <img
              src='/rasters/daiki-yamamoto.webp'
              alt={t('portrait-alt')}
              width='800'
              height='800'
              loading='lazy'
            />
          </StyledAboutPortrait>
          <p>{t('about-text-top')}</p>
          <p>{t('about-text-bottom')}</p>
        </StyledAboutTextContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;
