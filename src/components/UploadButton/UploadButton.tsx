import { Button, FormControl, IconButton } from "@mui/material";
import React from "react";

export const UploadButton = () => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Do something with the files
    // const files = e.target.files;
  };

  return (
    <FormControl margin="normal" fullWidth>
      {/* Upload img */}
      <Button variant="contained" component="label">
        Upload file
        <input
          hidden
          accept=".pdf,.jpg,.png"
          multiple
          type="file"
          onChange={handleFileUpload}
        />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          hidden
          accept=".pdf,.jpg,.png"
          type="file"
          onChange={handleFileUpload}
        />
      </IconButton>
    </FormControl>
  );
};
