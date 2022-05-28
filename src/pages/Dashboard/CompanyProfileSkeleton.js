import ContentLoader from 'react-content-loader';

export default () => (
    <ContentLoader
        speed={2}
        width={200}
        height={100}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
    >
        <rect y="5" width="200" height="20" />
        <rect y="35" width="150" height="15" />
        <rect y="58" width="150" height="15" />
        <rect y="80" width="150" height="15" />
    </ContentLoader>
);