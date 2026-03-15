import { Box, Typography } from "@mui/material";

export default function PageHeader({ title }: { title: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        p: 1,
        borderRadius: 1,
      }}
    >
      <Typography
        sx={{ fontSize: "1.5rem", fontWeight: "550", textAlign: "center" }}
        variant="h4"
        gutterBottom
      >
        {title}
      </Typography>
    </Box>
  );
}
