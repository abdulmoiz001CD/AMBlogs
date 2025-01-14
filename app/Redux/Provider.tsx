// // 'use client';

// import { Provider } from 'react-redux';
// import store from './store';

// interface ProviderProps {
//   children: React.ReactNode;
// }

// const AppProvider: React.FC<ProviderProps> = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// export default AppProvider;


'use client';

import { Provider } from 'react-redux';
import { store } from './Store';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}