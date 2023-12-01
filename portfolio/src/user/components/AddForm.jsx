import { services } from "../../const/services"
import { useAddForm } from "../hooks/useAddForm"

export function AddForm() {
    const {
        handleSubmit,
        handleFileUpload,
        handleInputChange,
        projectData
    } = useAddForm()

    const labelStyle = "flex flex-col gap-1 text-aquamarine-100 font-raleway font-semibold text-lg"
    const inputStyle = "bg-[#1e2435] focus:outline-aquamarine-100 border rounded-lg text-white font-lato font-normal px-4 py-1 border-aquamarine-100"
    const fileInputStyle = "text-white font-normal bg-dark-blue rounded-lg file:font-semibold file:bg-blue-600 file:text-dark-blue font-lato file:bg-aquamarine-100 file:rounded-lg file:mr-2 file:cursor-pointer file:py-1 file:px-2 hover:file:bg-aquamarine-200"

    return (
        <form
            className="flex flex-col gap-4 bg-[#1e2435] backdrop-blur-lg rounded-lg px-20 py-10"
            onSubmit={handleSubmit}>
            <label htmlFor="title" className={labelStyle}>
                Title of the project
                <input
                    type="text"
                    name="title"
                    id="title"
                    className={inputStyle}
                    onChange={handleInputChange}
                    value={projectData.title} />
            </label>

            <label htmlFor="longDesc" className={labelStyle}>
                Write a description of the project brief
                <input
                    type="text"
                    name="longDesc"
                    id="longDesc"
                    className={inputStyle}
                    onChange={handleInputChange}
                    value={projectData.longDesc} />
            </label>

            <label htmlFor="shortDesc" className={labelStyle}>
                Write in a sentence the purpose of the project
                <input
                    type="text"
                    name="shortDesc"
                    id="shortDesc"
                    className={inputStyle}
                    onChange={handleInputChange}
                    value={projectData.shortDesc} />
            </label>

            <label htmlFor="service-type" className={labelStyle}>
                Select the service/s type
                <ul className=" flex flex-wrap w-5/6 justify-start gap-4" id="service-type">
                    {
                        services.map(({ id, inputLabel, value }) => {
                            return (
                                <li className="w-min" key={id}>
                                    <input type="checkbox" id={id} value={value} className="hidden peer" name="type" onChange={handleInputChange} />
                                    <label htmlFor={id} className="font-lato font-normal inline-flex items-center opacity-50 justify-between w-max px-5 py-2.5 text-gray-500 bg-transparent border-2 border-aquamarine-100 text-white rounded-2xl cursor-pointer dark:hover:text-aquamarine-200 dark:border-gray-700 peer-checked:border-aquamarine-200 peer-checked:opacity-100 peer-checked:bg-aquamarine-200 hover:text-gray-600 dark:peer-checked:text-white peer-checked:text-white hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        {inputLabel}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </label>

            <label htmlFor="cardImg" className={labelStyle}>
                Upload a cover for the project
                <input
                    type="file"
                    name="cardImg"
                    id="cardImg"
                    className={fileInputStyle}
                    onChange={(e) => handleFileUpload(e, "cardImg")}
                />
            </label>

            <label htmlFor="bannerImg" className={labelStyle}>
                Upload a banner for the project
                <input
                    type="file"
                    name="bannerImg"
                    id="bannerImg"
                    className={fileInputStyle}
                    onChange={(e) => handleFileUpload(e, "bannerImg")}
                />
            </label>

            <label htmlFor="behance" className={labelStyle}>
                Paste the behance link
                <input
                    type="url"
                    name="behance"
                    id="behance"
                    className={inputStyle}
                    onChange={handleInputChange}
                    value={projectData.behance} />
            </label>

            <label htmlFor="author" className={labelStyle}>
                Select the author/s of the project
                <select
                    name="author"
                    id="author"
                    className="bg-[#1e2435] py-2 px-2 border border-aquamarine-100 rounded-lg text-white font-lato font-normal"
                    onChange={handleInputChange}
                    value={projectData.author}>
                    <option value="" disabled defaultValue='default' >Select the author</option>
                    <option value="uxperience" >UXperience</option>
                    <option value="isabela" >Isabela Cortes</option>
                    <option value="samuel" >Samuel Ortiz</option>
                    <option value="alejandro" >Alejandro Solarte</option>
                </select>
            </label>

            <button type="submit"
                className="bg-aquamarine-100 inline-flex items-center justify-center py-2 rounded-xl gap-2 w-3/4 m-auto"
            >Submit project <img src="/add-project.svg" alt="" /></button>
        </form>
    )
}