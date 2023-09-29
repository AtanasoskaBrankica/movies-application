"use client";
import Link from "next/link";
import Card from "./Card";

const MediaGallery = ({ sectionTitle, mediaData, type }) => {
  return (
    <div className="container mb-1">
      <div className="row">
        <div className="row d-flex justify-content-between mb-1">
          <div className="col-auto">
            <h5>{sectionTitle}</h5>
          </div>
          <div className="col-auto">
            <Link href={`/home/${type}`}>
              <button
                type="button"
                class="btn btn-outline-primary rounded-pill"
                style={{ fontSize: "0.7rem" }}
              >
                View more
              </button>
            </Link>
          </div>
        </div>

        <div className="row">
          {mediaData?.slice(0, 4)?.map((media) => (
            <Card key={media?.id} media={media} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
