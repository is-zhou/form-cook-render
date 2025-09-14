import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

export default defineConfig(({ command }) => {
    const isBuild = command === "build"

    // 公共插件
    const plugins = [
        vue(),
        // 开发模式才启用自动导入
        !isBuild &&
        AutoImport({
            imports: ["vue"],
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(__dirname, "types/auto-imports.d.ts"),
        }),
        // 开发模式才启用组件自动注册
        !isBuild &&
        Components({
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(__dirname, "types/components.d.ts"),
            // directoryAsNamespace: true, // 库模式下建议关闭
        }),
        // build 模式才生成类型声明文件
        isBuild &&
        dts({
            outDir: "dist",
            insertTypesEntry: true,
            entryRoot: "src",
        }),
    ].filter(Boolean)

    if (!isBuild) {
        // 开发预览模式（example）
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

    // 库打包模式
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
