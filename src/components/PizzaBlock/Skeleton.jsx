import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    className="pizza-block"
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="138" cy="129" r="124" />
    <rect x="10" y="319" rx="10" ry="10" width="280" height="88" />
    <rect x="11" y="280" rx="10" ry="10" width="280" height="17" />
    <rect x="143" y="417" rx="25" ry="25" width="148" height="46" />
    <rect x="11" y="432" rx="10" ry="10" width="90" height="27" />
  </ContentLoader>
);

export default Skeleton;
