// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

type SectionCardProps = {
  width?: string | number;
  title: string;
  children: ReactNode;
};

export default function SectionCard({ width, title, children }: SectionCardProps) {
  return (
    <Card sx={{ width: width || "100%", borderLeft: 4, borderColor: "primary.main" }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
