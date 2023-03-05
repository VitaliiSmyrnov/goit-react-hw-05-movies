import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import { StyledForm } from './SearchBox.styled';

export function SearchBox({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const searchName = e.target.elements.query.value.trim();

    if (searchName === '') {
      return toast.error('Enter the name');
    }

    onSubmit(searchName);
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">
        <BsSearch size="20" />
        <span>Search</span>
      </button>
    </StyledForm>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
