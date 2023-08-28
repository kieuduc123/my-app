import React from 'react';

const SlidebarMenu = React.forwardRef((props,ref) => {
    return (
        <div  style={{width : '300px' ,position : 'fixed',
        zIndex:'10px'}}
        ref={ref}
        >
            
        </div>
    );
});

export default SlidebarMenu;