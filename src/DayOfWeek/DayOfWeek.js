export default function DayOfWeek(props) {
    const days = ['sun', 'mon', 'tus', 'thur', 'wens', 'friday', 'saut'];
    return <div>{days[props.day]}</div>;
}