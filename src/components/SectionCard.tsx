import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        background: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : "linear-gradient(135deg, #ffffff 0%, #f4f9ff 100%)",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        boxShadow: (theme) => theme.shadows[2],
      }}
    >
      {title && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Box component="span" sx={{ fontWeight: 600, fontSize: "1rem" }}>
            {title}
          </Box>
        </Box>
      )}
      {children}
    </Paper>
  );
}
