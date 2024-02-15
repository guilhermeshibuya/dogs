import styles from './FeedModal.module.css';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
