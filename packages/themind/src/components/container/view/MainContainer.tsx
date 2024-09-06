import React from "react";
import {observer} from "mobx-react";
import {DomProps} from "@midasin/hrp-widget";

interface Props extends DomProps {
}
    
export const MainContainer: React.FC<React.PropsWithChildren<Props>> = observer(props=>{
    return (
        <div {...DomProps.extract(props)}>
        
        </div>
    );
});
