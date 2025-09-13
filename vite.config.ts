import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

export default defineConfig(({ command }) => {
    const isBuild = command === "build"

    // 公共插件配置
    const plugins = [
        vue(),
        // 自动导入 Vue API 和 ElementPlus 组件
        AutoImport({
            imports: ["vue"],
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(__dirname, "types/auto-imports.d.ts"), // 自动生成 auto-imports.d.ts
        }),
        // 自动注册 Vue 组件并生成类型声明
        Components({
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(__dirname, "types/components.d.ts"), // 自动生成 components.d.ts
            directoryAsNamespace: true, // 可选：按目录生成命名空间，避免组件名冲突
        }),
        // 仅在 build 时生成库类型声明文件
        isBuild
            ? dts({
                outDir: "dist/types", // 输出到 dist/types
                insertTypesEntry: true, // 自动生成类型入口文件
            })
            : null,
    ].filter(Boolean)

    if (!isBuild) {
        // serve 模式（example 预览）
        return {
            root: path.resolve(__dirname, "example"),
            plugins,
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "src"),
                },
            },
        }
    }

    // build 模式（库打包）
    return {
        plugins,
        build: {
            lib: {
                entry: path.resolve(__dirname, "src/index.ts"),
                name: "FormRender",
                fileName: (format) => `form-render.${format}.js`,
            },
            rollupOptions: {
                // 外部依赖，不打包
                external: ["vue", "element-plus"],
                output: {
                    globals: {
                        vue: "Vue",
                        "element-plus": "ElementPlus",
                    },
                },
            },
            cssCodeSplit: true,
        },
    }
})
