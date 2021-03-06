// React
import React from "react";
// Utils
import _ from 'lodash';
// UI
import Paper from 'material-ui/Paper';

// Dialog
export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    // Events

    onContainerClick(e){
        e.stopPropagation();
        if(this.props.onRequestClose){
            this.props.onRequestClose(e);
        }
    }

    // Render
    render(){

        let contClassName = "sa-modal-dialog";
        if(this.props.open) contClassName += ' sa-modal-dialog-open';
        else contClassName += ' sa-modal-dialog-close';

        return (
            <div 
                className={contClassName} 
                onClick={(e) => this.onContainerClick(e)}
            >
                <div className="sa-modal-dialog__wrap">
                    <Paper className="sa-modal-dialog__container">
                        {this.props.title ? (
                        <h2 className="sa-modal-dialog__title">
                            {this.props.title}
                        </h2>
                        ) : null}
                        {this.props.children}
                        {this.props.actions ? (
                        <div className="sa-modal-dialog__actions">
                        {_.map(this.props.actions, (action, key) => (
                            <div key={key} className="sa-modal-dialog__action">
                                {action}
                            </div>
                        ))}
                        </div>
                        ) : null}
                    </Paper>
                </div>
            </div>
        );
    }
}
