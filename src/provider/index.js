import { theme } from '../stitches.config';

import './styles/normalize.css';
import './styles/global.styles.css';

import globalStyles from './styles';

export const AppProvider = ({ children }) => {
    globalStyles();

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default AppProvider;