import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    return {
        base: "/airtable-api-crud-demo/",
        plugins: [react()],
        build: {
            target: "es2019",
            minify: "esbuild",
            sourcemap: false,
        },
        define: {
            __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
        },
    };
});
