import React from 'react';

import ReactAux from  '../../hoc/Aux';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, sidedrawer, backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;