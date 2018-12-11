import * as React from 'react';
import Controls from './controls';
import WorkSpace from './workSpace';

const App = ({...props}) => (
    <div className='app'>
        <Controls />
        <WorkSpace />
    </div>
);

export default App;