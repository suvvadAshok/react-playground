import React from "react";

const FileInputComponent = () => {
  const [fileContent, setFileContent] = React.useState("");

//   console.log(fileContent);

//   const s = ["a", "b", "c"];

//   [1, 2, 3, 4, 5, 6, 7].map(() =>
//     console.log(s[Math.floor(Math.random() * 3)])
//   );

//   console.log(
//     fileContent.split("const ").map((i) => i[0] && console.log(i[0]))
//   );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content: string = String(e.target && e.target.result);
        setFileContent(content);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileChange(e)} />
      <div>
        <h2>File Content:</h2>
        <pre>{fileContent}</pre>
      </div>
    </div>
  );
};

export default FileInputComponent;
