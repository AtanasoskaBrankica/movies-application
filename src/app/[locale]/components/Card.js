import Image from 'next/image';

const Card = ({media}) => {
  return (
    <div
      key={media?.id}
      class="card col-xs-1 col-sm-6 col-md-3 bg-black text-white p-1 position-relative"
    >
      <span
        class="badge rounded-circle bg-warning text-white position-absolute top-0 end-0 mt-1 p-2"
        style={{fontSize: '0.7rem', width: '30px'}}
      >
        {media?.vote_average}
      </span>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          media?.backdrop_path || media?.poster_path
        }`}
        width={100}
        height={120}
        class="card-img-top "
        alt="..."
      />

      <div class="card-body p-0 pt-2">
        <p class="card-title fw-bold" style={{fontSize: '0.8rem'}}>
          {media?.title || media?.original_name}
        </p>
      </div>
    </div>
  );
};

export default Card;
