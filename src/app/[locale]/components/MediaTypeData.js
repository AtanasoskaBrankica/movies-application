'use-client';
import {useSelector} from 'react-redux';
import Card2 from './Card2';
import {selectedFilteredMediaData} from '@/redux/slice/filterSlice';

const MediaTypeData = () => {
  const filteredMediaData = useSelector(selectedFilteredMediaData);

  return (
    <div className="container">
      <div className="row">
        {filteredMediaData?.map(item => (
          <Card2 key={item?.id} media={item} />
        ))}
      </div>
    </div>
  );
};

export default MediaTypeData;
