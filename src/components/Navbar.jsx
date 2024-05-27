export default function Navbar(props) {
    return (
        <nav>
            <ul>
                <li href={props.item.link}>
                    {props.item.anchor} - culo
                </li>
            </ul>
        </nav>
    )
}