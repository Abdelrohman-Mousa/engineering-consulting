import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {useTranslation} from "react-i18next";

type DropzoneProps = {
    onFileSelect?: (file: File | null) => void;
};

export function Dropzone({ onFileSelect }: DropzoneProps) {
    const { t } = useTranslation();

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

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
            onFileSelect?.(selectedFile);

            // Image preview
            if (selectedFile.type.startsWith("image/")) {
                const url = URL.createObjectURL(selectedFile);
                setPreview(url);
            } else {
                setPreview(null);
            }
        },
    });

    // Cleanup preview URL
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleRemove = () => {
        setFile(null);
        setPreview(null);
        onFileSelect?.(null);
    };

    return (
        <Box
            {...getRootProps()}
            className="dropzone"
            sx={{
                border: "2px dashed",
                borderColor: isDragActive ? "primary.main" : "grey.400",
                borderRadius: "16px",
                p: 4,
                textAlign: "center",
                cursor: "pointer",
                bgcolor: file ? "grey.50" : "transparent",
            }}
        >
            <input {...getInputProps()} />

            {!file ? (
                <Typography>
                    {isDragActive
                        ? t("DropHere")
                        : t("Drop")}
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
                    {preview ? (
                        <img
                            src={preview}
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

                    <Typography variant="body2">{file.name}</Typography>

                    <Typography
                        variant="caption"
                        color="primary"
                        sx={{ cursor: "pointer" }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRemove();
                        }}
                    >
                        Remove file
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
