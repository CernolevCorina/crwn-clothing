import DirectoryItem from '../directory-item/directory-item.commponent';
import {DirectorContainer} from './directory.style.jsx';
import categories from '../../api/categories';

const Directory = () => {
    return (
    <DirectorContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectorContainer>
  );
}

export default Directory;