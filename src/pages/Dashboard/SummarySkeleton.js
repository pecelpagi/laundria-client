import ContentLoader from 'react-content-loader';

export default () => (
    <ContentLoader
        speed={2}
        width={390}
        height={150}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
    >
        <rect y="0" width="190" height="72" />
        <rect x="200" y="0" width="190" height="72" />
        <rect y="80" width="190" height="72" />
        <rect x="200" y="80" width="190" height="72" />
    </ContentLoader>
);