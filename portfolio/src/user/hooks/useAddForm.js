import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const useAddForm = () => {
    const [projectData, setProjectData] = useState({
        title: '',
        longDesc: '',
        shortDesc: '',
        behance: '',
        author: '',
        type: ''
    })

    const handleFileUpload = async (e, fieldName) => {
        const file = e.target.files[0]; // Get the selected file
        // Create a child reference with a unique name
        const fileRef = ref(storage, `${fieldName}/${file.name}`);

        try {
            // Upload the file to Firebase Storage
            await uploadBytes(fileRef, file)

            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(fileRef);

            // Update the projectData state with the download URL
            setProjectData((prevProjectData) => ({
                ...prevProjectData,
                [fieldName]: downloadURL,
            }));

        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const updatedTypes = checked
                ? [...projectData.type, value]
                : projectData.type.filter((type) => type !== value);

            setProjectData((prevProjectData) => ({
                ...prevProjectData,
                type: updatedTypes,
            }));
        } else {
            setProjectData((prevProjectData) => ({
                ...prevProjectData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, 'projects'), projectData)
    }

    return {
        handleSubmit,
        handleInputChange,
        handleFileUpload,
        projectData
    }

}