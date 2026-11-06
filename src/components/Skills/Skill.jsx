import { StyledSkillItem } from '../../styles/Skills/Skill/StyledSkillItem';
import { childTechnologyVariants } from '../../utils/animations';
import { useTechName } from '../../utils/useTechName';

const Skill = ({ skill }) => {
  const techName = useTechName();
  return (
    <StyledSkillItem variants={childTechnologyVariants}>
      {techName(skill)}
    </StyledSkillItem>
  );
};

export default Skill;
