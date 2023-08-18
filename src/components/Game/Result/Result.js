import { Link } from 'react-router-dom';
import { StyledResul } from './Result.styled';

export const Result = ({ correct, questions }) => {
  return (
    <StyledResul>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <Link to={'/'}>
        <button>Попробовать снова</button>
      </Link>
    </StyledResul>
  );
};
