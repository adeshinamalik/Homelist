import React, { useState, useContext } from "react";
import Nav from "./Nav";
import { AuthContext } from "./Context";

const CreateRealtor = () => {
  const [company_name, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [company_mail, setCompanyMail] = useState("");
  const [website_url, setWebsiteUrl] = useState("");
  const [contact, setContact] = useState("");
  const [profile_picture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [realtor_id, setRealtorId] = useState(""); // New state for realtor_id

  const { sessionId } = useContext(AuthContext);

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];  // Only allow one file
    setProfilePicture(file);

    // Generate image preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("company_name", company_name);
    formData.append("description", description);
    formData.append("company_mail", company_mail);
    formData.append("website_url", website_url);
    formData.append("contact", contact);
    formData.append("realtor_id", realtor_id);  // Append realtor_id

    if (profile_picture) {
      formData.append("profile_picture", profile_picture);  // Append single image
    }
    console.log(sessionId);
    try {
      const response = await fetch("https://server-347a.onrender.com/realtor/register_profile", {
        method: "POST",
        headers: {
          "Authorization": `Session ${sessionId}`,  // Use the session ID in the header
        },
        body: formData,
      });
      if (response.ok) {
        console.log("Realtor added successfully");
      } else {
        console.log("Failed to add realtor");
      }
    } catch (error) {
      console.error("Error adding realtor", error);
    }
  };

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          value={company_name}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="email"
          value={company_mail}
          onChange={(e) => setCompanyMail(e.target.value)}
          placeholder="Company Email"
          required
        />
        <input
          type="url"
          value={website_url}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="Website URL"
        />
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Number"
          required
        />
        <input
          type="text"
          value={realtor_id}
          onChange={(e) => setRealtorId(e.target.value)}
          placeholder="Realtor ID"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: '100px', height: '100px', margin: '5px', objectFit: 'cover' }}
          />
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRealtor;
