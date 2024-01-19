import React, { memo } from 'react'
// memo cong dung nhu pureComponent
function ChildUseCallBack(props) {

    let title = "CyberLearn";

    let object = { id: 1, name: "bao" };

    console.log('title', title);
    console.log('object', object);
    console.log('re-render');

    return (
        <div>
            <small>{props.renderNotify()}</small>
            <p>ChildUseCallBack</p>
        </div>
    )
}

export default memo(ChildUseCallBack);
