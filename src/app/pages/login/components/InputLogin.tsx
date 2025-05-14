

interface IInputLoginProps {
    label: string; 
    value: string;
    type?: string;
    id: string;
    autocomplete?: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <input
                id={props.id}
                autoComplete={props.autocomplete}
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? props.onPressEnter && props.onPressEnter() : undefined}
            />
        </label>
    );
}