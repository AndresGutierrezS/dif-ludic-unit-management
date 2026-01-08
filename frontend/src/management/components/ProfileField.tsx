
interface Props {
    label: string;
    value: string;
}

export const ProfileField = ({label, value}: Props) => {

    return (
        <div>
            <p className="text-(--color-principal) font-semibold mb-1">{label}</p>
            <p className="bg-(--color-page-bg) rounded-md border-l-4 border-(--color-principal) p-2">{value}</p>
        </div>
    )
}