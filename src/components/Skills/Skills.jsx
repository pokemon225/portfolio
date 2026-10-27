import { skillData } from '../../data/skillData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledSkillsSection,
  StyledSkillsContainer,
  StyledSkillGroup,
} from '../../styles/Skills/SkillsLayout/StyledSkillsSection';
import { StyledSkillsList } from '../../styles/Skills/Skill/StyledSkillsList';
import { parentTechnologyVariants } from '../../utils/animations';
import Skill from './Skill';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useGlobalContext } from '../../Context/Context';

const Skills = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSkillsSection pageTheme={theme}>
      <StyledSectionHeading lang={lang}>
        <h2 id='technology'> {t('technology-heading')}</h2>
      </StyledSectionHeading>
      <StyledSkillsContainer>
        {skillData.map(group => {
          return (
            <StyledSkillGroup key={group.id}>
              <h3>{t(`skill-categories.${group.key}`)}</h3>
              <StyledSkillsList
                initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
                whileInView='visible'
                viewport={{ once: true }}
                variants={parentTechnologyVariants}
              >
                {group.skills.map(skill => {
                  return <Skill key={skill} skill={skill} />;
                })}
              </StyledSkillsList>
            </StyledSkillGroup>
          );
        })}
      </StyledSkillsContainer>
    </StyledSkillsSection>
  );
};

export default Skills;
