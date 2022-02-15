declare module "*.module.css";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        description: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        description?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        description: true;
    }
}
