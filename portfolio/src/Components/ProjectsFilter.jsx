import { projectFilter } from "../const/projecttFilter"

export function ProjectsFilter({ filter, onChange }) {

    return (
        <ul className="flex flex-row justify-between items-center w-5/6 border-b-2 border-aquamarine-100 pb-8 mb-24">
            {
                projectFilter.map(({ label, id, value }) => {
                    const checked = filter === value ? 'text-aquamarine-100' : 'text-white'
                    return (
                        <label
                            className={`${checked} font-raleway font-medium text-lg cursor-pointer hover:text-aquamarine-100 transition-colors`}
                        >
                            <input
                                type="radio"
                                value={value}
                                id={id}
                                checked={(filter === value)}
                                onChange={onChange}
                                className="hidden peer"
                            />
                            {label}</label>
                    )
                })
            }
        </ul>
    )
}