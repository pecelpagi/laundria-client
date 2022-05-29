import ContentLoader from 'react-content-loader';

export default () => {
    let contentWidth = 50;
    let elemWidth = 0;
    const containerElem = document.getElementById("company-profile-container");

    if (containerElem) {
        elemWidth = containerElem.offsetWidth;
        contentWidth = (containerElem.offsetWidth / 2) - 18;
    }

    return (
        <ContentLoader
            speed={2}
            width={elemWidth}
            height={150}
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
        >
            <rect y="0" width={contentWidth} height="72" />
            <rect x={contentWidth + 10} y="0" width={contentWidth} height="72" />
            <rect y="80" width={contentWidth} height="72" />
            <rect x={contentWidth + 10} y="80" width={contentWidth} height="72" />
        </ContentLoader>
    );
};