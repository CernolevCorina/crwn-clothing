import CategoryItem from '../category-item/category-item.commponent';
import './directory.style.scss';

const Directory = ({categories}) => {
    return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={CategoryItem.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;