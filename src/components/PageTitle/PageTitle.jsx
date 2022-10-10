import PropTypes from 'prop-types';
import css from './PageTitle.module.css';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

// export const PageTitle = ({ text }) => {
//   return <h1 className={css.title}>{text}</h1>;
// };

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
