import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';


interface Tag {
    id: string;
    text: string;
}

interface TagsProps {
    tags?: Tag[];
    setTags: (tags: Tag[]) => void;
    suggestions: Tag[];
}

const Tags: React.FC<TagsProps> = ({ tags, setTags, suggestions }) => {

  const handleDelete = (i: number) => {
    if (!tags) return;
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: Tag) => {
    if (!tags) return;
    setTags([...tags, tag]);
  };

  return (
    <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        autocomplete
    />
  );
};

export default Tags;