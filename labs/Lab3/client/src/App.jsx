import { useState } from "react";

const App = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [message, setMessage] = useState("");
  const [displayDogImage, setDisplayDogImage] = useState("");

  // Handle single file selection
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // Fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/single");
      const blob = await response.blob();
      setDisplayImage(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // Upload single file
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }

      setMessage("File uploaded successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch multiple images
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/multiple");
      const filenames = await response.json();

      const filePromises = filenames.map(async (filename) => {
        const fileResponse = await fetch(`http://localhost:8000/fetch/file/${filename}`);
        const fileBlob = await fileResponse.blob();
        return URL.createObjectURL(fileBlob);
      });

      setDisplayImages(await Promise.all(filePromises));
    } catch (error) {
      console.error("Error fetching multiple files:", error);
    }
  };

  // Fetch a random dog image
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDisplayDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  // Save dog image
  const saveDogImage = async () => {
    try {
      const fileResponse = await fetch(displayDogImage);
      const blob = await fileResponse.blob();
      const file = new File([blob], "dog-image.jpg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error saving dog image:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#333" }}>Image Upload & Fetch</h1>
      <p style={{ color: "#d9534f" }}>{message}</p>

      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile} style={buttonStyle}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img src={displayImage} alt="Fetched" style={imageStyle} />
        </div>
      )}

      <form onSubmit={handleSubmitSingleFile} style={formStyle}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button type="submit" style={buttonStyle}>Upload Single File</button>
      </form>

      <button onClick={fetchMultipleFiles} style={buttonStyle}>Fetch Multiple Files</button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
        {displayImages.length > 0 ? (
          displayImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Fetched ${index}`} style={imageStyle} />
          ))
        ) : (
          <p>No images to display</p>
        )}
      </div>

      <button onClick={fetchDogImage} style={buttonStyle}>Fetch Dog Image</button>
      {displayDogImage && (
        <div>
          <img src={displayDogImage} alt="Dog" style={imageStyle} />
          <br />
          <button onClick={saveDogImage} style={buttonStyle}>Save it</button>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  padding: "10px 15px",
  margin: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
};

const imageStyle = {
  width: "200px",
  margin: "10px",
  borderRadius: "5px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

export default App;
