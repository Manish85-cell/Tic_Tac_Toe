

interface BlockProps {
    value?: string | null;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Block: React.FC<BlockProps> = (props) => {
    return (
        <div onClick={props.onClick} className="block">
            {props.value}
        </div>
    );
}

export default Block;
