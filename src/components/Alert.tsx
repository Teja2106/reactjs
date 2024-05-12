export default function Alert(props: any) {
    return(
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
            { props.alert.message }
        </div>
    )
}