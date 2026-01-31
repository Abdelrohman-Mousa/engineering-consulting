import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export function Dropzone() {
    const [file, setFile] = useState<File | null>(null);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            "image/*": [],
            "application/pdf": [],
        },
        multiple: false,
        onDrop: (acceptedFiles) => {
            const selectedFile = acceptedFiles[0];

            if (!selectedFile) return;

            if (selectedFile.size > 5 * 1024 * 1024) {
                alert("File must be less than 5MB");
                return;
            }

            setFile(selectedFile);
        },
    });


    return (
        <Box
            {...getRootProps()}
            sx={{
                className: "dropzone",
                border: "2px dashed",
                borderColor: isDragActive ? "primary.main" : "grey.400",
                borderRadius: "16px",
                p: 4,
                textAlign: "center",
                cursor: "pointer",
                bgcolor: file ? "grey.50" : "transparent",
                // width: "450px",
            }}
        >
            <input {...getInputProps()} />

            {!file ? (
                <Typography>
                    {isDragActive
                        ? "Drop the file here..."
                        : "Drag & drop file here, or click to upload"}
                </Typography>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    {/* Image Preview */}
                    {file.type.startsWith("image/") ? (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            style={{
                                maxWidth: "120px",
                                maxHeight: "120px",
                                borderRadius: "8px",
                                objectFit: "cover",
                            }}
                        />
                    ) : (
                        <PictureAsPdfIcon fontSize="large" color="error" />
                    )}

                    <Typography variant="body2">
                        {file.name}
                    </Typography>
                    <Typography
                        variant="caption"
                        color="primary"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setFile(null)}
                    >
                        Remove file
                    </Typography>

                </Box>
            )}
        </Box>
    );
}
