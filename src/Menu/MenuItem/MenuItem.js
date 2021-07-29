import '../Menu.css';
export default function MenuItem(props) {
    return <li className='children'>
        {props.children}

    </li>;
}