import React from "react";

interface IInputLoginProps {
    label: string; 
    value: string;
    type?: string;
    id: string;
    autocomplete?: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input
                ref={ref}
                id={props.id}
                autoComplete={props.autocomplete}
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? props.onPressEnter && props.onPressEnter() : undefined}
            />
        </label>
    );
});