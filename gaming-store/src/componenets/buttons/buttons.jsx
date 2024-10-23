import './button.css'
export default function Button ({className , onClick ,name}) { 
    return (<button className={className} onClick={onClick}>{name}</button>)
}